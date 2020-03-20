import React, {useState} from 'react'
import {View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native'
import styles from '../../styles/components/UserRecords.component.styles'
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from 'react-redux'
import {deleteCategory} from "../../redux/database/databaseAction";
import { useActionSheet } from '@expo/react-native-action-sheet'
import ModalCompCategory from "../Modals/ModalCompCategory";
import objToArray from "../../helpFunctions/objToArray";

const Categories = ({categories}) => {

    const { showActionSheetWithOptions } = useActionSheet();

    const [modalVisible, setVisible] = useState(false)

    const dispatch = useDispatch()


    const longPressOptions = (id) => {

        showActionSheetWithOptions(
            {
                options: ['Cancel', 'Delete'],
                destructiveButtonIndex: 1,
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                if(buttonIndex === 1){
                    dispatch(deleteCategory(id))
                }
            },
        )
    }


    return(
        <View style={styles.categoriesContainer}>
            <TouchableOpacity
                style={styles.categoryItem}
                onPress = {() => {setVisible(true)}}
            >
                <Ionicons name={'md-add-circle-outline'} size={25} color={'#cc0000'} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.categoryItem}
            >
                <Text style={styles.categoryItemText}>All</Text>
            </TouchableOpacity>
            <SafeAreaView style={styles.restCategories}>
                <FlatList
                    data={objToArray(categories)}
                    horizontal={true}
                    renderItem = {({item}) => {
                        return(
                            <TouchableOpacity
                                style={styles.categoryItem}
                                onLongPress = {() => {longPressOptions(item.id)}}
                            >
                                <Text style={styles.categoryItemText}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
            {
                modalVisible
                    ? <ModalCompCategory
                        modalVisible={modalVisible}
                        setVisible={setVisible}
                    />
                    : null
            }
        </View>
    )
}

export default Categories