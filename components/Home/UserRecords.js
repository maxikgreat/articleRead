import React from 'react'
import {View, Text, FlatList, SafeAreaView} from 'react-native'
import Record from './Record'
import styles from '../../styles/components/UserRecords.component.styles'

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
    ];

    return(
        <View style = {styles.container}>
            <Text>Records</Text>
            <SafeAreaView style={styles.recordsContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Record title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

        </View>
    )
}

export default UserRecords