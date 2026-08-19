const pool = require("./pool");

async function insertMessage(author, message) {
  await pool.query("INSERT INTO messages (author, message) VALUES ($1, $2)", [
    author,
    message,
  ]);
}

async function getMessageById(id) {
  const { rows } = await pool.query(
    "SELECT id, author, message, added FROM messages WHERE id = $1",
    [id],
  );
  return rows[0];
}
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
}

module.exports = {
  insertMessage,
  getAllMessages,
  getMessageById,
};
