import {Text, View, ActivityIndicator, TouchableOpacity, Alert} from "react-native";
import React, {useEffect, useState} from 'react';
import styles from "../styles/screens/Home.component.style";
import {useDispatch, useSelector} from "react-redux";
import {clearMessage, fetchFromDatabase} from "../redux/database/databaseAction";
import UserRecords from "../components/Home/UserRecords";
import ModalCompBookmark from "../components/Modals/ModalCompBookmark";
import objToArray from "../helpFunctions/objToArray";


const Home = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.database)

    const [modalVisible, setVisible] = useState(false)

    useEffect(() => {
        dispatch(fetchFromDatabase())
    }, [])

    const showModal = () => {
        setVisible(true)
    }


    return(
        <View style={styles.container}>
            {userData.isLoading
                ? <ActivityIndicator />
                : userData.error
                    ? <Text>{userData.error}</Text>
                    :
                    <>
                        <Text style={styles.headerText}>Welcome</Text>
                        {userData.name ? <Text style={[styles.headerText, styles.nameText]}>{userData.name}</Text> : null}
                        {userData.data
                            ? <UserRecords
                                records = {userData.data}
                                categories = {userData.categories}
                                modalVisible = {modalVisible}
                                setVisibleModal = {setVisible}
                            />
                            :
                            <>
                                <Text style={styles.introText}>You have no records yet. Let's fix it!</Text>
                                <TouchableOpacity
                                    style={[styles.buttonContainer, styles.createRecord]}
                                    onPress={() => {showModal()}}
                                >
                                    <Text style={styles.addFirstText}>Add first record</Text>
                                </TouchableOpacity>
                            </>
                        }
                    </>
            }
            {modalVisible
                ? <ModalCompBookmark
                    categories = {objToArray(userData.categories)}
                    modalVisible = {modalVisible}
                    setVisible = {setVisible}
                />
                : null
            }
            {userData.message
                ?
                Alert.alert(
                    'Alert!',
                    `${userData.message}`,
                    [{
                        onPress: () => {dispatch(clearMessage())},
                        text: 'Cancel',
                        style: 'cancel',
                    }],
                    { cancelable: false }
                )
                : null
            }
        </View>
    )
}

export default Home