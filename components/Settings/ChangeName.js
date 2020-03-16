import React, {useState} from 'react'
import styles from "../../styles/components/ChangeName.component.style";
import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native";


const ChangeName = () => {

    const [newName, setNewName] = useState("")

    const changeNameHandler = () => {
        if(!newName){
            Alert.alert(
                'Error',
                "Field can't be empty!",
            );
        } else if (/^[0-9a-zA-Z_.-]+$/g.test(newName)){

        } else {
            Alert.alert(
                'Error',
                "Enter valid username!",
            );
        }
    }

    return(
        <View style={styles.containerChange}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder={"Your new username..."}
                    autoCorrect={false}
                    onChangeText = {(text) => setNewName(text)}
                />
            </View>

            <TouchableOpacity
                style = {[styles.buttonContainer, styles.changeButton]}
                onPress = {() => {changeNameHandler()}}
            >
                <Text style={styles.nameText}>Set</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChangeName