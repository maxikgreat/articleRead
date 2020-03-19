import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import { useActionSheet } from '@expo/react-native-action-sheet'
import styles from '../../styles/components/UserRecords.component.styles'

const Record = ({title}) => {

    const { showActionSheetWithOptions } = useActionSheet();

    const longPressOptions = (nativeEvent) => {

        console.log(nativeEvent)
        showActionSheetWithOptions(
            {
                options: ['Cancel', 'Send', 'Set category', 'Add to favorite','Delete'],
                destructiveButtonIndex: 3,
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                switch(buttonIndex){
                    case 1:
                        console.log("Send")
                        break
                    case 2:
                        console.log("Set category")
                        break
                    case 3:
                        console.log("Add to favorite")
                        break
                    case 4:
                        console.log("delete")
                        break
                    default:
                        break
                }
            },
        )
    }


    return(
        <TouchableOpacity
            onLongPress = {(nativeEvent) => {longPressOptions(nativeEvent)}}
            onPress = {() => {}}
            style = {styles.recordHld}
        >
            <Text style = {styles.recordTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Record