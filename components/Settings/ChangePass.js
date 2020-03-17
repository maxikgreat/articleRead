import React, {useState, useEffect} from 'react'
import styles from "../../styles/components/ChangeName.component.style";
import {View, Text, TextInput, TouchableOpacity, Alert, Keyboard} from "react-native";
import {useDispatch} from "react-redux";
import {changePassword, clearMessage} from "../../redux/database/databaseAction";



const ChangePass = ({message}) => {

    const [newPass, setNewPass] = useState("")

    const dispatch = useDispatch()

    const changePassHandler = () => {
        if(!newPass){
            Alert.alert(
                'Error',
                "Field can't be empty!",
            );
        } else if (newPass.length < 6) {
            Alert.alert(
                'Error',
                "Minimal length - 6 characters",
            );
        } else {
            dispatch(changePassword(newPass))
            setNewPass("")
            Keyboard.dismiss()
        }
    }

    return(
        <>
            <Text style={styles.titleChange}>Change your <Text style={styles.redText}>password</Text></Text>
            <View style={styles.containerChange}>
                <View style={styles.inputContainer}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputs}
                        placeholder={"Your new password..."}
                        textContentType={"newPassword"}
                        underlineColorAndroid='transparent'
                        value={newPass}
                        autoCorrect={false}
                        onChangeText = {(text) => setNewPass(text)}
                    />
                </View>

                <TouchableOpacity
                    style = {[styles.buttonContainer, styles.changeButton]}
                    onPress = {() => {changePassHandler()}}
                >

                    <Text style={styles.nameText}>Set</Text>
                </TouchableOpacity>
                {message
                    ?
                    Alert.alert(
                    'Alert!',
                    `${message}`,
                        [{
                        onPress: () => {dispatch(clearMessage())},
                            text: 'Cancel',
                            style: 'cancel',
                        }],
                        { cancelable: false }
                    )
                    : null
                }
            </View>
        </>
    )
}

export default ChangePass