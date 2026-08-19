const Article = require('../models/article');
const BadRequestError = require('../errors/bad-request-err');
const ForbiddenError = require('../errors/forbidden-err');
const NotFoundError = require('../errors/not-found-err');
const { ERROR_MESSAGES } = require('../utils/constants');

module.exports.getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.send(articles))
    .catch(next);
};

module.exports.createArticle = (req, res, next) => {
  const {
    keyword, title, text, date, source, link, image,
  } = req.body;

  Article.create({
    keyword, title, text, date, source, link, image, owner: req.user._id,
  })
    .then((article) => {
      const articleObj = article.toObject();
      delete articleObj.owner;
      res.status(201).send(articleObj);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(ERROR_MESSAGES.INVALID_ARTICLE_DATA));
        return;
      }
      next(err);
    });
};

module.exports.deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId).select('+owner')
    .then((article) => {
      if (!article) {
        return Promise.reject(new NotFoundError(ERROR_MESSAGES.ARTICLE_NOT_FOUND));
      }

      if (article.owner.toString() !== req.user._id) {
        return Promise.reject(new ForbiddenError(ERROR_MESSAGES.FORBIDDEN_DELETE));
      }

      return Article.findByIdAndDelete(req.params.articleId)
        .then((deletedArticle) => res.send(deletedArticle));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError(ERROR_MESSAGES.INVALID_ARTICLE_ID));
        return;
      }
      next(err);
    });
};
