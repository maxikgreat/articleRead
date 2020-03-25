import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        padding: 15
    },
    headerContainer: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 30
    },
    mainContainer: {
        flex: 0.85,
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