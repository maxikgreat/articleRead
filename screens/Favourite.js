import {Text, View, ImageBackground} from "react-native";
import React from 'react';
import styles from "../styles/screens/Favourite.component.style";
import bgScreens from '../assets/images/bgScreens.jpg'

const Favourite = () => {
    return(
        <ImageBackground source={bgScreens} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <Text>Favourite component</Text>
            </View>
        </ImageBackground>
    )
}

export default Favourite