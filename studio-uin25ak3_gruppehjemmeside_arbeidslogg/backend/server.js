const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const members = require('./data/members.json');

app.use(cors());

app.get('/api/members', (req, res) => {
  res.json(members);
});

app.get('/api/members/:id', (req, res) => {
  const member = members.find(m => m.id === req.params.id);
  if (member) res.json(member);
  else res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`Server kjører på http://localhost:${port}`);
});