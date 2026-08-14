require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');
const NotFoundError = require('./errors/not-found-err');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, MONGO_URI = 'mongodb://127.0.0.1:27017/news-explorer' } = process.env;

const app = express();

app.use(express.json());

app.use(requestLogger);

app.use(usersRouter);
app.use(articlesRouter);

app.use((req, res, next) => {
  next(new NotFoundError('Recurso no encontrado'));
});

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, _next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'Error interno del servidor' : message,
  });
});

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
