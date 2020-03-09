import express from 'express';
import UserCtrl from '../controllers/user';

const router = express.Router();
const userCrtl = new UserCtrl();
const {authenticate} = userCrtl;

router.get('/me', authenticate, userCrtl.me);
router.get('/find', authenticate, userCrtl.getUser);

router.post('/register', userCrtl.register);
router.post('/login', userCrtl.login);
router.post('/addfriend', authenticate, userCrtl.addFriend);

module.exports = router;