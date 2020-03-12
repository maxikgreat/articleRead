import React from 'react';
import useForm from "../customHooks/useForm";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import styles from '../styles/components/SignUpForm.component.style'
import {Ionicons} from "@expo/vector-icons";
import validationRules from "../helpFunctions/validationRules";

const LogInForm = ({toggleForm}) => {

    const tryLogIn = () => {
        console.log("Log in")
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useForm(tryLogIn, validationRules)

    return (
        <View style={styles.container}>
            <Ionicons name={"md-log-in"} size={80} color = {"#cc0000"}/>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                           placeholder="Email"
                           name="email"
                           value={values.email || ""}
                           keyboardType="email-address"
                           underlineColorAndroid='transparent'
                           onChangeText={handleChange}
                />
                <Ionicons style = {styles.inputIcon} name={"ios-mail"} size = {30} color={"#cc0000"} />
            </View>
            {errors.email ? <Text style={styles.errorMessage}>{errors.email}</Text> : null}
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                           placeholder="Password"
                           name="password"
                           value={values.password || ""}
                           secureTextEntry={true}
                           underlineColorAndroid='transparent'
                           onChangeText={handleChange}
                />
                <Ionicons style = {styles.inputIcon} name={"ios-lock"} size = {30} color={"#cc0000"} />
            </View>
            {errors.password ? <Text style={styles.errorMessage}>{errors.password}</Text> : null}
            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}
                onPress = {handleSubmit}
            >
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress = {() => toggleForm()}
            >
                <Text style={styles.togglerText}>Don't have an account yet?</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LogInForm