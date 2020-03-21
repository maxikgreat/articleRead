import React, {useState} from 'react';
import {Modal, Picker, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/components/ModalComp.component.style'
import {useDispatch} from "react-redux";
import {addRecord} from "../../redux/database/databaseAction";
import useForm from "../../customHooks/useForm";
import validationBookmark from "../../helpFunctions/validation/validationBookmark";

const ModalCompBookmark = ({categories, modalVisible, setVisible}) => {

    const [currentCatId, setCategoryId] = useState(null)

    const tryAddRecord = () => {
        dispatch(addRecord({
            title: values.bookName,
            url: values.url,
            type: currentCatId ? categories.find(item => item.id === currentCatId) : null
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
                        <View>
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
                        </View>
                        {
                            categories
                                ?
                                <View>
                                    <Picker
                                        selectedValue={currentCatId}
                                        style={styles.pickerContainer}
                                        onValueChange={(item) => {
                                                setCategoryId(item)
                                            }
                                        }
                                    >
                                        <Picker.Item label={"None"} value={""}/>
                                        {
                                            categories.map(item => {
                                                return <Picker.Item
                                                    label={item.name}
                                                    value={item.id}
                                                    key={item.id.toString()}
                                                />
                                            })
                                        }
                                    </Picker>
                                </View>
                                : null
                        }
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                style={[styles.buttonContainer, styles.cancelButton]}
                                onPress={() => {
                                    setVisible(!modalVisible)
                                }}
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

export default ModalCompBookmark