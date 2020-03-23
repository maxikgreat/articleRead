import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, ImageBackground, TextInput, Picker} from 'react-native'
import {useSelector, useDispatch} from "react-redux";
import styles from '../../styles/components/ModalNav.component.style'
import bgModals from '../../assets/images/bgModals.jpg'
import {findUserByEmail, sendRecord} from '../../redux/database/databaseAction'
import objToArray from "../../helpFunctions/objToArray";

const ModalNav = ({route, navigation}) => {

    const userData = useSelector(state => state.database)

    const dispatch = useDispatch()

    const [receiver, setReceiver] = useState({
        email: null,
        bookmark: objToArray(userData.data)[0].id, // first record default
        error: null
    })

    useEffect(() => {
        if(route.params){
            setReceiver({
                ...receiver,
                bookmark: route.params.recordId
            })
        }
        if(userData.readyToSend){
            dispatch(sendRecord(
                receiver.email,
                receiver.bookmark
                    ? objToArray(userData.data).find(item => item.id === receiver.bookmark)
                    : null
            ))
            navigation.goBack()
        }
    }, [userData.readyToSend])


    const trySendRecord = () => {
        if(!receiver.email){
            setReceiver({
                ...receiver,
                error: "This field is required!"
            })
        } else {
            setReceiver({...receiver, error: null})
            dispatch(findUserByEmail(receiver.email))
        }
    }

    return(
        <ImageBackground source={bgModals} style={{width: '100%', height: '100%'}}>
            <View style = {styles.modalContainer}>
                <View style = {styles.modalHeader}>
                    <Text style={styles.titleText}>Send your bookmark</Text>
                </View>
                <View style = {styles.modalMain}>
                    <View style = {styles.inputContainer}>
                        <Text style={styles.inputTitle}>Email address</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = "Email"
                            autoCorrect={false}
                            keyboardType="email-address"
                            value={receiver.email}
                            onChangeText={(text) => setReceiver({
                                ...receiver,
                                email: text
                            })}
                            underlineColorAndroid='transparent'
                        />
                        {receiver.error ? <Text style={styles.errorText}>{receiver.error}</Text> : null}
                    </View>
                    <Picker
                        selectedValue={receiver.bookmark}
                        style={styles.pickerContainer}
                            onValueChange={(item) => {
                                setReceiver({
                                    ...receiver,
                                    bookmark: item
                                })
                            }
                        }
                    >
                        {
                            objToArray(userData.data).map(item => {
                                return <Picker.Item
                                    label={item.title}
                                    value={item.id}
                                    key={item.id.toString()}
                                />
                            })
                        }
                    </Picker>
                </View>
                <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress = {() => {navigation.goBack()}}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress = {() => {trySendRecord()}}
                        >
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </ImageBackground>
    )
}

export default ModalNav