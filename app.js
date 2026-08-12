const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');
const NotFoundError = require('./errors/not-found-err');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

app.use(usersRouter);
app.use(articlesRouter);

app.use((req, res, next) => {
  next(new NotFoundError('Recurso no encontrado'));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'Error interno del servidor' : message,
  });
});

mongoose.connect('mongodb://127.0.0.1:27017/news-explorer')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
