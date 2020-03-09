import mongoose from '../library/mongoose';
const { Schema } = mongoose; 

const TxnSchema = Schema({
    title: {
        type: String,
        maxlength: 40
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    payer: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    transactors: {

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

TxnSchema.pre('save', function(next){
    const now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

export default mongoose.model('Txns', TxnSchema);