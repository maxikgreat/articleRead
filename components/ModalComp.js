import React from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput} from 'react-native';
import styles from '../styles/components/ModalComp.component.style'
import {useDispatch, useSelector} from "react-redux";
import {addRecord} from "../redux/database/databaseAction";
import useForm from "../customHooks/useForm";
import validationBookmark from "../helpFunctions/validation/validationBookmark";

const ModalComp = ({modalVisible, setVisible}) => {

    const tryAddRecord = () => {
        console.log("Added!")
        dispatch(addRecord({
            title: values.bookName,
            url: values.url
        }))
        setVisible(false)
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useForm(tryAddRecord, validationBookmark)

    const dispatch = useDispatch()

        return (
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                >
                    <View style={styles.modalContainer}>
                            <Text style={styles.titleText}>Bookmark title</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style = {styles.inputs}
                                    placeholder = "www.example.pl/some-url"
                                    autoCorrect={false}
                                    value={values.bookName}
                                    onChange={(nativeEvent) => handleChange(nativeEvent, "bookName")}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            {
                                errors.bookName
                                ? <Text style={styles.errorMessage}>{errors.bookName}</Text>
                                : null
                            }
                            <Text style={styles.titleText}>URL address</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style = {styles.inputs}
                                    placeholder = "www.example.pl/some-url"
                                    autoCorrect={false}
                                    value={values.url}
                                    onChange={(nativeEvent) => handleChange(nativeEvent, "url")}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            {
                                errors.url
                                    ? <Text style={styles.errorMessage}>{errors.url}</Text>
                                    : null
                            }
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity
                                    style={[styles.buttonContainer, styles.cancelButton]}
                                    onPress={() => {setVisible(!modalVisible)}}
                                >
                                    <Text style={styles.cancelText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.buttonContainer, styles.cancelButton]}
                                    onPress={handleSubmit}
                                >
                                    <Text style={styles.cancelText}>Add</Text>
                                </TouchableOpacity>
                            </View>

                    </View>
                </Modal>
        );
}

export default ModalComp