import React, {useState} from 'react'
import {View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native'
import styles from '../../styles/components/UserRecords.component.styles'
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from 'react-redux'
import {addCategory, deleteCategory, deleteRecord} from "../../redux/database/databaseAction";
import { useActionSheet } from '@expo/react-native-action-sheet'

const Categories = ({categories}) => {

    const { showActionSheetWithOptions } = useActionSheet();

    const dispatch = useDispatch()

    const addCategoryHandle = () => {
        dispatch(addCategory({name: "Cat1"}))
    }

    const longPressOptions = (id) => {

        showActionSheetWithOptions(
            {
                options: ['Cancel', 'Delete'],
                destructiveButtonIndex: 1,
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                if(buttonIndex === 1){
                    console.log("Delete this - " + id)
                    dispatch(deleteCategory(id))
                }
            },
        )
    }

    const objToArray = (categories) => {

        const arr = []

        if(categories){
            Object.entries(categories).map(item => {
                item[1].id = item[0]
                arr.push(item[1])
            })
        }
        return arr

    }

    return(

        <View style={styles.categoriesContainer}>
            <TouchableOpacity
                style={styles.categoryItem}
                onPress = {() => {addCategoryHandle()}}
            >
                <Ionicons name={'md-add-circle-outline'} size={20} color={'#cc0000'} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.categoryItem}
            >
                <Text style={styles.categoryItemText}>All</Text>
            </TouchableOpacity>

            <SafeAreaView style={styles.recordsContainer}>
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
        </View>
    )
}

export default Categories