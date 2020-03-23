
import objToArray from "../../helpFunctions/objToArray";
import firebase from '../../firebase'
import {FETCH_DATA, SET_MESSAGE, SHOW_LOADER, CLEAR_MESSAGE, READY_TO_SEND} from "../actionTypes";


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
    return async dispatch => {
            await firebase.database().ref('/' + firebase.auth().currentUser.uid)
                .child("data").push().set(record)
                    .catch((error) => {
                        dispatch({
                            type: SET_MESSAGE,
                            payload: error.message
                        })
            })
    }
}

export function updateRecordsDeleteUnUseCat(records){
    return dispatch => {
            records.forEach(async item => {
                await firebase.database().ref('/' + firebase.auth().currentUser.uid)
                    .child("data").child(item.id).child("type").set(null)
                        .catch(error => {
                            dispatch({
                                type: SET_MESSAGE,
                                payload: error.message
                            })
                        })
            })
    }
}

export function updateRecordSetCategory(recordId, category){
    return async dispatch => {
        await firebase.database().ref('/' + firebase.auth().currentUser.uid)
            .child('data').child(recordId).child('type').set(category)
                .catch(error => {
                    dispatch({
                        type: SET_MESSAGE,
                        payload: error.message
                    })
                })
    }
}

export function sendRecord(email, record){
    return async dispatch => {
        await firebase.database().ref('/')
            .once("value", snapshot => {
                const allUsers = objToArray(snapshot.val()).map(item => {
                    return item
                })
                const {id} = allUsers.find(item => item.email === email)
                        firebase.database().ref('/' + id).child("mailBox").push()
                            .set({
                                from: firebase.auth().currentUser.email,
                                record: {
                                    name: record.title,
                                    url: record.url
                                }
                            })
                            .catch(error => {
                                dispatch({
                                    type: SET_MESSAGE,
                                    payload: error.message
                                })
                            })
                dispatch({
                    type: READY_TO_SEND,
                    payload: false
                })
                dispatch({
                    type: SET_MESSAGE,
                    payload: "Your bookmark was sent!"
                })
            })
    }
}

export function deleteRecord(id){
    return async dispatch => {
        await firebase.database().ref('/' + firebase.auth().currentUser.uid)
            .child('data').child(id).set(null)
                .catch(error => {
                    dispatch({
                        type: SET_MESSAGE,
                        payload: error.message
                    })
                })
    }
}

export function addCategory(category){
    return async dispatch => {
        await firebase.database().ref('/' + firebase.auth().currentUser.uid)
            .child('categories').push().set(category)
                .catch(error => {
                    dispatch({
                        type: SET_MESSAGE,
                        payload: error.message
                    })
                })
    }
}

export function setActiveCategory(category){
    return async dispatch => {
        await firebase.database().ref( '/' + firebase.auth().currentUser.uid)
            .child("activeCategory").set(category)
                .catch(error => {
                    dispatch({
                        type: SET_MESSAGE,
                        payload: error.message
                    })
                })
    }
}

export function deleteCategory(id){
    return async dispatch => {
        await firebase.database().ref('/' + firebase.auth().currentUser.uid)
            .child('categories').child(id).set(null)
                .catch(error => {
                    dispatch({
                        type: SET_MESSAGE,
                        payload: error.message
                    })
                })
    }
}

export function findUserByEmail(email){
    return async dispatch => {
        await firebase.database().ref('/')
            .once("value", snapshot => {
                const allEmails = Object.values(snapshot.val()).map(item => {
                    return item.email
                })
                if(allEmails.find(item => email === item)) {
                    dispatch({
                        type: READY_TO_SEND,
                        payload: true
                    })
                } else {
                    dispatch({
                        type: SET_MESSAGE,
                        payload: "No email address founded!"
                    })
                }
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
