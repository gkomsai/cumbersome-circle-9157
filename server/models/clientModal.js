const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
   clientName: {
      type: String,
      required: true,
      trim: true,
    },
    projectName: {
      type: Number,
      required: true,
      trim: true,
    },
    email: {
      type: Number,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: String,
      required: true,
      trim: true,
    },
    projectId: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const ClientModel = mongoose.model("client", clientSchema);
module.exports = { ClientModel };


    