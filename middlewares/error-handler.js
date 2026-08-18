const { ERROR_MESSAGES } = require('../utils/constants');

function errorHandler(err, req, res, _next) {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? ERROR_MESSAGES.SERVER_ERROR : message,
  });
}

module.exports = errorHandler;
