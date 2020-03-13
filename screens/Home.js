import {Text, View, Image} from "react-native";
import React from 'react';
import styles from "../styles/screens/Home.component.style";
import {useSelector} from "react-redux";

const Home = () => {

    const user = useSelector(state => state.user)



    return(
        <View style={styles.container}>
            <Text>Hello {user.name}</Text>
        </View>
    )
}

export default Home