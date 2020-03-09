import mongoose from '../library/mongoose';
const { Schema } = mongoose;

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
    }
});

export default mongoose.model('Users', UserSchema);