const express = require(`express`);
const router = express.Router();

// GET route to render the form
//localhost:3000/yo
http: router.get(`/`, (req, res) => {
  res.render(`yo`, { yo: "Yo" });
});

//=============================The Form Section

// POST route to handle form submission
router.post(`/submit`, (req, res) => {
  // Console logging the submission
  console.log("Form Data:", req.body);

  // Response if succsessful
  res.send("Success!");
});

// Route with a parameter to modify content
router.get(`/:side`, (req, res) => {
  const side = req.params.side; // Get the route parameter
  res.render("yo", { yo: `I see you joined, ${side}! side` });
});

module.exports = router;
