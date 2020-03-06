import {UserModel} from '../models/user';

export default class UserEntity {
  constructor(userData) {
    this.userData = userData;
  }
  async createUser() {
    console.log(this.userData);
    const user = new UserModel(this.userData);
    return await user.save();
  }
  
}