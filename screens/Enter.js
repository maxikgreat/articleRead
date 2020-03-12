import React, {useState} from 'react'
import {View} from 'react-native'
//components
import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";
import Splash from "./Splash";
//styles
import styles from '../styles/screens/Enter.component.style'
//redux
import {useSelector} from "react-redux";

const Enter = () => {

    const user = useSelector(state => state.user)

    const [signUpToggle, setToggle] = useState(true)

    const toggleForm = () => {
        setToggle(!signUpToggle)
    }

    if(user.isLoading){
        return <Splash/>
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