const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const validate = [
  body("author")
    .trim()
    .notEmpty()
    .withMessage("Author is required")
    .bail()
    .isLength({ min: 3, max: 12 })
    .withMessage("Author must be between 3 and 12 characters")
    .bail()
    .matches(/^[a-zA-Z0-9_ ]+$/)
    .withMessage(
      "Author can only contain letters, numbers, underscores, and spaces",
    )
    .bail()
    .escape(),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .bail()
    .isLength({ min: 10, max: 200 })
    .withMessage("Message must be between 10 and 200 characters")
    .bail()
    .escape(),
];

const createPost = [
  validate,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
        author: req.body.author,
        message: req.body.message,
      });
    }

    const { message, author } = matchedData(req);
    await db.insertMessage(message, author);
    res.redirect("/");
  },
];

async function getAllPosts(req, res) {
  const posts = await db.getAllMessages();

  return posts;
}

module.exports = {
  createPost,
  getAllPosts,
};
