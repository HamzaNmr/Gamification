import { FETCH_BADGES, START_LOADING, END_LOADING } from "../constants/actionsType";

export default (state = { isLoading: true, badges: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true};
        case END_LOADING:
            return { ...state, isLoading: false};
        case FETCH_BADGES:
            return {
                ...state,
                badges: action.payload,
            };
        default:
            return state;
    }

}