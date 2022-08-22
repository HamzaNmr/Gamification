import * as api from "../api/index";
import { FETCH_GROUPS, FETCH_GROUP, START_LOADING, END_LOADING, COMMENT } from "../constants/actionsType";


export const getGroups = () => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.getGroups();
    
        dispatch({ type: FETCH_GROUPS, payload: data});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
 }

 export const getGroup = (id) => async (dispatch) =>  {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.getGroup(id);

        dispatch({ type: FETCH_GROUP, payload: data});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
 }


 export const commentGroup = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.comment(value, id);

        dispatch({ type: COMMENT, payload: data });

        return data.comments;
    } catch (error) {
        console.log(error.message);
    }
 }