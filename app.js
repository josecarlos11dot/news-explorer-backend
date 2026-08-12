const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('News Explorer backend funcionando');
});

mongoose.connect('mongodb://127.0.0.1:27017/news-explorer')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
