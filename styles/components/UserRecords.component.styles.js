import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    recordsContainer: {
        flex: 0.8,
        flexDirection: 'row',
    },
    recordHld: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 30
    },
    infoContainer: {
        flexDirection: 'row'
    },
    restInfoContainer: {
        alignItems: 'flex-end'
    },
    recordTitle: {
        fontSize: 20,
        marginRight: 5
    },
    recordUrl: {
        fontStyle: 'italic'
    },
    recordType: {
        color: '#cc0000'
    },
    addItemText: {
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold'
    },
    addItemButton: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoriesContainer: {
        flex: 0.1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    restCategories: {
        marginTop: 3
    },
    categoryItem: {
        //padding: 10,
        marginLeft: 5
    },
    categoryItemText: {
        fontSize: 18,
        color: '#000',
        borderWidth: 2,
        borderColor: '#cc0000',
        borderRadius: 10,
        padding: 10,
    },
    activeCategory: {
        marginLeft: 5,
        fontSize: 18,
        color: '#000',
        borderWidth: 1,
        borderColor: '#cc0000',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#cc0000'
    },
    activeCategoryText: {
        fontSize: 18,
        color: '#fff'
    },
    noRecordsText: {
        marginTop: 20,
        fontSize: 20
    },
    createRecord: {
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        borderRadius:30,
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


})