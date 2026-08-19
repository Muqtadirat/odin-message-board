const { Router } = require("express");
const { getPostById } = require("../controllers/index");

const router = Router();

router.get("/:id", async (req, res) => {
  const post = await getPostById(req.params.id);
  if (!post) return res.status(404).send("Not found");
  res.render("details", post);
});

module.exports = router;
