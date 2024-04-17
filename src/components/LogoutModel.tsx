import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet, Image } from 'react-native';
import { useAuth } from '../controllers/AuthContext'; // Supondo que você tenha um contexto de autenticação
import CustomButton from './CustomButton ';

import { styles } from '../styles/Styles'

const LogoutModal = () => {
    const { signOut } = useAuth(); // Supondo que você tenha uma função de logout em seu contexto de autenticação
    const [modalVisible, setModalVisible] = useState(false);

    const handleLogout = () => {
        signOut(); // Realiza o logout do usuário
        // Aqui você pode adicionar qualquer outra lógica que desejar após o logout, como navegação para a tela de login, etc.
        setModalVisible(false); // Fecha o modal após o logout
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={require('../assets/images/sign-out-alt.png')} style={styles.iconLogout} />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Deseja sair?</Text>

                        <CustomButton
                            title={'Sair'}
                            onPress={handleLogout}
                        />

                        <TouchableOpacity
                            style={{ ...styles.button, backgroundColor: '#ff0000' }}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default LogoutModal;