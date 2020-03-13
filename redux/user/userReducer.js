import {SUCCESS_LOG_IN, ERROR_LOG_IN, SET_USERNAME} from "../actionTypes";

const initialState = {
    user: null,
    name: null,
    logged: false,
    error: null,
    isLoading: true,
    data: null
}

export default function userReducer(state = initialState, {type, payload}){
    switch (type) {
        case SUCCESS_LOG_IN:
            return{
                ...state,
                logged: true,
                isLoading: false,
                user: payload
            }
        case ERROR_LOG_IN:
            return{
                ...state,
                logged: false,
                isLoading: false
            }
        case SET_USERNAME:
            return{
                ...state,
                name: payload
            }
        default:
            return state
    }
}