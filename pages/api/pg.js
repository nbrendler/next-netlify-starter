const { Client } = require('pg');

export default async function handler(req, res) {
  const client = new Client();
  await client.connect();

  const result = await client.query('SELECT $1::text as message', ['Hello world!']);

  await client.end();

  res.status(200).send(result);
}
