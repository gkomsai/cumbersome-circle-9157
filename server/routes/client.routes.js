const { Router } = require("express");
const { ClientModel } = require("../models/clientModal");

const clientRouter = Router();

clientRouter.get("/", async (req, res) => {
  const foundClients = await ClientModel.find();

  if (foundClients.length > 0) {
    return res.send(foundClients);
  } else {
    return res.send({ messgae: "Please create a Client first" });
  }
});

clientRouter.get("/:clientId", async (req, res) => {
  const { clientId } = req.params;

  const foundClient = await ClientModel.findOne({ _id: clientId });
  if (foundClient) {
    return res.send(foundClient);
  } else {
    return res.status(404).send({ messgae: "Client doesn't exists" });
  }
});

clientRouter.post("/create", async (req, res) => {
  try {
    const newClient = new ClientModel({ ...req.body });

    await newClient.save();
    return res.status(201).send({ message: "Client Created" });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "Something went wrong" });
  }
});

clientRouter.patch("/update/:clientId", async (req, res) => {
  const { clientId } = req.params;

  const foundClient = await ClientModel.findOne({ _id: clientId });

  if (foundClient) {
    await TagModel.findByIdAndUpdate({ _id: clientId }, req.body, {
      new: true,
    });
    return res.send({ message: "Update success", status: "success" });
  } else {
    return res
      .staus(400)
      .send({ message: "Couldn't found the tag", status: "error" });
  }
});

clientRouter.delete("/delete/:clientId", async (req, res) => {
  const { clientId } = req.params;

  const foundClient = await ClientModel.findOne({ _id: clientId });

  if (foundClient) {
    await ClientModel.deleteOne({ _id: clientId });
    return res
      .status(200)
      .send({ message: "Client deleted successfully", status: "success" });
  } else {
    return res.status(404).send({
      message: "Couldn't found the Client",
      status: "error",
    });
  }
});

module.exports = clientRouter;
