import {ERROR_FETCH, FETCH_DATA, SHOW_LOADER} from "../actionTypes";


const initialState = {
    name: "",
    data: null,
    error: null,
    isLoading: false
}

export default function databaseReducer(state = initialState, {type, payload}){
    switch (type) {
        case SHOW_LOADER:
            return{
                isLoading: true
            }
        case FETCH_DATA:
            return{
                isLoading: false,
                name: payload.name,
                data: payload.data
            }
        case ERROR_FETCH:
            return{
                isLoading: false,
                error: payload
            }
        default:
            return state
    }
}