const express = require("express");
const cors =require("cors");
const { connection } = require("./config/db.js");
const { userRouter } = require("./routes/user.routes.js");
const { projectRouter } = require("./routes/project.routes.js");


const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/",userRouter);

app.use("/dashboard/projects", projectRouter);


app.listen(port, async () => {
  try {
    await connection;
    console.log(`app is litening on port ${port}`)
    console.log("conneted to db");
  } catch (error) {
    console.log(error);
  }
});
