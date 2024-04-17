import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../styles/Styles';

export default function IconLogo() {
    return (
      <View>
          <Image
          source={require('../assets/images/imgLogo.png')}
          style={styles.iconLogo}
          />
      </View>      
    );
  };