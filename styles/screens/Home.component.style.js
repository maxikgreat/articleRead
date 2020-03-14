import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20
    },
    headerText: {
        fontSize: 50
    },
    nameText:{
        fontWeight: 'bold',
        color: '#cc0000',
        paddingBottom: 50
    },
    introText:{
        fontSize: 20,
        paddingBottom: 50
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
        color: '#fff'
    }
})