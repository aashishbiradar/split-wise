import mongoose from '../library/mongoose';
const { Schema } = mongoose; 

const AccountSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
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
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

AccountSchema.pre('save', function(next){
    const now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

export default mongoose.model('Accounts', TxnSchema);