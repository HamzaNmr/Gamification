const mongoose = require('mongoose');

const communitySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    type:{
        type: String,
        required: true
    },
    comments: {
        type: [String],
        default: []
    },
    members:[],
    createdAt: {
        type: Date,
        default: new Date()
    },
    imageUrl: String
    
})

module.exports = mongoose.model('communityModel' , communitySchema);