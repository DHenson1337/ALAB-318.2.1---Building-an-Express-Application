const express = require("express");
const app = express();
const path = require("path"); //For Part 3 Img Download

//Pulling from extra Routes
const yinRouter = require("./routes/yin.js");
const yangRouter = require("./routes/yang.js");
const yoRouter = require("./routes/yo.js");

//Part 2 Creating the MiddleWare (Can also just install a 3rd party one buuuuut eh)
const logRequestData = (req, res, next) => {
  console.log(
    `${req.method} request made to ${req.url} at ${new Date().toISOString()}`
  );
  next(); // Call next() to pass control to the next middleware/route handler
};

// Use the logging middleware globally for all routes
app.use(logRequestData);

//What this Middleware does is
//1) : This function logs the HTTP request method (req.method), the request URL (req.url), and the current timestamp.
//2) app.use(logRequestData): This middleware is applied to every request that the server handles. You can add it globally or on specific routes.
//3) The next() function is important—it tells Express to pass the request to the next middleware or route handler.

// Setting up the application with EJS View Engine
app.set(`views`, `views`);
app.set(`view engine`, `ejs`);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`)); //handles static files like images

// yin Route (Route 1)
app.use(`/yin`, yinRouter);

// Yang Route (Route 2)
app.use(`/yang`, yangRouter);

// yo Route (Route 3)
app.use(`/yo`, yoRouter);

// Download Route
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "images", "yo-image.jpg"); // Path to the image file
  res.download(filePath, "yo-image.jpg", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading the file.");
    }
  });
});

app.listen(3000, () => {
  console.log(`Express is running on port 3000`);
});
