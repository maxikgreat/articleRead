import React, {useState} from 'react'
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native'
import Record from './Record'
import styles from '../../styles/components/UserRecords.component.styles'
import {Ionicons} from '@expo/vector-icons'
import Categories from "./Categories";
import objToArray from "../../helpFunctions/objToArray";
import ModalCompSetCat from "../Modals/ModalCompSetCat";


const UserRecords = ({records, categories, activeCategory, setVisibleModal}) => {

    const filterRecords = () => {
        if(activeCategory){
            if(activeCategory.id !== 0){
                return objToArray(records).filter(item => {
                    if(item.type){
                        return item.type.id === activeCategory.id
                    }
                })
            }else {
                return objToArray(records)
            }
        }
    }

    return(
        <View style = {styles.container}>
            <Categories
                categories = {objToArray(categories)}
                activeCategory = {activeCategory}
                records = {objToArray(records)}
            />
            <SafeAreaView style={styles.recordsContainer}>
                {filterRecords() ? filterRecords().length !== 0
                    ? <FlatList
                        data={filterRecords()}
                        renderItem={({item}) => {
                            return (
                                <Record
                                    title = {item.title}
                                    url = {item.url}
                                    id = {item.id}
                                    type = {item.type}
                                    categories = {objToArray(categories)}
                                />
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />
                    : <Text style={styles.noRecordsText}>No records in this category</Text>
                    : null
                }

            </SafeAreaView>
            <TouchableOpacity
                style={styles.addItemButton}
                onPress = {() => setVisibleModal(true)}
            >
                <Ionicons name={'md-add-circle-outline'} size={50} color={'#cc0000'} />
                <Text style={styles.addItemText}>Add record</Text>
            </TouchableOpacity>

        </View>
    )
}

export default UserRecords