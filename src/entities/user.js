import UserModel from '../models/user';

export default class UserEntity {

  async create(user) {
    const userRecord = await UserModel.create(user);
    return userRecord;
  }
  
}