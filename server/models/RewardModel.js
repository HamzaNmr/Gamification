const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
       required:true
    },

    photo: {
        type: String    
    },

    coin:{
        type: Number,
        required: true
    },

    permissionLevel:{
        type: Number
    }

     
},  {timestamps:true}
)

module.exports = mongoose.model('rewardModel' , rewardSchema)
