import React, {useState} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import styles from '../../styles/components/UserRecords.component.styles'

const Categories = () => {

    const [activeCat, setActive] = useState(0)

    return(
        <View style={styles.categoriesContainer}>
            <TouchableHighlight>
                <Text>Category</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Categories