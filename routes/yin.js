const express = require(`express`);
const router = express.Router();

//http://localhost:3000/yin
router.get(`/`, (req, res) => {
  res.render(`yin`, { yin: "Yin" });
});

module.exports = router;
