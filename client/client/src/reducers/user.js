import { UPDATEPROFILE } from "../constants/actionsType";

const userReducer = (state = { userData: null }, action) => {
    switch (action.type) {
        
        case UPDATEPROFILE:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, userData: action?.data };
        default:
            return state;
    }

}

export default userReducer;