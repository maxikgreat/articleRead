import {View} from "react-native";
import React from 'react';
import Logout from "../components/Settings/Logout";
import ChangeName from "../components/Settings/ChangeName";
import styles from '../styles/screens/Settings.component.style'


const Settings = () => {

    return(
        <View style={styles.container}>
            <ChangeName />
            <Logout />
        </View>
    )
}

export default Settings