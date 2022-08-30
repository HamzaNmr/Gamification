import { FETCH_REWARDS, START_LOADING, END_LOADING } from "../constants/actionsType";

export default (state = { isLoading: true, rewards: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true};
        case END_LOADING:
            return { ...state, isLoading: false};
        case FETCH_REWARDS:
            return {
                ...state,
                rewards: action.payload,
            };
        default:
            return state;
    }

}