const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {
  res.render(`yang`, { yang: "Yang" });
});

module.exports = router;
