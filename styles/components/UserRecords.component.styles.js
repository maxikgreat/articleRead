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
    recordTitle: {
        fontSize: 20
    },
    recordType: {
        fontSize: 14,
        color: '#cc0000'
    },
    addItemText: {
        fontSize: 20,
        marginLeft: 5,
        textTransform: 'uppercase',
        color: '#cc0000'
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
        marginTop: 5
    },
    categoryItem: {
        padding: 10,
    },
    categoryItemText: {
        fontSize: 18,
        color: '#000'
    },
    activeCategory: {
        padding: 10,
        backgroundColor: '#cc0000',
        borderRadius: 10,
    },
    activeCategoryText: {
        fontSize: 18,
        color: '#fff'
    },
    noRecordsText: {
        marginTop: 20,
        fontSize: 20
    }


})