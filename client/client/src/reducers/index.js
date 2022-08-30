import { combineReducers } from "redux";


import auth from "./auth";
import user from "./user";
import tasks from "./tasks";
import community from './community';
import rewards from "./rewards";
import dailyMission from "./dailyMission";

export default combineReducers({ auth, user, tasks, community, rewards, dailyMission});