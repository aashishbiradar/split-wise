import AuthService from '../services/auth';

export default class UserCtrl {
  register(req,res) {
    const newUser = req.body;
    const auth = new AuthService();
    auth.register(newUser)
      .then((result) => {
        res.send(result);
      });
  }

  login(req,res) {
    const {email,password} = req.body;
    const auth = new AuthService();
    auth.login(email,password)
      .then((result) => {
        res.send(result);
      });
  }
  getUser(req,res) {
    res.send({user : "ramu"});
  }
}