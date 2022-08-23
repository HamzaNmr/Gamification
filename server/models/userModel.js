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
    userName: {
        type: String,
        default: 'no userName yet'
    },
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
    imageUrl: {
        type: String,
        default: ''
    },
    rewards: [],
    badges:[],
    tasks:[],
    bio: {
        type: String,
        default: 'Write a brief introduction about yourself'
    },
    creatAt: {
        type: Date,
        default: Date.now(),
    }
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;