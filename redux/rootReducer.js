
import {combineReducers} from "redux";
import userReducer from './user/userReducer'
import databaseReducer from "./database/databaseReducer";

export default combineReducers({
    user: userReducer,
    database: databaseReducer
})