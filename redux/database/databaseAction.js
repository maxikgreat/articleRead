

import firebase from '../../firebase'
import {FETCH_DATA, ERROR_FETCH, SHOW_LOADER} from "../actionTypes";

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
                type: ERROR_FETCH,
                payload: error.message
            })
        }

    }
}

export function addRecord(){
    return async () => {
        await firebase.database().ref('/' + firebase.auth().currentUser.uid).child("data").set(
            array
        ).catch((error) => {
            console.log(error.message)
        })
    }
}

export function changeUsername(name){
    return async () => {
        await firebase.database().ref('/' + firebase.auth().currentUser.uid).child('name').set(name)
            .catch((error) => {
                console.log(error.message)
            })
    }
}

export function changePassword(password){
    return async () => {
        await firebase.auth().currentUser.updatePassword(password)
            .then(() => {
                console.log("Password updated");
            })
            .catch(error => {
                console.log(error.message)
            })
    }
}
