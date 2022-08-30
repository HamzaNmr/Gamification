const mongoose = require('mongoose');

const badgesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageUrl: String
   
})

module.exports = mongoose.model('badgesModel' , badgesSchema);