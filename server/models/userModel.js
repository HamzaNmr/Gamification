const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        match: /[a-z]/,
        required: true,
    },
    lastName:{
        type: String,
        match: /[a-z]/,
        required: true,
    },
    name: String,
    userName: String,
    password: {
        type: String,
        required: true,
    },
    email:  {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 0,
    },
    coins: {
        type: Number,
        default: 0,
    },
    imageUrl: String,
    rewards: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'rewardsModel',
        }
    ],
    badges:[String],
    bio: String,
    creatAt: {
        type: Date,
        default: Date.now(),
    }
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;