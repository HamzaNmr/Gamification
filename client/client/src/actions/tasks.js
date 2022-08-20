import * as api from "../api/index";
import { FETCH_TASKS, FETCH_TASK, START_LOADING, END_LOADING } from "../constants/actionsType";


export const getTasks = () => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.getTasks();
    
        dispatch({ type: FETCH_TASKS, payload: data});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
 }

 export const getTask = (id) => async (dispatch) =>  {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.getTask(id);

        dispatch({ type: FETCH_TASK, payload: data});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
 }


