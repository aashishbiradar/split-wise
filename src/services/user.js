import _ from 'lodash';

import UserModel from '../models/user';

export default class UserService{
    async getUser(email) {
        const user = await UserModel.findOne({email});
        if(!user) throw new Error("User not found");
        return user;
    }
    async addFriend(userModel,friendModel) {
        const isFriend = userModel.friends.filter(friend => friend.userId.equals(friendModel._id))
        if (isFriend.length > 0) throw new Error("Friend already exits");
        const newFriend = { userId: friendModel._id};
        userModel.friends.push(newFriend);
        const user = await userModel.save();
        return user;
    }
}