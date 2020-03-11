import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from '../styles/screens/Splash.component.style'
import logo from "../assets/images/artReadLogo.png";


const Splash = () => {
    return(
        <View style = {styles.container}>
            <Image
                source={logo}
                style = {{width: 200, height: 200}}
            />
        </View>
    )
}

export default Splash