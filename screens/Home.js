import {Text, View, Image} from "react-native";
import React from 'react';
import styles from "../styles/screens/Home.component.style";
import logo from '../assets/images/artReadLogo.png'

const Home = () => {
    return(
        <View style={styles.container}>
            <Image
                source={logo}
                style = {{width: 200, height: 200}}
            />
            <Text>Home component</Text>
        </View>
    )
}

export default Home