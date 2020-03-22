import React, {useState} from 'react'
import {View, Text, TouchableOpacity, ImageBackground, TextInput, Picker} from 'react-native'
import styles from '../../styles/components/ModalNav.component.style'
import bgModals from '../../assets/images/bgModals.jpg'

const ModalNav = ({navigation}) => {

    const [receiver, setReceiver] = useState({value: null, error: null})

    const trySendRecord = () => {
        if(!receiver.value){
            setReceiver({
                ...receiver,
                error: "This field is required!"
            })
        } else {
            setReceiver({...receiver, error: null})
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
                            value={receiver.value}
                            onChangeText={(text) => setReceiver({
                                ...receiver,
                                value: text
                            })}
                            underlineColorAndroid='transparent'
                        />
                        {receiver.error ? <Text style={styles.errorText}>{receiver.error}</Text> : null}
                    </View>
                    {/*<Picker*/}
                    {/*    selectedValue={currentCat}*/}
                    {/*    style={styles.pickerContainer}*/}
                    {/*    onValueChange={(item) => {*/}
                    {/*        setCategory(item)*/}
                    {/*    }*/}
                    {/*    }*/}
                    {/*>*/}
                    {/*    <Picker.Item label={"None"} value={""}/>*/}
                    {/*    {*/}
                    {/*        categories.map(item => {*/}
                    {/*            return <Picker.Item*/}
                    {/*                label={item.name}*/}
                    {/*                value={item.id}*/}
                    {/*                key={item.id.toString()}*/}
                    {/*            />*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</Picker>*/}
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