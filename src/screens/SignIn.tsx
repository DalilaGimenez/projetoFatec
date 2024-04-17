//SignIn.tsx
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../src/styles/Styles';

// imports components
import CustomButton from '../../src/components/CustomButton ';
import ImgLogo from '../../src/components/ImgLogo';
import Title from '../../src/components/Title';

import authenticateUser from '../controllers/authenticateUser';
import { useAuth } from '../controllers/AuthContext';

import { setItemAsync } from 'expo-secure-store';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function SignIn({ navigation }) {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentUser) {
      navigation.navigate('Services');
    }
  }, [currentUser, navigation]);

  const handleSignIn = async () => {
    try {
      // Chame o método de autenticação com email e senha
      const user = await authenticateUser(email, password);
      console.log('Usuário autenticado:', user);
      //setItemAsync('user',user.email);
      // Navegue para a próxima tela após a autenticação bem-sucedida
      //navigation.navigate('Services');
    } catch (error) {
      setError('Falha na autenticação. Verifique suas credenciais e tente novamente.');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.navigate('SignUp');
  };

  if (currentUser) {
    return navigation.navigate('Services');
  }

  return (
    <SafeAreaView style={styles.contentView}>
      <ScrollView style={styles.contentView}>
        <View style={styles.containerWhite}>
          <ImgLogo style={styles.imgLogo} />
          <Title title={"Pet's Hostes"} txtStyle="txtSubTitle" />

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

          <Text
            style={styles.underlineTextStyle}
            onPress={handleMessageButtonClick}
          >Esqueci minha senha!</Text>


          <CustomButton title="ENTRAR" onPress={handleSignIn} />

          <View style={styles.separator} />


          <TouchableOpacity style={styles.signMessageButton} onPress={handleMessageButtonClick}>
            <View style={styles.containerRow}>
              <Text style={styles.txtNormal}>Ainda não possui uma conta?</Text>
              <Text style={styles.underlineTextStyle}>Cadastre-se</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
/*Desativados:
import { ActivityIndicator } from 'react-native-paper';
<ActivityIndicator size="large" color='#0000ff' />
*/
