import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput, Alert} from 'react-native';
import styles from '../styles/components/ModalComp.component.style'
import {useDispatch, useSelector} from "react-redux";
import {addRecord} from "../redux/database/databaseAction";


const ModalComp = ({modalVisible, setVisible}) => {

    const [url, setUrl] = useState("")

    const dispatch = useDispatch()

    const userDatabase = useSelector(state => state.database)

    const checkUrl = () => {
        if(!url){
            Alert.alert(
                'Error',
                "Field can't be empty!",
            );
        } else if (/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(url)){
            dispatch(addRecord(url, true, userDatabase.data))
            setVisible(!modalVisible)
        } else {
            Alert.alert(
                'Error',
                "Enter valid URL address!",
            );
        }
    }

        return (
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                >
                    <View style={styles.modalContainer}>
                            <Text style={styles.titleText}>Add URL below:</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style = {styles.inputs}
                                    placeholder = "www.example.pl/some-url"
                                    autoCorrect={false}
                                    value={url}
                                    onChangeText = {(text) => {setUrl(text)}}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity
                                    style={[styles.buttonContainer, styles.cancelButton]}
                                    onPress={() => {setVisible(!modalVisible)}}
                                >
                                    <Text style={styles.cancelText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.buttonContainer, styles.cancelButton]}
                                    onPress={() => {checkUrl()}}
                                >
                                    <Text style={styles.cancelText}>Add</Text>
                                </TouchableOpacity>
                            </View>

                    </View>
                </Modal>
        );
}

export default ModalComp