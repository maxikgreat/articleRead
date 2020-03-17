import React, {useState, useEffect} from 'react'
import styles from "../../styles/components/ChangeName.component.style";
import {View, Text, TextInput, TouchableOpacity, Alert, Keyboard} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {changeUsername, clearMessage} from "../../redux/database/databaseAction";


const ChangeName = ({message}) => {

    const [newName, setNewName] = useState("")

    const dispatch = useDispatch()

    //SYNC WITH ALL MESSAGES

    // useEffect(() => {
    //     if(message){
    //         Alert.alert(
    //             'Alert!',
    //             `${message}`,
    //             [{
    //                 onPress: () => {dispatch(clearMessage())},
    //                 text: 'Cancel',
    //                 style: 'cancel',
    //             }],
    //             { cancelable: false }
    //         )
    //     }
    //
    // }, [message])

    const changeNameHandler = () => {
        if(!newName){
            Alert.alert(
                'Error',
                "Field can't be empty!",
            );
        } else if (/^[0-9a-zA-Z_.-]+$/g.test(newName)){
            dispatch(changeUsername(newName))
            setNewName("")
            Keyboard.dismiss()
            Alert.alert(
                'Alert',
                "Username updated!",
            );
        } else {
            Alert.alert(
                'Error',
                "Enter valid username!",
            );
        }
    }


    return(
        <>
            <Text style={styles.titleChange}>Change your <Text style={styles.redText}>name</Text></Text>
            <View style={styles.containerChange}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder={"Your new username..."}
                        autoCorrect={false}
                        value={newName}
                        onChangeText = {(text) => setNewName(text)}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <TouchableOpacity
                    style = {[styles.buttonContainer, styles.changeButton]}
                    onPress = {() => {changeNameHandler()}}
                >
                    <Text style={styles.nameText}>Set</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ChangeName