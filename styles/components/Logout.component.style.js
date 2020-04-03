import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    buttonContainer: {
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:50,
        width:300,
        borderRadius:30,
        backgroundColor:'transparent'

    },
    logoutButton: {
        backgroundColor: "#cc0000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },
    logoutText: {
        color: '#fff',
        textTransform: 'uppercase',
    }
})