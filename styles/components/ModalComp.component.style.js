import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center'
    },
    buttonContainer: {
        margin: 10,
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        width:120,
        borderRadius:30,
        backgroundColor:'transparent',
    },
    cancelButton: {
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
    cancelText: {
        color: '#fff'
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    inputContainer: {
        borderBottomColor: '#000',
        backgroundColor: '#000',
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
    inputs:{
        height:45,
        marginLeft:15,
        flex:1,
        color: '#fff'
    },
    buttonsContainer: {
        flexDirection: 'row'
    }
})