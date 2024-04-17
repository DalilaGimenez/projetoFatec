import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from '../styles/Styles';

export const Images = {
  IconSearch: require('../assets/images/seacherIcon.png'),
  IconFavorites: require('../assets/images/favoritesIcon.png'),
  IconAppointment: require('../assets/images/appointmentIcon.png'),
  IconMenu: require('../assets/images/menuIcon.png'),
};


const CustomFooter: React.FC = ({ navigation }) => {

  const handleService = () => {
    navigation.navigate('Services');
};

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleService}>
        <Image source={Images.IconSearch} style={{ width: 40, height: 40 }} />
        <Text style={styles.iconText}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} >
        <Image source={Images.IconAppointment} style={{ width: 40, height: 40 }} />
        <Text style={styles.iconText}>Favoritos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} >
        <Image source={Images.IconSearch} style={{ width: 40, height: 40 }} />
        <Text style={styles.iconText}>Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} >
        <Image source={Images.IconMenu} style={{ width: 40, height: 40 }} />
        <Text style={styles.iconText}>Menu</Text>
      </TouchableOpacity>

    </View>
  );
};

export default CustomFooter;