import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styles from '../../styles/components/UserRecords.component.styles'

const Record = ({title}) => {
    return(
        <TouchableOpacity
            onPress = {() => {console.log("clicked")}}
            style = {styles.recordHld}
        >
            <Text style = {styles.recordTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Record