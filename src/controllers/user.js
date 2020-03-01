import UserEntity from '../entities/user';

export default class UserCtrl {
  signup(req,res) {
    res.send(req);
  }

  getUser(req,res) {
    res.send({user : "ramu"});
  }
}