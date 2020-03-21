import React, {useState} from 'react'
import {View, Text, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator} from 'react-native'
import styles from '../../styles/components/UserRecords.component.styles'
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from 'react-redux'
import {deleteCategory} from "../../redux/database/databaseAction";
import { useActionSheet } from '@expo/react-native-action-sheet'
import {setActiveCategory} from "../../redux/database/databaseAction";
import ModalCompCategory from "../Modals/ModalCompCategory";

const Categories = ({categories, activeCategory}) => {

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
        <>
            {
                activeCategory
                    ? <View style={styles.categoriesContainer}>
                        <TouchableOpacity
                            style={styles.categoryItem}
                            onPress = {() => {setVisible(true)}}
                        >
                            <Ionicons name={'md-add-circle-outline'} size={25} color={'#cc0000'} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={activeCategory.id === 0 ? styles.activeCategory : styles.categoryItem  }
                            onPress = {() => dispatch(setActiveCategory({id: 0, name: "All"}))}
                        >
                            <Text
                                style={activeCategory.id === 0 ?  styles.activeCategoryText : styles.categoryItemText }
                            >All
                            </Text>
                        </TouchableOpacity>
                        <SafeAreaView style={styles.restCategories}>
                            <FlatList
                                data={categories}
                                horizontal={true}
                                renderItem = {({item}) => {
                                    return(
                                        <TouchableOpacity
                                            style={activeCategory.id === item.id ? styles.activeCategory : styles.categoryItem}
                                            onLongPress = {() => {longPressOptions(item.id)}}
                                            onPress = {() => dispatch(setActiveCategory(item))}
                                        >
                                            <Text
                                                style={activeCategory.id === item.id ? styles.activeCategoryText : styles.categoryItemText}
                                            >{item.name}</Text>
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
                                    categories = {categories}
                                />
                                : null
                        }
                    </View>
                    : <ActivityIndicator/>
            }
        </>
    )
}

export default Categories