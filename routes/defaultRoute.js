const express = require("express");
const router = express.Router();
// router.param('id', checkID);

router.route("/").get((req, res) => {
  res.status(200).json({
    status: "success",
    message: "You Are In the Default Route",
    tip: 'You Can use Tours End-point "/tours" ',
  });
});

module.exports = router;
