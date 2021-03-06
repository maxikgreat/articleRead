import React, {useState, useEffect} from 'react'
import {Alert, View, ImageBackground} from 'react-native'
//components
import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";
import Navigation from "../components/Navigation";
import Splash from "./Splash";
//styles
import styles from '../styles/screens/Enter.component.style'
//redux
import {useSelector, useDispatch} from "react-redux";
import {autoLogin, clearError} from "../redux/user/userAction";
import bgEnter from '../assets/images/bgEnter.jpg'

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
        <ImageBackground source={bgEnter} style={{width: '100%', height: '100%'}}>
            <View style = {styles.container}>
                { signUpToggle
                    ? <SignUpForm
                        toggleForm = {toggleForm}
                    />
                    : <LogInForm
                        toggleForm = {toggleForm}
                    />
                }
                {user.error
                    ? Alert.alert(
                        'Error!',
                        `${user.error}`,
                        [{
                            onPress: () => {dispatch(clearError())},
                            text: 'Cancel',
                            style: 'cancel',
                        }],
                        { cancelable: false }
                    )
                    : null}
            </View>
        </ImageBackground>
    )
}

export default Enter