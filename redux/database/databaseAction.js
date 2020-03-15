

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
    return async dispatch => {
        await firebase.database().ref('/' + firebase.auth().currentUser.uid).child("data").set(
            array
        ).catch((error) => {
            console.log(error.message)
        })
    }

}
