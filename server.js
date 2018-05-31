const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes/api");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// var db = require("./models");

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fnfdb");

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
