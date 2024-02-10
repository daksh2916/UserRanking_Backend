const mongoose = require("mongoose");
require("dotenv").config();

const dBconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      () => console.log("DB connection successful")
    )
    .catch((error) => {
      console.log("Error in connection to the database");
    });
};

module.exports = dBconnect();

