const mongoose = require('mongoose');

const dailyMissionSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    motivation: {
        type: String,
       required:true
    },
    creator: String,

     
}
)

module.exports = mongoose.model('dailyMissionModel' , dailyMissionSchema)
