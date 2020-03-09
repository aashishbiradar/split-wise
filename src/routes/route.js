import express from 'express';

const router = express.Router();

router.get('/ping', (req,res) => {
    res
    .status(200)
    .send("pong")
    .end();
});

router.use('/user', require('./user'));

export default router;