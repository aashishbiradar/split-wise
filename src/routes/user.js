import express from 'express';
import UserCtrl from '../controllers/user';

const router = express.Router();

router.get('/', new UserCtrl().getUser); 

module.exports = router;