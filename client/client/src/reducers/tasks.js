import { FETCH_TASKS, FETCH_TASK, START_LOADING, END_LOADING, COMPLETE } from "../constants/actionsType";

export default (state = { isLoading: true, tasks: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true};
        case END_LOADING:
            return { ...state, isLoading: false};
        case FETCH_TASKS:
            return {
                ...state,
                tasks: action.payload,
            };
        case FETCH_TASK:
            return {
                ...state,
                task: action.payload,
            };
        case COMPLETE:
            return {...state, tasks: state.tasks.map((task) => task._id === action.payload._id ? action.payload : task)};
        default:
            return state;
    }

}