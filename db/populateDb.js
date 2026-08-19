require("dotenv").config();
const { Client } = require("pg");

const SQL = `
DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR ( 12 ),
  message VARCHAR ( 200 ),
  added TIMESTAMP DEFAULT NOW()
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      process.env.NODE_ENV === "production"
        ? process.env.DATABASE_URL
        : `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
