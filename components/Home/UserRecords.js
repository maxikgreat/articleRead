import React from 'react'
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native'
import Record from './Record'
import styles from '../../styles/components/UserRecords.component.styles'
import {Ionicons} from '@expo/vector-icons'
import Categories from "./Categories";


const UserRecords = ({records}) => {

    console.log(records)

    const DATA = [
        {
            id: 0,
            title: 'First Item',
        },
        {
            id: 1,
            title: 'Second Item',
        },
        {
            id: 2,
            title: 'Third Item',
        },
        {
            id: 3,
            title: 'First Item',
        },
        {
            id: 4,
            title: 'Second Item',
        },
    ];

    return(
        <View style = {styles.container}>
            <Categories />
            <SafeAreaView style={styles.recordsContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Record title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
            <TouchableOpacity
                style={styles.addItemButton}
            >
                <Ionicons name={'md-add-circle-outline'} size={50} color={'#cc0000'} />
                <Text style={styles.addItemText}>Add record</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserRecords