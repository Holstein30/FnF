var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Name: String,
  Gamertag: String,
  Format: String
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
