import React from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

const ModalComp = ({modalVisible, setVisible}) => {


        return (
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.', "Message");
                    }}>
                    <View style={{marginTop: 22, padding: 10, borderColor: "black", borderWidth: 2}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    setVisible(!modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
        );
}

export default ModalComp