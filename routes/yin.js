const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {
  res.render(`yin`, { yin: "Yin" });
});

module.exports = router;
