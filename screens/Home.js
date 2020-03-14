import {Text, View, ActivityIndicator, TouchableOpacity} from "react-native";
import React, {useEffect} from 'react';
import styles from "../styles/screens/Home.component.style";
import {useDispatch, useSelector} from "react-redux";
import {fetchFromDatabase} from "../redux/database/databaseAction";
import UserRecords from "../components/Home/UserRecords";

const Home = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.database)

    useEffect(() => {
        dispatch(fetchFromDatabase())
    }, [])


    return(
        <View style={styles.container}>
            {userData.isLoading
                ? <ActivityIndicator />
                : userData.error
                    ? <Text>{userData.error}</Text>
                    :
                    <View>
                        <Text>Hello</Text>
                        {userData.name ? <Text>{userData.name}</Text> : null}
                        {userData.data
                            ? <UserRecords />
                            :
                            <View>
                                <Text>You have no records yet. Let's fix it!</Text>
                                <TouchableOpacity>
                                    <Text>Add first record</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
            }
        </View>
    )
}

export default Home