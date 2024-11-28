const express = require(`express`);
const router = express.Router();

//http://localhost:3000/yang
router.get(`/`, (req, res) => {
  res.render(`yang`, { yang: "Yang" });
});

module.exports = router;
