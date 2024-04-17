import React from 'react';
import { Image, ImageStyle, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from '../styles/Styles';

interface TitleProps {
  title: string;
  txtStyle: string;
}

const Title: React.FC<TitleProps> = ({ title, txtStyle }) => {

  const [fontsLoaded, fontError] = useFonts({
    'IrishGrover': require('../assets/fonts/IrishGrover-Regular.ttf'),
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
      <Text style={styles[txtStyle]}>{title}</Text>    
  );
};

export default Title;