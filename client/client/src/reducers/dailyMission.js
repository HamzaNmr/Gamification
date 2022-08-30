import {  START_LOADING, END_LOADING, CREATE_MISSION, FETCH_MISSIONS,DELETE_MISSION} from "../constants/actionsType";

export default (state = { isLoading: true, missions: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true};
        case END_LOADING:
            return { ...state, isLoading: false};
        case FETCH_MISSIONS:
            return {
            ...state,
            missions: action.payload,
            };
        case CREATE_MISSION:
            return {...state, missions: [...state.missions, action.payload]};
        case DELETE_MISSION:
            return {...state, missions: state.missions.filter((mission) => mission._id !== action.payload)};
        default:
            return state;
    }

}