const router = require('express').Router();
const usersRouter = require('./users');
const articlesRouter = require('./articles');
const NotFoundError = require('../errors/not-found-err');
const { ERROR_MESSAGES } = require('../utils/constants');

router.use(usersRouter);
router.use(articlesRouter);

router.use((req, res, next) => {
  next(new NotFoundError(ERROR_MESSAGES.NOT_FOUND));
});

module.exports = router;
