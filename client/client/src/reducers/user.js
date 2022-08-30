import { UPDATEDPROFILE, FETCH_USERS, START_LOADING, END_LOADING } from "../constants/actionsType";

export default (state = { isLoading: true, users: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true};
        case END_LOADING:
            return { ...state, isLoading: false};
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case UPDATEDPROFILE:
            return{ ...state, users: state.users.map((user) => user._id === action.payload._id ? action.payload : user)};
        default:
            return state;
    }

}

