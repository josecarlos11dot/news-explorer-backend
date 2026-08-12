const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('News Explorer backend funcionando');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
