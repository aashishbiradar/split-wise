import express from 'express';
import UserCtrl from '../controllers/user';

const router = express.Router();
const userCrtl = new UserCtrl();
const {authenticate} = userCrtl;

router.get('/me', authenticate, userCrtl.me); 
router.post('/register', userCrtl.register);
router.post('/login', userCrtl.login);

module.exports = router;