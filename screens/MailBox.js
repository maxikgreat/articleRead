import React from 'react'
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, ImageBackground} from 'react-native'
import styles from '../styles/screens/MailBox.component.style'
import {Ionicons} from "@expo/vector-icons";
import {useSelector} from "react-redux";
import objToArray from "../helpFunctions/objToArray";
import Message from "../components/Home/Message";
import bgMessages from '../assets/images/bgMessages.jpg'

const MailBox = ({navigation}) => {

    const userData = useSelector(state => state.database)

    return(
        <ImageBackground source={bgMessages} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style = {styles.headerText}>Messages</Text>
                </View>
                <SafeAreaView style = {styles.messagesContainer}>
                    {
                        userData.mailBox
                            ? <FlatList
                                data={objToArray(userData.mailBox)}
                                renderItem={({item}) => {
                                    return (
                                        <Message
                                            title = {item.record.name}
                                            url = {item.record.url}
                                            from ={item.from}
                                            id = {item.id}
                                        />
                                    )
                                }}
                                keyExtractor={(item) => item.id}
                            />
                            : <Text style={styles.noMessText}>You have no messages yet</Text>
                    }
                    <TouchableOpacity
                        style = {styles.sendIcon}
                        onPress = {() => {navigation.navigate("ModalNav")}}
                    >
                        <Ionicons name="md-add-circle" size={70} color={"#cc0000"} />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </ImageBackground>
    )
}

export default MailBox