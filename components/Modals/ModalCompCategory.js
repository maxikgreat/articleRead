import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput} from 'react-native';
import styles from '../../styles/components/ModalComp.component.style'
import {useDispatch} from "react-redux";
import {addCategory} from "../../redux/database/databaseAction";

//note: validation inside component


const ModalCompCategory = ({modalVisible, setVisible, categories}) => {

    const tryAddCategory = () => {
        if(!category){
            setError("Field is required!")

        } else if (categories.some(item => item.name === category)){
            setError("Try to add already existing category!")
        } else {
            dispatch(addCategory({
                name: category
            }))
            setVisible(false)
        }
    }

    const dispatch = useDispatch()

    const [category, setCategory] = useState("")
    const [categoryError, setError] = useState("")

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
        >
            <View style={styles.modalContainer}>

                        <Text style={styles.titleText}>Category name</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style = {styles.inputs}
                                placeholder = "Name"
                                autoCorrect={false}
                                value={category}
                                onChangeText={text => setCategory(text)}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        {
                            categoryError
                                ? <Text style={styles.errorMessage}>{categoryError}</Text>
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
                                onPress={() => {tryAddCategory()}}
                            >
                                <Text style={styles.cancelText}>Add</Text>
                            </TouchableOpacity>
                        </View>

            </View>
        </Modal>
    );
}

export default ModalCompCategory