
import firebase from '../../firebase'
import {
    SUCCESS_LOG_IN,
    ERROR_LOG_IN,
    ERROR_SIGN_UP,
    LOG_OUT,
    CLEAR_ERROR,
    LOADING_END
} from "../actionTypes";

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
                    type: LOADING_END
                })
            }
        })
    }
}

export function signUp(email, password, username = ""){
    return async dispatch => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                firebase.database().ref("/" + user.user.uid).set({
                    name: username
                })
            })
            .catch((error) => {
                dispatch({
                    type: ERROR_SIGN_UP,
                    payload: error.message
                })
        });
    }
}

export function logIn(email, password){
    return async dispatch => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({
                    type: SUCCESS_LOG_IN,
                    payload: user
                })
            })
            .catch((error) => {
            dispatch({
                type: ERROR_LOG_IN,
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