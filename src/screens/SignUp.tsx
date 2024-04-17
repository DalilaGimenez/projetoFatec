import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { styles } from '../../src/styles/Styles';

//importando componentes
import ImgLogo from '../../src/components/ImgLogo';
import Title from '../../src/components/Title';
import CustomButton from '../../src/components/CustomButton ';

import authenticateNewUser from '../controllers/authenticateNewUser';
import { deleteItemAsync, setItemAsync } from 'expo-secure-store';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SignUp({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Chame o método signUp com email e senha
      const newUser = await authenticateNewUser(email, password);
      console.log('Usuário cadastrado:', newUser);
      setItemAsync('user', newUser.email);
      alert('Cadastro realizado com sucesso!');
      // Navegue para a próxima tela após o cadastro bem-sucedido
      navigation.navigate('SignIn'); // Alterado para 'SignIn'
    } catch (error) {
      if (confirmPassword !== password) {
        alert('Senhas não conferem, tente novamente!');
      } else {
        setError('Erro ao cadastrar usuário. Verifique os dados e tente novamente.');
      }
    }
  };
  

  const handleLogout = () => {
    setUser('')
    deleteItemAsync('user')
    navigation.navigate('SignIn');
  }

  const handleMessageButtonClick = () => {
    navigation.goBack('SignIn');
  };

  return (
      <ScrollView>
        <View style={styles.contentView}>

        <View style={styles.containerWhite}>
          <View>
            <ImgLogo style={styles.imgLogo} />
            <Title title={"Pet's Hostes"} txtStyle="txtSubTitle" />
          </View>
          <View style={styles.separator} />

          <TouchableOpacity style={styles.signMessageButton} onPress={handleMessageButtonClick}>
            <Text style={styles.txtNormal}
            >Já possui uma conta?</Text>
            <Text style={styles.underlineTextStyle}
            >Entre Aqui!</Text>
          </TouchableOpacity>

          <TextInput
            value={name}
            style={styles.input}
            placeholder="Qual seu Nome e Sobrenome?"
            onChangeText={setName}
          />
          <TextInput
            value={email}
            style={styles.input}
            placeholder="Digite seu e-mail"
            onChangeText={setEmail}
          />
          <TextInput
            value={password}
            style={styles.input}
            placeholder="Digite sua senha"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TextInput
            value={confirmPassword}
            style={styles.input}
            placeholder="Confirme sua senha"
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
          />
          <View style={styles.separator} />
          <View style={styles.containerRow}>
            <CustomButton title="ENTRAR" onPress={handleSignUp} />
            <CustomButton title="SAIR" onPress={handleLogout} />
          </View>
        </View>

        </View>
      </ScrollView>

  );
};
/*Desativado:
        <ActivityIndicator size="large" color='#0000ff' />

*/