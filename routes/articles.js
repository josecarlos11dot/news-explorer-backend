const router = require('express').Router();
const auth = require('../middlewares/auth');
const { getArticles, createArticle, deleteArticle } = require('../controllers/articles');
const { validateArticle, validateArticleId } = require('../middlewares/validators');

router.use('/articles', auth);

router.get('/articles', getArticles);
router.post('/articles', validateArticle, createArticle);
router.delete('/articles/:articleId', validateArticleId, deleteArticle);

module.exports = router;
