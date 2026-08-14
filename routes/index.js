const router = require('express').Router();
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const NotFoundError = require('../errors/not-found-err');

router.use(usersRouter);
router.use(articlesRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Recurso no encontrado'));
});

module.exports = router;
