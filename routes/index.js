const { Router } = require("express");

const router = Router();

const homeRouter = require("./home");
const newRouter = require("./new");
const detailsRouter = require("./details");

router.use("/", homeRouter);
router.use("/new", newRouter);
router.use("/details", detailsRouter)

module.exports = router;
