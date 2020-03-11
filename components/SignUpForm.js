import React, {useState}  from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from '../styles/components/SignUpForm.component.style'
import {Ionicons} from "@expo/vector-icons";

const SignUpForm = () => {


    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

        return (
            <View style={styles.container}>
                <Ionicons name={"md-log-in"} size={"80"} color = {"#cc0000"}/>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={() => setEmail({email})}
                    />
                    <Ionicons style = {styles.inputIcon} name={"ios-mail"} size = {30} color={"#cc0000"} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Username (optional)"
                               underlineColorAndroid='transparent'
                               onChangeText={() => setUsername({username})}
                    />
                    <Ionicons style = {styles.inputIcon} name={"md-person"} size = {30} color={"#cc0000"} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={() => setPassword({password})}
                    />
                    <Ionicons style = {styles.inputIcon} name={"ios-lock"} size = {30} color={"#cc0000"} />
                </View>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.togglerText}>Have an account?</Text>
                </TouchableOpacity>
            </View>
        );
}

export default SignUpForm

