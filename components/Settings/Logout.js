import React from 'react'
import styles from "../../styles/components/Logout.component.style";
import {Text, TouchableOpacity, Alert} from "react-native";
import {useDispatch} from "react-redux";

const Logout = () => {

    const dispatch = useDispatch()

    return(
        <TouchableOpacity
            style={[styles.buttonContainer, styles.logoutButton]}
            onPress = {() => {
                Alert.alert(
                    'Log Out',
                    'Are you sure?',
                    [
                        { text: 'OK', onPress: () => {dispatch(logout())}},
                        {
                            text: 'Cancel',
                            style: 'cancel',
                        }
                    ],
                    { cancelable: false }
                );
            }}
        >
            <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
    )
}

export default Logout