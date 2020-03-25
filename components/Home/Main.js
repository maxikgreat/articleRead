import {Text, View, ActivityIndicator, TouchableOpacity, Alert, ImageBackground} from "react-native";
import React, {useEffect, useState} from 'react';
import styles from "../../styles/screens/Home.component.style";
import {useDispatch, useSelector} from "react-redux";
import {clearMessage, fetchFromDatabase} from "../../redux/database/databaseAction";
import UserRecords from "../../components/Home/UserRecords";
import ModalCompBookmark from "../../components/Modals/ModalCompBookmark";
import objToArray from "../../helpFunctions/objToArray";
import bgScreens from '../../assets/images/bgScreens.jpg'
import {Ionicons} from "@expo/vector-icons";


const Main = ({navigation}) => {

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
        <ImageBackground source={bgScreens} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                {userData.isLoading
                    ? <ActivityIndicator />
                    : userData.error
                        ? <Text>{userData.error}</Text>
                        :
                        <>
                            <View style={styles.headerContainer}>
                                <View>

                                </View>
                                <View>
                                    <Text style={styles.headerText}>
                                        Welcome
                                        {userData.name ? <Text style={[styles.headerText, styles.nameText]}>, {userData.name}</Text> : null}
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress = {() => {navigation.navigate("MailBox")}}
                                    >
                                        <Ionicons name={'md-mail'} size={30} color={'#cc0000'} />
                                        {
                                            userData.mailBox
                                                ? <View style={styles.countMessage}>
                                                    <Text style={styles.countText}>{objToArray(userData.mailBox).length}</Text>
                                                </View>
                                                : null
                                        }

                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.mainContainer}>
                                {userData.data
                                    ? <UserRecords
                                        records = {objToArray(userData.data)}
                                        categories = {objToArray(userData.categories)}
                                        activeCategory = {userData.activeCategory}
                                        modalVisible = {modalVisible}
                                        setVisibleModal = {setVisible}
                                    />
                                    :
                                    <View style={styles.firstRecContainer}>
                                        <Text style={styles.introText}>You have no records yet. Let's fix it!</Text>
                                        <TouchableOpacity
                                            style={[styles.buttonContainer, styles.createRecord]}
                                            onPress={() => {showModal()}}
                                        >
                                            <Text style={styles.addFirstText}>Add first record</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                            </View>
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
        </ImageBackground>
    )
}

export default Main