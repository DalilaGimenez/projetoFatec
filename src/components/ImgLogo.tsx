import React from 'react';
import { Image, View , ImageStyle} from 'react-native';

interface LogoProps {
  style: ImageStyle;
}

const ImgLogo: React.FunctionComponent<LogoProps> = ({ style }) => {
    return (
      <View>
      <Image
        source={require('../assets/images/imgLogo.png')}
        style={style}
      />
      </View>      
    );
 };
 export default ImgLogo;