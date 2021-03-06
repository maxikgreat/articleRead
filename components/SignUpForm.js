import React from 'react';
import useForm from "../customHooks/useForm";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from '../styles/components/SignUpForm.component.style'
import {Ionicons} from "@expo/vector-icons";
import validationSignInUp from "../helpFunctions/validation/validationSignInUp";
import {useDispatch} from "react-redux";
import {signUp} from "../redux/user/userAction";
import logo from '../assets/images/logoName.png'

const SignUpForm = ({toggleForm}) => {

    const dispatch = useDispatch()

    const trySignUp = () => {
        dispatch(signUp(values.email, values.password, values.username))
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useForm(trySignUp, validationSignInUp)

        return (
            <View style={styles.container}>
                {/*<Ionicons name={"md-log-in"} size={80} color = {"#cc0000"}/>*/}
                <Image source={logo} style={styles.logoImage} />
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               value={values.email}
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChange={(nativeEvent) => handleChange(nativeEvent, "email")}
                    />
                    <Ionicons style = {styles.inputIcon} name={"ios-mail"} size = {30} color={"#cc0000"} />
                </View>
                {errors.email ? <Text style={styles.errorMessage}>{errors.email}</Text> : null}
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Username (optional)"
                               value = {values.username}
                               underlineColorAndroid='transparent'
                               textContentType={"nickname"}
                               onChange={(nativeEvent) => handleChange(nativeEvent, "username")}
                    />
                    <Ionicons style = {styles.inputIcon} name={"md-person"} size = {30} color={"#cc0000"} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               autoCorrect={false}
                               placeholder="Password"
                               value = {values.password}
                               secureTextEntry={true}
                               textContentType={"password"}
                               underlineColorAndroid='transparent'
                               onChange={(nativeEvent) => handleChange(nativeEvent, "password")}
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
                    onPress = {() => toggleForm()}
                >
                    <Text style={styles.togglerText}>Have an account?</Text>
                </TouchableOpacity>
            </View>
        );
}

export default SignUpForm

