import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: 15
    },
    headerContainer:{
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#cc0000'
    },
    headerTitle: {
        fontSize: 30
    },
    mainContainer: {
        flex: 0.9,
        alignItems: 'flex-start',
        alignSelf: 'center',
        alignContent: 'center'
    },
    subContainer: {
        borderBottomWidth: 3,
        borderColor: '#cc0000',
        paddingBottom: 10,
        marginTop: 20,
        marginBottom: 20
    }
})