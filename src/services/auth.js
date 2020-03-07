import * as argon2 from "argon2";

import UserModel from '../models/user';

export default class AuthService {
    async register(user){
        user.password = await argon2.hash(user.password);
        const userModel = new UserModel(user);
        const userRecord = await userModel.save();
        return userRecord;
    }

    async login(email,password) {
        const userRecord = UserModel.find({email});
        return userRecord;
    }
}