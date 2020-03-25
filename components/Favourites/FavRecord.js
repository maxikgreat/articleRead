import React from 'react'
import {View, Text, TouchableOpacity, Linking} from 'react-native'
import styles from "../../styles/screens/Favourite.component.style";
import {useActionSheet} from "@expo/react-native-action-sheet";
import {useDispatch} from "react-redux";
import {deleteFromFavourites} from "../../redux/database/databaseAction";

const FavRecord = ({id, title, type, url}) => {

    const { showActionSheetWithOptions } = useActionSheet();

    const dispatch = useDispatch()

    const goToUrl = () => {
        if(url.includes("https://")){
            Linking.openURL(url)
        } else {
            Linking.openURL("https://" + url)
        }
    }

    const longPressOptions = () => {

        showActionSheetWithOptions(
            {
                options: ['Cancel','Delete from favourite'],
                destructiveButtonIndex: 1,
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                if(buttonIndex === 1){
                    dispatch(deleteFromFavourites(id))
                }
            },
        )
    }

    return(
        <View style={styles.oneRecordContainer}>
            <TouchableOpacity
                onLongPress = {() => {longPressOptions()}}
                onPress={() => goToUrl()}
                style = {styles.favRecordHld}
            >
                <Text style={styles.favRecordTitle}>{title}</Text>
                <View style={styles.restInfoContainer}>
                    <Text style={styles.favRecordUrl}>{url}</Text>
                    {type
                        ? <Text style={styles.favRecordType}>{type.name}</Text>
                        : null
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FavRecord