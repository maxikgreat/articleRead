import React, {useState} from 'react'import {Text, TouchableOpacity, Linking} from 'react-native'import { useActionSheet } from '@expo/react-native-action-sheet'import styles from '../../styles/components/UserRecords.component.styles'import {useDispatch} from "react-redux";import {deleteRecord} from "../../redux/database/databaseAction";import ModalCompSetCat from "../Modals/ModalCompSetCat";import objToArray from "../../helpFunctions/objToArray";const Record = ({title, url, id, type, categories}) => {    const { showActionSheetWithOptions } = useActionSheet();    const [modalVisible, setVisible] = useState()    const dispatch = useDispatch()    const goToUrl = () => {        if(url.includes("https://")){            Linking.openURL(url)        }        Linking.openURL("https://" + url)    }    const longPressOptions = () => {        showActionSheetWithOptions(            {                options: ['Cancel', 'Send', 'Set category', 'Add to favorite','Delete'],                destructiveButtonIndex: 4,                cancelButtonIndex: 0,            },            (buttonIndex) => {                switch(buttonIndex){                    case 1:                        console.log("Send")                        break                    case 2:                        setVisible(true)                        break                    case 3:                        console.log("Add to favorite")                        break                    case 4:                        dispatch(deleteRecord(id))                        break                    default:                        break                }            },        )    }    return(        <>            <TouchableOpacity                onLongPress = {() => {longPressOptions()}}                onPress={() => goToUrl()}                style = {styles.recordHld}            >                <Text style = {styles.recordTitle}>{title}</Text>                {type                    ? <Text style={styles.recordType}>{type.name}</Text>                    : null                }            </TouchableOpacity>            {                modalVisible                    ? <ModalCompSetCat                        modalVisible={modalVisible}                        setVisible={setVisible}                        recordId={id}                        categories={categories}                    />                    : null            }        </>    )}export default Record