import {SUCCESS_AUTO_LOGIN, ERROR_AUTO_LOGIN} from "../actionTypes";

const initialState = {
    logged: false,
    uId: null,
    token: null,
    error: null,
    isLoading: true,
    data: null
}

export default function userReducer(state = initialState, {type, payload}){
    switch (type) {
        case SUCCESS_AUTO_LOGIN: {
            return{
                ...state,
                logged: true,
                isLoading: false
            }
        }
        case ERROR_AUTO_LOGIN:
            return{
                ...state,
                logged: false,
                isLoading: false
            }
        default:
            return state
    }
}