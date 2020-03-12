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

const SignUpForm = ({toggleForm}) => {

    const trySignUp = () => {
        console.log("Sign up")
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useForm(trySignUp, validationRules)

        return (
            <View style={styles.container}>
                <Ionicons name={"md-log-in"} size={80} color = {"#cc0000"}/>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               name = "email"
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
                               placeholder="Username (optional)"
                               name = "username"
                               value = {values.username || ""}
                               underlineColorAndroid='transparent'
                               onChangeText={handleChange}
                    />
                    <Ionicons style = {styles.inputIcon} name={"md-person"} size = {30} color={"#cc0000"} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               name = "password"
                               value = {values.password || ""}
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={handleChange}
                    />
                    <Ionicons style = {styles.inputIcon} name={"ios-lock"} size = {30} color={"#cc0000"} />
                </View>
                {errors.password
                    ? <Text style={styles.errorMessage}>{errors.password}</Text>
                    : <Text style={styles.message}>Min. 6 characters</Text>
                }
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress = {handleSubmit}
                >
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress = {() => toggleForm()}
                >
                    <Text style={styles.togglerText}>Have an account?</Text>
                </TouchableOpacity>
            </View>
        );
}

export default SignUpForm

