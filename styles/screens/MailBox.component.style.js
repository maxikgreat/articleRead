import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
    },
    messagesContainer: {
        flex: 0.8,
        alignItems: 'center',
        paddingBottom: 100
    },
    noMessText: {
      fontSize: 20
    },
    sendIcon: {
        position: 'absolute',
        left: '75%',
        top: '85%'
    },

    //------------------MESSAGE STYLE--------------
    oneMessageContainer: {
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#cc0000'
    },
    messageHld: {
        width: 300,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30
    },
    messageTitle: {
        fontSize: 20
    },
    urlText: {
        fontStyle: 'italic'
    },
    fromText: {
        paddingTop: 2
    },
    fromTextEmail: {
        color: '#cc0000',
        fontWeight: 'bold',
    }
})