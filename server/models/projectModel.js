const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
   name: {
      type: String,
      required: true,
      trim: true,
    },
    members: {
      type: Number,
      required: true,
      trim: true,
    },
    esCost: {
      type: Number,
      required: true,
      unique: true,
    },
    esTime: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    tag: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const ProjectModel = mongoose.model("user", projectSchema);
module.exports = { ProjectModel };

    