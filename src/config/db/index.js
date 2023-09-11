const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/nodejs_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });

    console.log("Connect success!!!");
  } catch (error) {
    console.error("error :>> ", error);
    console.log("Fail !!!");
  }
}

module.exports = { connect };
