import {
    SUCCESS_LOG_IN,
    ERROR_LOG_IN,
    LOG_OUT,
    ERROR_SIGN_UP,
    CLEAR_ERROR,
    LOADING_END
} from "../actionTypes";

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
                isLoading: false,
                error: payload
            }
        case ERROR_SIGN_UP:
            return{
                ...state,
                isLoading: false,
                error: payload
            }
        case LOG_OUT:
            return{
                ...state,
                user: null,
                name: null,
                logged: false,
                data: null
            }
        case CLEAR_ERROR:
            return{
                ...state,
                error: null
            }
        case LOADING_END:
            return{
                isLoading: false
            }
        default:
            return state
    }
}