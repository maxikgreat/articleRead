import React, {useState} from 'react'
import styles from "../../styles/components/ChangeName.component.style";
import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import {useDispatch} from "react-redux";
import {changePassword, changeUsername} from "../../redux/database/databaseAction";


const ChangePass = () => {

    const [newPass, setNewPass] = useState("")

    const dispatch = useDispatch()

    const changePassHandler = () => {
        if(!newPass){
            Alert.alert(
                'Error',
                "Field can't be empty!",
            );
        } else if (!newPass.length < 6){
            dispatch(changePassword(newPass))
            setNewPass("")
        } else {
            Alert.alert(
                'Error',
                "Minimal length - 6 characters",
            );
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
                        textContentType={"new-password"}
                        underlineColorAndroid='transparent'
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
            </View>
        </>
    )
}

export default ChangePass