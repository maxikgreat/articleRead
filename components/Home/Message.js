import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '../../styles/screens/MailBox.component.style'
import {useActionSheet} from "@expo/react-native-action-sheet";
import {addRecord, deleteMessage} from "../../redux/database/databaseAction";
import {useDispatch} from "react-redux";

const Message = ({title, url, from, id}) => {

    const { showActionSheetWithOptions } = useActionSheet();

    const dispatch = useDispatch()

    const pressOptions = () => {

        showActionSheetWithOptions(
            {
                options: ['Cancel', 'Add to list', 'Delete'],
                destructiveButtonIndex: 2,
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                switch(buttonIndex){
                    case 1:
                        dispatch(addRecord({title, url}))
                        dispatch(deleteMessage(id))
                        break
                    case 2:
                        dispatch(deleteMessage(id))
                        break
                    default:
                        break
                }
            },
        )
    }

    //TODO add to my records, delete
    return(
        <View style={styles.oneMessageContainer}>
            <TouchableOpacity
                onPress={() => pressOptions()}
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