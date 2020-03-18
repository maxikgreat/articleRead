

import firebase from '../../firebase'
import {FETCH_DATA, SET_MESSAGE, SHOW_LOADER, CLEAR_MESSAGE} from "../actionTypes";

export function fetchFromDatabase(){
    return async dispatch => {
        dispatch({
            type: SHOW_LOADER
        })
        try{
            const userDataArray = await firebase.database().ref('/' + firebase.auth().currentUser.uid);
            userDataArray.on("value", snapshot => {
                dispatch({
                    type: FETCH_DATA,
                    payload: snapshot.val()
                })
            })
        }
        catch(error){
            dispatch({
                type: SET_MESSAGE,
                payload: error.message
            })
        }
    }
}

export function addRecord(record){
    return async () => {
            await firebase.database().ref('/' + firebase.auth().currentUser.uid)
                .child("data").push().set(record)
                    .catch((error) => {
                        console.log(error.message)
            })
    }
}

export function changeUsername(name){
    return async dispatch => {
        await firebase.database().ref('/' + firebase.auth().currentUser.uid).child('name').set(name)
            .catch((error) => {
                dispatch({
                    type: SET_MESSAGE,
                    payload: error.message
                })
            })
    }
}

export function changePassword(password){
    return async dispatch => {
        dispatch({
            type: SHOW_LOADER
        })
            await firebase.auth().currentUser.updatePassword(password)
                .then(() => {
                    dispatch({
                        type: SET_MESSAGE,
                        payload: "Password updated"
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: SET_MESSAGE,
                        payload: error.message
                    })
                })
    }
}

export function clearMessage(){
    return{
        type: CLEAR_MESSAGE
    }
}
