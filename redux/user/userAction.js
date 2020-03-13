
import firebase from '../../firebase'
import {SUCCESS_LOG_IN, ERROR_LOG_IN, ERROR_SIGN_UP, SET_USERNAME, LOG_OUT, CLEAR_ERROR} from "../actionTypes";

export  function autoLogin(){
    return async dispatch => {
        await firebase.auth().onAuthStateChanged(user => {
            if(user) {
                dispatch({
                    type: SUCCESS_LOG_IN,
                    payload: user
                })
            } else {
                dispatch({
                    type: ERROR_LOG_IN
                })
            }
        })
    }
}

export function signUp(email, password, username = ""){
    return async dispatch => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                if(username){
                    dispatch({
                        type: SET_USERNAME,
                        payload: username
                    })
                }
            })
            .catch((error) => {
                dispatch({
                    type: ERROR_SIGN_UP,
                    payload: error.message
                })
        });
    }
}

export function logOut(){
    return async dispatch => {
        await firebase.auth().signOut()
            .then(() => {
                dispatch({
                    type: LOG_OUT
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export function clearError(){
    return{
        type: CLEAR_ERROR
    }
}