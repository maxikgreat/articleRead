import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//components
import Home from "../screens/Home";
import Favourite from '../screens/Favourite'
import Settings from '../screens/Settings'
import {useSelector} from "react-redux";

const Tab = createBottomTabNavigator()


export default function Navigator() {

    const user = useSelector(state => state.user)

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName = "Home"
                tabBarOptions={{
                    activeTintColor: '#cc0000',
                    inactiveTintColor: '#000',
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        switch(route.name){
                            case "Home":
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline'
                                break
                            case "Favourite":
                                iconName = focused
                                    ? 'ios-heart'
                                    : 'ios-heart-empty'
                                break
                            case "Settings":
                                iconName = focused
                                    ? 'ios-list-box'
                                    : 'ios-list'
                                break;
                            default:
                                break
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen
                    name={"Home"}
                    component = {Home}
                />
                <Tab.Screen
                    name={"Favourite"}
                    component = {Favourite}
                />
                <Tab.Screen
                    name={"Settings"}
                    component = {Settings}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}