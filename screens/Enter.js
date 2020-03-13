import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
//components
import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";
import Navigation from "../components/Navigation";
import Splash from "./Splash";
//styles
import styles from '../styles/screens/Enter.component.style'
//redux
import {useSelector, useDispatch} from "react-redux";
import {autoLogin} from "../redux/user/userAction";

const Enter = () => {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(autoLogin())
    }, [])

    const [signUpToggle, setToggle] = useState(true)

    const toggleForm = () => {
        setToggle(!signUpToggle)
    }


    if(user.isLoading){
        return <Splash/>
    }

    if(user.logged){
        return <Navigation />
    }

    return(
        <View style = {styles.container}>
            { signUpToggle
                ? <SignUpForm
                        toggleForm = {toggleForm}
                    />
                : <LogInForm
                        toggleForm = {toggleForm}
                    />
            }
        </View>
    )
}

export default Enter