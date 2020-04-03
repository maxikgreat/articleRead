import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        flex: 0.1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#cc0000'
    },
    headerText: {
        fontSize: 30
    },
    nameText:{
        fontWeight: 'bold',
        color: '#cc0000'
    },
    introText:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
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
    firstRecContainer: {
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    createRecord: {
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
    addFirstText: {
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold'
    },
    countMessage: {
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 3,
        borderRadius: 50,
        left: 20,
        top: -10
    },
    countText: {
        color: '#cc0000',
        fontWeight: 'bold'
    },
    //----------------MAIN CONTENT----------------
    mainContainer: {
        flex: 0.9,
        width: '100%',
    }
})