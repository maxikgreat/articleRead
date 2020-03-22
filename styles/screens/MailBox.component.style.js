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
    },
    sendIcon: {
        position: 'absolute',
        left: '75%',
        top: '85%'
    }
})