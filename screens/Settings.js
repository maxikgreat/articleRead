import {View} from "react-native";
import React, {PureComponent} from 'react';
import Logout from "../components/Settings/Logout";
import ChangeName from "../components/Settings/ChangeName";
import ChangePass from "../components/Settings/ChangePass";
import styles from '../styles/screens/Settings.component.style'
import {connect} from "react-redux";


class Settings extends PureComponent{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <ChangeName
                        message = {this.props.userDatabase.message}
                    />
                </View>
                <View style={styles.subContainer}>
                    <ChangePass
                        message = {this.props.userDatabase.message}
                    />
                </View>
                <Logout />
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        userDatabase: state.database
    }
}

export default connect(mapStateToProps, null)(Settings)