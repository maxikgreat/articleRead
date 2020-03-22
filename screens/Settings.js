import {View, ImageBackground} from "react-native";
import React, {PureComponent} from 'react';
import Logout from "../components/Settings/Logout";
import ChangeName from "../components/Settings/ChangeName";
import ChangePass from "../components/Settings/ChangePass";
import styles from '../styles/screens/Settings.component.style'
import {connect} from "react-redux";
import bgScreens from '../assets/images/bgScreens.jpg'


class Settings extends PureComponent{

    render(){
        return(
            <ImageBackground source={bgScreens} style={{width: '100%', height: '100%'}}>
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
            </ImageBackground>
        )
    }
}

function mapStateToProps(state){
    return{
        userDatabase: state.database
    }
}

export default connect(mapStateToProps, null)(Settings)