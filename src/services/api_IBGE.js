// ApiSearchLocation.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {styles} from '../styles/Styles';

const ApiSearchLocation = ({ currentLocation, onLocationChange }) => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(currentLocation.stateId);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(currentLocation.cityName);

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchCities(selectedState);
  }, [selectedState]);

  const fetchStates = async () => {
    try {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error('Erro ao buscar estados:', error);
    }
  };

  const fetchCities = async (stateId) => {
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error('Erro ao buscar cidades:', error);
    }
  };

  const handleStateChange = (stateId) => {
    setSelectedState(stateId);
  };

  const handleCityChange = (cityName) => {
    setSelectedCity(cityName);
    onLocationChange({ stateId: selectedState, cityName: cityName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Text>State:</Text>
        <Picker
          selectedValue={selectedState}
          onValueChange={(itemValue) => handleStateChange(itemValue)}
        >
          <Picker.Item label="Select a state" value="" />
          {states.map((state) => (
            <Picker.Item key={state.id} label={state.nome} value={state.id} />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text>City:</Text>
        <Picker
          selectedValue={selectedCity}
          onValueChange={(itemValue) => handleCityChange(itemValue)}
        >
          <Picker.Item label="Select a city" value="" />
          {cities.map((city) => (
            <Picker.Item key={city.id} label={city.nome} value={city.nome} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default ApiSearchLocation;