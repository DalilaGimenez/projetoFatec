import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { styles } from '../styles/Styles';

import Title from '../components/Title';
import CustomButton from '../components/CustomButton ';
import ImgLogo from '../components/ImgLogo';


export function PreLoad({navigation}) {

  const logar = () => {
    navigation.navigate('SignIn');
  };

    return(
      <View style={styles.container}>
        <View>
        <ImgLogo style={styles.imgLogo} />
        <Title title={"Pet's Hostes"} txtStyle="txtTitle"/>
        </View>

        <View>
        <CustomButton title="COMEÇAR" onPress={logar} />     
        </View>

        </View>
    );
}
//        //<ActivityIndicator animating={true} size={'large'} />

