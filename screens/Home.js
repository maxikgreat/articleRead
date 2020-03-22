import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../components/Home/Main'
import MailBox from "./MailBox";

const Stack = createStackNavigator()

const Home = () => {
    return(
            <Stack.Navigator
                initialRouteName = "Main"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name = "Main" component={Main}/>
                <Stack.Screen name = "MailBox" component={MailBox} />
            </Stack.Navigator>
    )
}

export default Home