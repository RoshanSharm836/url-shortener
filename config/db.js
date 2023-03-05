const mongoose = require("mongoose");
mongoose.set("strictQuery", true); // always use
const connection = (mongoose.connection = async () => {
  try {
    console.log("connected");
    await mongoose.connect(
      "mongodb+srv://dbURLS:2LY2nmxEuAc7Vole@cluster0.m0ljsp0.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = connection;
