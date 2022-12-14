// const express = require("express");
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UserModel } = require("../models/userModel.js");
const { emailValidator } = require("../middleware/emailValidator.js");
const { passwordValidator } = require("../middleware/passwordValidator.js");
const {
  emailPassRequiredValidator,
} = require("../middleware/emailPassRequiredValidator.js");

const userRouter = Router();

userRouter.post(
  "/signup",
  [emailPassRequiredValidator, emailValidator, passwordValidator],
  async (req, res) => {
    try {
      console.log(req.body);
      const { email, password } = req.body;
      const isEmailPresent = await UserModel.findOne({ email });
      // console.log(isEmailPresent);
      if (isEmailPresent) {
        res
          .status(400)
          .send({ status: "error", message: "Email already exists" });
      } else {
        bcrypt
          .hash(password, 10)
          .then(async function (hash) {
            const newUser = new UserModel({ ...req.body, password: hash });
            await newUser.save();

            return res.status(201).send({
              message: "Signup Sussessfull",
              status: "success",
              user: newUser,
            });
          })
          .catch((err) => {
            console.log(err);

            return res
              .status(400)
              .send({ status: "error", message: err.message });
          });
      }
    } catch (err) {
      console.log(err);
      return res.status(400).send({ status: "error", message: err.message });
    }
  }
);

userRouter.post("/login", emailPassRequiredValidator, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    //   console.log(user);
    if (user) {
      let hash = user.password;
      bcrypt.compare(password, hash, function (err, result) {
        if (err) {
          return res.send({
            message: "Something went wrong, plz try again later",
            status: "error",
          });
        }
        if (result) {
          const token = jwt.sign(
            { userId: user._id, email: email },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "5h",
            }
          );
          return res.status(200).send({
            status: "success",
            message: "Login Successfull!!!",
            token: token,
            user: user,
          });
        } else {
          return res
            .status(400)
            .send({ status: "error", message: "Invalid Credentials" });
        }
      });
    } else {
      return res
        .status(400)
        .send({ status: "error", message: "Invalid Credentials" });
    }
  } catch (err) {
    // console.log(err);
    return res
      .status(400)
      .send({ status: "error", message: "Please try after sometime" });
  }
});

userRouter.post("/forgotten_password", async (req, res) => {
  const { email } = req.body;
  try {
    if (email) {
      const user = await UserModel.findOne({ email: email });
      if (user) {
        const token = jwt.sign(
          { userID: user._id },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "30m",
          }
        );
        const link = `http://localhost:3000/reset-password/${user._id}/${token}`;

        console.log(link);

        let info = await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: user.email,
          subject: "Everhour - Password Reset Link",
          html: `It seems you have forgotten your Everhour password. That's OK, it happens to the best of us! Would you like to reset your password: <a href=${link}>Click Here</a> to Reset Your Password
          <p> If you do not wish to reset your password, ignore this message. It will expire in 30 minutes.</p>
          `,
        });
        res.send({
          status: "success",
          message: "Password Reset Email Sent... Please Check Your Email",
        });
      } else {
        res
          .status(400)
          .send({ status: "failed", message: "Email doesn't exists" });
      }
    } else {
      res
        .status(400)
        .send({ status: "failed", message: "Email Field is Required" });
    }
  } catch (err) {
    res
      .status(400)
      .send({ status: "error", message: "Please give correct email-id" });
  }
});

userRouter.post("/reset-password/:id/:token", async (req, res) => {
  const { password, confirmPassword } = req.body;
  const { id, token } = req.params;
  // console.log(req.params);
  // console.log(id);

  const user = await UserModel.findById(id);

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        return res.status(500).send({
          status: "error",
          message: "New Password and Confirm New Password doesn't match",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const newHashPassword = await bcrypt.hash(password, salt);
        await UserModel.findByIdAndUpdate(user._id, {
          $set: { password: newHashPassword },
        });
        res
          .status(201)
          .send({ status: "success", message: "Password Reset Successfully" });
      }
    } else {
      res
        .status(400)
        .send({ status: "error", message: "All Fields are Required" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "error", message: "Invalid Token" });
  }
});

module.exports = { userRouter };
