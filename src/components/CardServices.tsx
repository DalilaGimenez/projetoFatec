import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/Styles';

const Images = {
  IconHospedagem: require('../assets/images/iconHospedagem.png'),
  IconCreche: require('../assets/images/iconCreche.png'),
  IconPetSitter: require('../assets/images/iconPetSitter.png'),
  IconPasseios: require('../assets/images/iconPasseios.png'),
};

interface CardProps {
  title: string;
  description: string;
  image: keyof typeof Images; // Use keyof typeof to ensure only valid image keys are passed
  backgroundColor: string;
}

const CustomImage: React.FC<{ image: keyof typeof Images }> = ({ image }) => {
  return <Image source={Images[image]} style={{ width: 50, height: 50, marginRight: 8 }} />;
};

const CardsServices: React.FunctionComponent<CardProps> = ({ title, description, image, backgroundColor }) => {
  return (
    <View style={[styles.cardServices, { backgroundColor }]}>
      <CustomImage image={image} />
      <View>
        <Text style={styles.txtCardServices}>{title}</Text>
        <Text style={styles.txtCardServicesN}>{description}</Text>
      </View>
    </View>
  );
};

export default CardsServices;