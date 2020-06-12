const { peopleRepo } = require('./people-repo');
const express = require('express');

const app = express();

app.get('/people', async (req, res) => {
  const response = await peopleRepo.readPeople();
  res.set('Content-Type', 'application/json');
  res.set('Access-Control-Allow-Origin', '*');
  res.send(response);
});

app.listen(3001, () => {
  console.log('Server listening on port 3000');
});