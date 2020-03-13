
import firebase from '../../firebase'
import {SUCCESS_AUTO_LOGIN, ERROR_AUTO_LOGIN, SUCCESS_SIGN_UP} from "../actionTypes";


export  function autoLogin(){
    return async dispatch => {
        await firebase.auth().onAuthStateChanged(user => {
            if(user) {
                console.log("USER AUTO LOGIN: ", user)
                dispatch({
                    type: SUCCESS_AUTO_LOGIN
                })
            } else {
                dispatch({
                    type: ERROR_AUTO_LOGIN
                })
            }
        })
    }
}

export function signUp(email, password){
    return async dispatch => {
        console.log("Reducer mail " + email)
        console.log("Reducer pass " + password)
        const userResp = await firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
        console.log(userResp.user)
    }

}
