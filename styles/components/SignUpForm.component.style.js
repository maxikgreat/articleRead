import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 150
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width: 300,
        height:45,
        marginTop:20,
        flexDirection: 'row',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logoImage: {
        width: 250,
        height: 50,
        resizeMode: 'cover',
        shadowColor: "#fff",
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 1.55,
        shadowRadius: 5.84,
    },
    inputs:{
        height:45,
        marginLeft:15,
        flex:1,
    },
    inputIcon:{
        marginRight:15,
    },
    buttonContainer: {
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        width:300,
        borderRadius:30,
        backgroundColor:'transparent'
    },
    btnByRegister: {
        height:15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        width: 300,
        backgroundColor:'transparent'
    },
    loginButton: {
        backgroundColor: "#cc0000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },
    loginText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    togglerText:{
        color:"#fff",
        fontWeight:'bold',
        textDecorationLine: 'underline',
        fontSize: 17,
        borderColor: '#fff',
        marginTop: 20
    },
    message:{
        color:"#fff",
        marginTop: 5
    },
    errorMessage:{
        color: '#fff',
        marginTop: 5
    }

});

export default styles