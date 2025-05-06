var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/author", function (req, res, next) {
  return res.json({
    data: {
      author: "Long Bui",
      role: "Full-stack Engineer",
      phoneNumber: "(+84) 903 026 505",
    },
  });
});

module.exports = router;
