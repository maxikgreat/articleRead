import {SET_MESSAGE, FETCH_DATA, SHOW_LOADER, CLEAR_MESSAGE, READY_TO_SEND} from "../actionTypes";


const initialState = {
    name: "",
    email: "",
    data: [],
    categories: [],
    activeCategory: null,
    mailBox: {},
    readyToSend: false,
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
                email: payload.email,
                data: payload.data,
                mailBox: payload.mailBox,
                categories: payload.categories,
                activeCategory: payload.activeCategory
            }
        case READY_TO_SEND:
            return{
                ...state,
                readyToSend: payload
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