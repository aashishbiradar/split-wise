import mongoose from '../db/mongoose';

var UserSchema = new mongoose.Schema({
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
    }
});

var UserModel = mongoose.model('Users', UserSchema);

export default UserModel;