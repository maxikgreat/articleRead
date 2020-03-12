
import firebase from '../../firebase'
import {ERROR_SIGN_UP, SUCCESS_SIGN_UP} from "../actionTypes";


export default function signUp(email, password){
    return async dispatch => {
        // console.log("Reducer mail " + email)
        // console.log("Reducer pass " + password)
        // const userResp = await firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
        //     console.log(error.code);
        //     console.log(error.message);
        // });
        // console.log(userResp.user)
    }

}
