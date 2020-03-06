import UserEntity from '../entities/user';
import _ from 'lodash';

export default class UserCtrl {
  register(req,res) {
    const newUser = _.pick(req.body,['email','password','name','mobile']);
    const userEnt = new UserEntity(newUser);
    userEnt.createUser()
      .then(() => {
        res.send({status:"success" });
      });
  }

  getUser(req,res) {
    res.send({user : "ramu"});
  }
}