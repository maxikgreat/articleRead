import React from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput, Picker} from 'react-native';
import styles from '../../styles/components/ModalComp.component.style'
import {useDispatch} from "react-redux";
import {addRecord} from "../../redux/database/databaseAction";
import useForm from "../../customHooks/useForm";
import validationBookmark from "../../helpFunctions/validation/validationBookmark";

const ModalCompBookmark = ({categories, modalVisible, setVisible}) => {

    const tryAddRecord = () => {
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
                             <Text>Category</Text>
                                <Text style={styles.titleText}>Bookmark title</Text>
                                <View style={styles.inputContainer}>
                                    <TextInput
                                        style = {styles.inputs}
                                        placeholder = "Title"
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
                                {
                                    // categories
                                    // ? <Picker
                                    //         selectedValue={categories}
                                    //         style={{ height: 50, width: 100 }}
                                    //         onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                                    //         <Picker.Item label="Java" value="java" />
                                    //         <Picker.Item label="JavaScript" value="js" />
                                    //     </Picker>
                                    //     : null
                                }
                    </View>
                </Modal>
        );
}

export default ModalCompBookmark