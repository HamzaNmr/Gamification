import { FETCH_GROUPS, FETCH_GROUP, START_LOADING, END_LOADING, COMMENT} from "../constants/actionsType";

export default (state = { isLoading: true, groups: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true};
        case END_LOADING:
            return { ...state, isLoading: false};
        case FETCH_GROUPS:
            return {
                ...state,
                groups: action.payload,
            };
        case FETCH_GROUP:
            return {
                ...state,
                group: action.payload,
            };
        case COMMENT:
            return {
                ...state,
                groups: state.groups.map((group) => {
                    if(group._id === action.payload._id) return action.payload;
    
                    return group;
                }),
            };
        default:
            return state;
    }

}