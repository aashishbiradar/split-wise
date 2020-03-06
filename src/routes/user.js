import express from 'express';
import UserCtrl from '../controllers/user';

const router = express.Router();

router.get('/me', new UserCtrl().getUser); 
router.post('/register', new UserCtrl().register); 

module.exports = router;