import mongoose from '../library/mongoose';
const { Schema } = mongoose;

const FriendSchema = Schema({
    userId: {
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

const UserSchema = Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim:true,
        minlength: 8
    },
    name: {
        type: String,
        required: true,
        trim:true,
        maxlength: 40,
        minlength: 1,
    },
    mobile: {
        type: Number,
        required: true,
        trim:true,
        length: 10
    },
    friends:[FriendSchema],
    debt: {
        type: Number,
        required: true,
        default: 0
    },
    owed: {
        type: Number,
        required: true,
        default: 0
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    }
});

export default mongoose.model('Users', UserSchema);