import * as api from "../api/index";
import { FETCH_USERS, UPDATEDPROFILE, START_LOADING, END_LOADING, FETCH_TOP_USERS } from "../constants/actionsType";


export const getusers = () => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.getUsers();
    
        dispatch({ type: FETCH_USERS, payload: data});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
 }

 export const getTopUsers = () => async (dispatch) => {

    try {

        const { data } = await api.getUsers();
    
        dispatch({ type: FETCH_TOP_USERS, payload: data});

    } catch (error) {
        console.log(error.message);
    }
 }

export const updateprofile = (id, user) => async (dispatch) => {
    try {
       const { data } =  await api.updateProfile(id, user);

       dispatch({ type: UPDATEDPROFILE, payload: data });
       
    } catch (error) {
        console.log(error.message);
    }
 }

 
