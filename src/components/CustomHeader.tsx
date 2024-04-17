import React from 'react';
import { View, Image } from 'react-native';

import { styles } from '../styles/Styles';
import IconLogo from './ImgLogo';
import Title from './Title';
import LogoutModal from './LogoutModel';

interface HeaderProps {
  subTitle: string;
}

const CustomHeader: React.FunctionComponent<HeaderProps> = ( { subTitle }) => {

  return (

    <View style={styles.header}>
      <View style={{ marginRight: 5 }} >
        <IconLogo style={styles.iconLogo} />
      </View>
      <Title
        txtStyle='txtHeader'
        title={subTitle}></Title>
        <View style={{ marginRight: 5 }} >
        <LogoutModal/>
        </View>
    </View>

  );
}
export default CustomHeader;