import express from 'express';

export const app = express();

app.use(express.json());

app.get('/v1/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});