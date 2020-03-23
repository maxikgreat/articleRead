import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '../../styles/screens/MailBox.component.style'

const Message = ({title, url, from}) => {

    //TODO add to my records, delete
    return(
        <View style={styles.oneMessageContainer}>
            <TouchableOpacity
                // onLongPress = {() => {longPressOptions()}}
                // onPress={() => goToUrl()}
                style = {styles.messageHld}
            >
                <Text style = {styles.messageTitle}>{title}</Text>
                <Text style = {styles.urlText}>{url}</Text>
            </TouchableOpacity>
            <Text style={styles.fromText}>From: <Text style={styles.fromTextEmail}>{from}</Text></Text>
        </View>
    )
}

export default Message