const MongoClient = require('mongodb').MongoClient
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const AuthRoutes = require('./routes/users.js');
const ControllUSerRoutes = require('./routes/user.js');
const TasksRoutes = require('./routes/tasks.js');
const CommunityRoutes = require('./routes/community.js');
const RewardsRoutes = require('./routes/rewards.js');
const DailyMissionRoutes = require('./routes/dailyMission');
const passport = require('passport');


const app = express();

dotenv.config();
 
 app.use(bodyParser.json({limit: "30mb", extended: true}));
 app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
 app.use(cors());


 
 app.use('/daily', DailyMissionRoutes);
 app.use('/home', ControllUSerRoutes);
 app.use('/tasks', TasksRoutes);
 app.use('/community', CommunityRoutes);
 app.use('/rewards', RewardsRoutes);
 app.use('/user', AuthRoutes);
 app.use(passport.initialize());

 const PORT = process.env.PORT;

 mongoose.connect(process.env.CONNECTION_URL)
         .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
         .catch((error) => console.log(error.message));
    