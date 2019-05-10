const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/index");

const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;
const db_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;


mongoose.connect(db_URI, {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.set("json spaces", 2);

const port = process.env.PORT || 3001;

app.use("/", router);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
