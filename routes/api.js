const router = require("express").Router();
const controller = require("../controllers/userController");

router.route("/api/signup").post(controller.create);

module.exports = router;
