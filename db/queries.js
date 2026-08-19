const pool = require("./pool");

async function insertMessage(author, message) {
  await pool.query("INSERT INTO messages (author, message) VALUES ($1, $2)", [
    author,
    message,
  ]);
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT id FROM messages WHERE id = $1", [
    id,
  ]);

  console.log("message id", id);
}

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
//   console.log("fetch q", rows);
  return rows;
}

module.exports = {
  insertMessage,
  getAllMessages,
  getMessageById,
};
