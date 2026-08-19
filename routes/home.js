const { Router } = require("express");
const { messages } = require("../db");
const { createPost, getAllPosts } = require("../controllers/index");

const router = Router();

router.get("/", async (req, res) => {
  const posts = await getAllPosts();
  res.render("index", { posts });
});

// router.post("/new", (req, res) => {
//   const data = req.body;

//   messages.push({
//     id: messages.length + 1,
//     text: data.message,
//     user: data.author,
//     added: new Date(),
//   });

//   res.redirect("/");
// });

router.post("/new", createPost);

module.exports = router;
