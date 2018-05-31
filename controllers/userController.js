const db = require("../models/User");

// Defining methods for the articleController
module.exports = {
  create: function(req, res) {
    const user = {
      _id: req.body._id,
      Name: req.body.name,
      Gamertag: req.body.gamertag,
      Format: req.body.format
    };
    db.User.create(user)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};
