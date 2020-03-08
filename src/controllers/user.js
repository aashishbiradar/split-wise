import AuthService from '../services/auth';
import { TokenExpiredError } from 'jsonwebtoken';

export default class UserCtrl {
  register(req,res) {
    const newUser = req.body;
    const auth = new AuthService();
    auth.register(newUser)
    .then((result) => {
      res
      .status(200)
      .send(result)
      .end();
    })
    .catch(e => {
      res.status(400).send({ error: e.message }).end();
    });
  }

  login(req,res) {
    const { email, password } = req.body;
    const auth = new AuthService();
   
    auth.login(email,password)
   .then(result => {
      const {user} = result;
      res
      .header('x-auth',result.token)
      .status(200)
      .send({user})
      .end();
    })
    .catch(e => {
      console.log(e);
      res
      .status(400)
      .send({ error: e.message })
      .end();
    });
  }

  authenticate(req,res,next) {
    const token = req.header('x-auth');
    const authService = new AuthService();

    authService.authenticate(token)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(e => {
      console.log(e);
      res
      .status(401)
      .send(e.message)
      .end();
    });
  }
  
  me(req,res) {
    const {user} = req;
    res
    .status(200)
    .send({user})
    .end();
  }
}