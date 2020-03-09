import mongoose from '../library/mongoose';
const { Schema } = mongoose;

const FriendSchema = Schema({
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    debt: {
        type: Number,
        required: true,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

FriendSchema.pre('save', function(next){
    const now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

const UserFriendsSchema = Schema({
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    friends:[FriendSchema],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

UserFriendsSchema.pre('save', function(next){
    const now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

export default {
    FriendModel: mongoose.model('Friends',FriendSchema),
    UserFriendsModel : mongoose.model('UserFriends', UserFriendsSchema)
};