import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20
    },
    headerContainer: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: '#fff',
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
        textTransform: 'uppercase',
        color: '#fff'
    }
})