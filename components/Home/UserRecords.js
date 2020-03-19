import React from 'react'
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native'
import Record from './Record'
import styles from '../../styles/components/UserRecords.component.styles'
import {Ionicons} from '@expo/vector-icons'
import Categories from "./Categories";


const UserRecords = ({records, setVisibleModal}) => {

    const changeToArray = (records) => {

        const arr = [];

        Object.entries(records).map(keyItem => {
            keyItem[1].id = keyItem[0]
            arr.push(keyItem[1])
        })

        return arr

    }

    return(
        <View style = {styles.container}>
            <Categories />
            <SafeAreaView style={styles.recordsContainer}>
                <FlatList
                    data={changeToArray(records)}
                    renderItem={({item}) => {
                        return (
                            <Record
                                title = {item.title}
                                url = {item.url}
                                id = {item.id}
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