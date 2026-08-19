const { Router } = require("express");
const { messages, getMessageById } = require("../db");

const router = Router();

router.get("/:id", (req, res) => {
  const { id, author, text, added } = getMessageById(req.params.id);
  res.render("details", { id, author, text, added });
  // const message = getMessageById(req.params.id);
  //   res.render("details", { message });
  //   res.render("details" + req.params.id);
});

module.exports = router;
