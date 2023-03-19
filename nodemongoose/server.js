const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const dbConfig = require("./config/database.config.js");
const UserRoute = require("./routes/user");
const ProductRoute = require("./routes/product");
const CardRoute = require("./routes/cart");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Mongo DB Connetion
mongoose.Promise = global.Promise;

mongoose.set("strictQuery", false);

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Databse Connected Successfully!!");
  })
  .catch((err) => {
    console.log("Could not connect to the database", err);
    process.exit();
  });

app.use("/user", UserRoute);
app.use("/products", ProductRoute);
app.use("/cart", CardRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello Crud Node Express" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
