import { AUTH, LOGOUT } from '../constants/actionsType';

export default (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            console.log(action?.data);
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        case LOGOUT: 
            localStorage.clear();
            console.log('cleared local storage');
            return { ...state, authData: null };
        default:
            return state;
    }
}
