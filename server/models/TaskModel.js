const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    question: {
        type:String
    },

    falseChoice: {
        type:String
    },

    trueChoice: {
        type:String
    },

    description: {
        type: String,
       required:true
    },

    link: {
        type: String    
    },

    coin:{
        type: Number,
        required: true
    },
    complete: {
        type: [String],
        default: []
    },


  
},  {timestamps:true}
)

module.exports = mongoose.model('taskModel' , taskSchema)
