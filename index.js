const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect('mongodb://joe:doe@localhost:27017/masterclass_project', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use("/", routes);

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
