import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    recordsContainer: {
        flex: 0.9,
    },
    recordHld: {
        minWidth: 300,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: 'space-between',
        borderRadius: 30
    },
    recordTitle: {
        fontSize: 20
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
        alignItems: 'center'
    },
    categoriesContainer: {
        height: 20,
        width: 300,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        margin: 5
    },
    categoryItem: {
        paddingRight: 10,
    },
    categoryItemText: {
        fontSize: 18
    },
    activeCategory: {

    }


})