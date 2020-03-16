import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    containerChange:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300
    },
    buttonContainer: {
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        width:100,
        borderRadius:30,
        backgroundColor:'transparent'
    },
    changeButton: {
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
    nameText: {
        color: '#fff'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width: 190,
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
    }
})