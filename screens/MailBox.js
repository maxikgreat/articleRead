import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '../styles/screens/MailBox.component.style'
import {Ionicons} from "@expo/vector-icons";
//TODO ADD TO YOUR LIST, SHOW, DELETE options

const MailBox = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style = {styles.headerText}>Messages</Text>
            </View>
            <View style = {styles.messagesContainer}>
                <TouchableOpacity
                    style = {styles.sendIcon}
                    onPress = {() => {navigation.navigate("ModalNav")}}
                >
                    <Ionicons name="md-add-circle-outline" size={70} color={"#cc0000"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MailBox