import _ from 'lodash';

import UserModel from '../models/user';
import FriendsModels from '../models/friends';

const { FriendModel, UserFriendsModel } = FriendsModels;

export default class UserService{
    async getUser(email) {
        const user = await UserModel.findOne({email});
        if(!user) {
            throw new Error("User not found");
        }
        return user;
    }
    async addFriend(userId,friendId) {
        let userDoc = await UserFriendsModel.findOne({userid:userId});
        console.log("find",userDoc);
        if(!userDoc) {
            const userFriends = new UserFriendsModel({userid:userId})
            userDoc = await userFriends.save();
            console.log("create",userDoc);
        }
        const friend = new FriendModel({userid: friendId});
        userDoc = await userDoc.friends.push(friend).save();
        
        return userDoc;
    }
}