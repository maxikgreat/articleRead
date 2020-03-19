import {SET_MESSAGE, FETCH_DATA, SHOW_LOADER, CLEAR_MESSAGE} from "../actionTypes";


const initialState = {
    name: "",
    data: [],
    categories: [],
    activeCategory: "",
    message: "",
    isLoading: false
}

export default function databaseReducer(state = initialState, {type, payload}){
    switch (type) {
        case SHOW_LOADER:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_DATA:
            return{
                ...state,
                isLoading: false,
                name: payload.name,
                data: payload.data,
                categories: payload.categories
            }
        case SET_MESSAGE:
            return{
                ...state,
                isLoading: false,
                message: payload
            }
        case CLEAR_MESSAGE:
            return{
                ...state,
                message: "",
            }
        default:
            return state
    }
}