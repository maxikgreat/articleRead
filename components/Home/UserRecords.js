import React from 'react'
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native'
import Record from './Record'
import styles from '../../styles/components/UserRecords.component.styles'
import {Ionicons} from '@expo/vector-icons'
import Categories from "./Categories";


const UserRecords = ({records, categories, activeCategory, setVisibleModal}) => {

    const filterRecords = () => {
        if(activeCategory){
            if(activeCategory.id !== 0){
                return records.filter(item => {
                    if(item.type){
                        return item.type.id === activeCategory.id
                    }
                })
            }else {
                return records
            }
        }
    }

    return(
        <>
            <Categories
                categories = {categories}
                activeCategory = {activeCategory}
                records = {records}
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
                                    isFavourite = {item.isFavourite}
                                    categories = {categories}
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
        </>
    )
}

export default UserRecords