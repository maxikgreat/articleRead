import {View} from "react-native";
import React from 'react';
import Logout from "../components/Settings/Logout";
import ChangeName from "../components/Settings/ChangeName";
import ChangePass from "../components/Settings/ChangePass";
import styles from '../styles/screens/Settings.component.style'


const Settings = () => {

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <ChangeName />
            </View>
            <View style={styles.subContainer}>
                <ChangePass />
            </View>
            <Logout />
        </View>
    )
}

export default Settings