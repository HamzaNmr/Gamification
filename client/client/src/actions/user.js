import * as api from "../api/index";
import { UPDATEPROFILE } from "../constants/actionsType";

export const updateprofile = (formData) => async (dispatch) => {
    try {
        const { data } = await api.updateProfile(formData);

        dispatch({ type: UPDATEPROFILE, data });

        console.log(data, 'updated');
    } catch (error) {
        console.log(error);
    }
}