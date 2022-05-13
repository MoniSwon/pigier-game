import { Text, View, Image, TouchableWithoutFeedback, Modal, Pressable } from 'react-native';
import { styles } from './HeaderWithModal.style';
import React, { useState } from "react";
import ScoreBoardModal from '../ScoreBoardModal/ScoreBoardModal';



export default function HeaderWithModal() {
    const showModal = () => {
        console.log("hey");
    }
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <Image
                    style={styles.imageicon}
                    source={require('../../image/menu-icon.png')}
                />
            </TouchableWithoutFeedback>

            <Image
                style={styles.image}
                source={require('../../image/pigeon.png')}
            />


            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide the score</Text>
                            </Pressable>
                            <ScoreBoardModal/>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    );
}
