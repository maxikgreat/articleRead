import {Text, View, ActivityIndicator, TouchableOpacity, Modal} from "react-native";
import React, {useEffect, useState} from 'react';
import styles from "../styles/screens/Home.component.style";
import {useDispatch, useSelector} from "react-redux";
import {fetchFromDatabase} from "../redux/database/databaseAction";
import UserRecords from "../components/Home/UserRecords";
import {addRecord} from "../redux/database/databaseAction";
import ModalComp from "../components/ModalComp";


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
                ? <ModalComp
                    modalVisible = {modalVisible}
                    setVisible = {setVisible}
                />
                : null
            }
            {console.log(userData)}
        </View>
    )
}

export default Home