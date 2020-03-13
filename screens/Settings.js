import {View} from "react-native";
import React from 'react';
import Logout from "../components/Settings/Logout";
import styles from '../styles/screens/Settings.component.style'

const Settings = () => {

    return(
        <View style={styles.container}>
            <Logout />
        </View>
    )
}

export default Settings