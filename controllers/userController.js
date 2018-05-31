const db = require("../models/User");

// Defining methods for the articleController
module.exports = {
  create: function(req, res) {
    const user = {
      Name: req.body.name,
      Gamertag: req.body.gamertag,
      Format: req.body.format
    };
    db
      .create(user)
      .then(dbUser => res.redirect("/"))
      .catch(err => res.status(422).json(err));
  }
};
