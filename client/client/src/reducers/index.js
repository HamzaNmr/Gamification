import { combineReducers } from "redux";


import auth from "./auth";
import user from "./user";
import tasks from "./tasks"


export default combineReducers({ auth, user, tasks });