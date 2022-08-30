import * as api from "../api/index";
import { CREATE_MISSION, FETCH_MISSIONS, START_LOADING, END_LOADING,DELETE_MISSION} from "../constants/actionsType";

 
export const getMissions = () => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.getMissions();

        dispatch({ type: FETCH_MISSIONS, payload: data});

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
 }

 export const createMission = (mission) => async (dispatch) => {
    try {
        const { data } = await api.createMission(mission);
        
        dispatch({ type: CREATE_MISSION, payload: data});
    } catch (error) {
        console.log(error.message);
    }
 }

 export const deleteMission = (id) => async (dispatch) => {
    try {
      await api.deleteMission(id);

      dispatch({ type: DELETE_MISSION, payload: id })
    } catch (error) {
        console.log(error.message);
    }
 }

 