import React from 'react'
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native'
import Record from './Record'
import styles from '../../styles/components/UserRecords.component.styles'
import {Ionicons} from '@expo/vector-icons'
import Categories from "./Categories";


const UserRecords = ({records, setVisibleModal}) => {

    const changeToArray = (records) => {
        const array = Object.entries(records).map(item => {
            item.map(tItem => {
                console.log(tItem)
            })
        })


        return Object.values(records).map(item => item)
    }

    return(
        <View style = {styles.container}>
            <Categories />
            <SafeAreaView style={styles.recordsContainer}>
                <FlatList
                    data={changeToArray(records)}
                    renderItem={({ item }) => <Record title={item.title} />}
                    keyExtractor={item => item.id}
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