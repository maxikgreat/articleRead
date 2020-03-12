import React from 'react'
import {View, Image, ActivityIndicator} from 'react-native'
import styles from '../styles/screens/Splash.component.style'
import logoText from '../assets/images/logoName.png'

const Splash = () => {
    return(
        <View style = {styles.container}>
            <Image source={logoText} style = {{width: 300, height: 100, resizeMode: 'center'} }/>
            <ActivityIndicator size="large"/>
        </View>
    )
}

export default Splash