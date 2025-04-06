const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET response from Server 1');
});

app.listen(4001, () => {
  console.log('Server 1 is up and running on port 4001!');
});
