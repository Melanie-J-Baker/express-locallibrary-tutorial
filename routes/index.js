const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  const message = req.body;
  console.log(message);
  messages.push({ text: message.text, user: message.user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
