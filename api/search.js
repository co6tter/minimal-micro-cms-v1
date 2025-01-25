import { client } from '../libs/client.js';

export default async function handler(req, res) {
  const { q } = req.query;
  const result = await client.get({
    endpoint: 'content',
    queries: { q: q },
  });
  res.json(result);
}
