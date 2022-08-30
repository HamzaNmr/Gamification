import * as api from "../api/index";
import { FETCH_BADGES, START_LOADING, END_LOADING } from "../constants/actionsType";


export const getBadges = () => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.getBadges();
    
        dispatch({ type: FETCH_BADGES, payload: data});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
 }
