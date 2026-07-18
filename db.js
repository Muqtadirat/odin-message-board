const messages = [
  { id: 1, text: "Hi there!", user: "Amando", added: new Date() },
  { id: 2, text: "Hello World!", user: "Charles", added: new Date() },
];

function getMessageById(id) {
  return messages.find((message) => message.id === Number(id));
}

//? Get message id
//? Get data in selected id

module.exports = { messages, getMessageById };
