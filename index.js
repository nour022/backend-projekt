const express = require("express"); // importing the express from venv
require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes");

const app = express();

const PORT = process.env.PORT || 4000;
app.use(blogRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to MERN stack backend");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
