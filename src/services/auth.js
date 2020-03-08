import * as argon2 from "argon2";
import * as jwt from 'jsonwebtoken';
import _ from 'lodash';

import UserModel from '../models/user';

export default class AuthService {
    async register(user){
        user.password = await argon2.hash(user.password);
        const userModel = new UserModel(user);
        const userRecord = await userModel.save();
        return userRecord;
    }

    async login(email,password) {
        const userRecord = await UserModel.findOne({email});
        console.log(userRecord);
        if (!userRecord) {
            throw new Error('User not found')
        } else {
            const correctPassword = await argon2.verify(userRecord.password, password);
            if (!correctPassword) {
                throw new Error('Incorrect password')
            }
        }

        const user = _.pick(userRecord,['_id','email','name'])

        const token = this.generateToken(userRecord);
        return {token,user};
    }

    generateToken(user) {
        const data =  {
            _id : user._id.toHexString(),
            email : user.email
        };

        const signature = 'STARKS_JWT_SIGNATURE';//TODO get from env
        const expiration = '6h';
    
        return jwt.sign({ data, }, signature, { expiresIn: expiration }).toString();
    }

    async authenticate(token) {
        const signature = 'STARKS_JWT_SIGNATURE';
        const decodedToken = jwt.verify(token,signature);
        console.log(decodedToken);
        const user = await UserModel.findById(decodedToken.data._id);
        if(!user) {
            throw new Error('invalid user');
        }
        return user;
    }
}