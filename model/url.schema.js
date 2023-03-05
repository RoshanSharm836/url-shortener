const mongoose = require("mongoose");

// mongoose schema is used for giving structure and getting some of the perdefined function
const urlschema = new mongoose.Schema(
  {
    Full_url: { type: String },
    Short_url: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const url = mongoose.model("url", urlschema);
module.exports = url;
