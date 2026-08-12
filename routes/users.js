const router = require('express').Router();
const auth = require('../middlewares/auth');
const { createUser, login, getCurrentUser } = require('../controllers/users');
const { validateSignup, validateSignin } = require('../middlewares/validators');

router.post('/signup', validateSignup, createUser);
router.post('/signin', validateSignin, login);
router.get('/users/me', auth, getCurrentUser);

module.exports = router;
