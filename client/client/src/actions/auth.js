import * as api from "../api/index";
import { AUTH } from "../constants/actionsType";


export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        navigate('/home', {replace: true});


    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        navigate('/home', {replace: true});
        
    } catch (error) {
        console.log(error);
    }
}

