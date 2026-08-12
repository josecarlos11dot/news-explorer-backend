const router = require('express').Router();
const auth = require('../middlewares/auth');
const { getArticles, createArticle, deleteArticle } = require('../controllers/articles');

router.use(auth);

router.get('/articles', getArticles);
router.post('/articles', createArticle);
router.delete('/articles/:articleId', deleteArticle);

module.exports = router;
