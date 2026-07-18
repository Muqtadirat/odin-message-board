const { Router } = require("express");
const { messages } = require("../db");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { messages });
});

router.post("/new", (req, res) => {
  const data = req.body;

  //   console.log("Author:", data.author);
  //   console.log("Message:", data.message);
  //   console.log("Date:", new Date());

  messages.push({
    id: messages.length + 1,
    text: data.message,
    user: data.author,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
