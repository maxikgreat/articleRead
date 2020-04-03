import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        padding: 15
    },
    headerContainer: {
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
        marginTop: 10,
        flex: 0.9,
        alignItems: 'flex-start',
        paddingBottom: 100,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    noRecordsText: {
        fontSize: 20
    },
    oneRecordContainer: {
        marginBottom: 20
    },
    favRecordHld: {
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30
    },
    restInfoContainer: {
        alignItems: 'flex-end'
    },
    favRecordTitle: {
        fontSize: 20
    },
    favRecordUrl: {
        fontStyle: 'italic'
    },
    favRecordType: {
        color: '#cc0000'
    }

})