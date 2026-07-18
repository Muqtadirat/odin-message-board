const express = require("express");
const path = require("node:path");

const routes = require("./routes");

const app = express();

const assetsPath = path.join(__dirname, "public");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", routes);
// app.get("/", (req, res) => {
//   res.render("index");
// });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Odin message board - listening on port ${PORT}!`);
});
