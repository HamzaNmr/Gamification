import * as api from "../api/index";
import { FETCH_REWARDS, START_LOADING, END_LOADING, ADD_REWARD } from "../constants/actionsType";


export const getRewards = () => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.getRewards();
    
        dispatch({ type: FETCH_REWARDS, payload: data});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
 }
