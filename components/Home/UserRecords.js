import React from 'react'
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native'
import Record from './Record'
import styles from '../../styles/components/UserRecords.component.styles'
import {Ionicons} from '@expo/vector-icons'
import Categories from "./Categories";
import objToArray from "../../helpFunctions/objToArray";


const UserRecords = ({records, categories, activeCategory, modalVisible, setVisibleModal}) => {

    return(
        <View style = {styles.container}>
            <Categories
                categories = {objToArray(categories)}
                activeCategory = {activeCategory}
            />
            <SafeAreaView style={styles.recordsContainer}>
                <FlatList
                    data={objToArray(records)}
                    renderItem={({item}) => {
                        return (
                            <Record
                                title = {item.title}
                                url = {item.url}
                                id = {item.id}
                                type = {item.type}
                            />
                        )
                    }}
                    keyExtractor={(item) => item.id}
                />
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