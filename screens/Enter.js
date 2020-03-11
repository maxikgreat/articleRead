import React from 'react'
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

    if(user.isLoading){
        return <Splash/>
    }

    return(
        <View style = {styles.container}>
            <SignUpForm/>
        </View>
    )
}

export default Enter