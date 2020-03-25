import {Text, View, SafeAreaView, ImageBackground, FlatList} from "react-native";
import React from 'react';
import styles from "../styles/screens/Favourite.component.style";
import bgScreens from '../assets/images/bgScreens.jpg'
import {useSelector} from "react-redux";
import objToArray from "../helpFunctions/objToArray";
import FavRecord from "../components/Favourites/FavRecord";

const Favourite = () => {

    const userData = useSelector(state => state.database)

    return(
        <ImageBackground source={bgScreens} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Favourites</Text>
                </View>
                <SafeAreaView style={styles.mainContainer}>
                    {
                        userData.favourites
                            ? <FlatList
                                data={objToArray(userData.favourites)}
                                renderItem={({item}) => {
                                    return (
                                        <FavRecord
                                            id={item.id}
                                            type={item.type ? item.type : null}
                                            title={item.title}
                                            url={item.url}
                                        />
                                    )
                                }}
                                keyExtractor={(item) => item.id}
                            />
                            : <Text style={styles.noRecordsText}>You have no favourites records yet</Text>
                    }
                </SafeAreaView>
            </View>
        </ImageBackground>
    )
}

export default Favourite