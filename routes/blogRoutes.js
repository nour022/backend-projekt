const express = require("express");

const router = express.Router();

// Sample blog posts data

const blogPosts = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the frist blog post",
  },
  {
    id: 2,
    title: "Scond Blog Post",
    content: "This is the content of the Scond blog post",
  },
  {
    id: 3,
    title: "Third Blog Post",
    content: "This is the content of the Third blog post",
  },
];

// Route for fetching all blog posts

router.get("/api/blog-posts/", (req, res) => {
  res.json(blogreqPosts);
});

module.exports = router;
