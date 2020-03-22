import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    modalContainer: {
        flex: 1
    },
    modalHeader: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 30
    },
    modalMain: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    inputTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    input: {
        borderBottomColor: '#000',
        backgroundColor: '#fff',
        borderRadius:30,
        paddingLeft: 15,
        width: 300,
        height:45,
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
    errorText: {
        marginTop: 5,
        color: '#cc0000'
    },
    modalButtons: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '60%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: "#cc0000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
        padding: 20,
        borderRadius: 30
    },
    buttonText: {
        fontSize: 15,
        color: '#fff',
    }
})