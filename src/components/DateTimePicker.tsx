import React, { useState } from 'react';
import { View, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from '../styles/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SvgImage = {
  calendar: require('../assets/svg/calendar.svg'),
};

const MyDateTimePicker = ({ onChange, value, titulo, tipo }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());


  // Formatar a data como "DD/MM/YYYY"
  const formattedDate = `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`;
  
    const handleDateChange = (event, selectedDate) => {
      setShowDatePicker(Platform.OS === 'ios');
      if (selectedDate) {
        setSelectedDate(selectedDate);
        onChange(selectedDate, tipo);
      }
    };

  return (
    <View>
      <View>
      <Text style={styles.txtBold}>{titulo}</Text>
        <TouchableOpacity style={styles.buttonDate} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>


    </View>
  );
};

export default MyDateTimePicker;