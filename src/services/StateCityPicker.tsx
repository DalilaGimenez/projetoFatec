import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importando AsyncStorage para armazenamento local
import CustomDropdown from '../components/CustomDropdown';
import { Text, View } from 'react-native';
import { styles } from '../styles/Styles';

const IBGE_API_URL_STATES = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';
const IBGE_API_URL_CITIES = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const StateCityPicker = ({ onSelectState, onSelectCity, tipoServico }) => {
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        // Verifica se o usuário está logado
        const checkUserLoggedIn = async () => {
            try {
                // Verifica se há uma seleção salva no armazenamento local
                const savedSelection = await AsyncStorage.getItem('userSelection');
                if (savedSelection) {
                    const { selectedState: savedState, selectedCity: savedCity } = JSON.parse(savedSelection);
                    setSelectedState(savedState);
                    setSelectedCity(savedCity);
                }
            } catch (error) {
                console.error('Error retrieving user selection from AsyncStorage:', error);
            }
        };

        checkUserLoggedIn();
    }, []); // Executa apenas uma vez no carregamento

    useEffect(() => {
        axios.get(IBGE_API_URL_STATES)
            .then(response => {
                setStates(response.data.map(state => ({ label: state.nome, value: state.sigla })));
            })
            .catch(error => console.error('Error fetching states:', error));
    }, []);

    useEffect(() => {
        console.log('Valores useEffect Estado:', selectedState);
        console.log('Valores useEffect Cidade:', selectedCity);

        if (selectedState && selectedCity) {

            if (selectedState) {
                axios.get(`${IBGE_API_URL_CITIES}/${selectedState.value}/municipios`)
                    .then(response => {
                        setCities(response.data.map(city => ({ label: city.nome, value: city.nome })));
                    })
                    .catch(error => console.error('Error fetching cities:', error));
            }
        }
    }, [selectedState, selectedCity]);



    const handleStateChange = async (state) => {
        console.log('Estado handleStateChange selecionada:', state);

        setSelectedState(state);
        setSelectedCity('');
        onSelectState(state); // Notifica a tela SearchScreen sobre a seleção de estado
        if (tipoServico === tipoServico) {
            try {
                await AsyncStorage.setItem('userSelection', JSON.stringify({ selectedState: state, selectedCity: '' }));
            } catch (error) {
                console.error('Error saving user selection to AsyncStorage:', error);
            }
        }
    };

    const handleCityChange = async (city) => {
        console.log('Cidade handleStateChange selecionada:', city);


        setSelectedCity(city);
        onSelectCity(city); // Notifica a tela SearchScreen sobre a seleção de cidade
        if (tipoServico === tipoServico) {
            try {
                // Salva a seleção do usuário no armazenamento local
                await AsyncStorage.setItem('userSelection', JSON.stringify({ selectedState, selectedCity: city }));
            } catch (error) {
                console.error('Error saving user selection to AsyncStorage:', error);
            }
        }
    };

    return (
        <View>
            <View style={styles.input}>
                <View style={styles.containerRow}>
                    <Text style={styles.txtBold}>Estado:</Text>
                    <CustomDropdown items={states} onSelect={handleStateChange} selectedValue={selectedState} />
                </View>
            </View>
            <View style={styles.input}>
                <View style={styles.containerRow}>
                    <Text style={styles.txtBold}>Cidade:</Text>
                    {selectedState && (
                        <CustomDropdown items={cities} onSelect={handleCityChange} selectedValue={selectedCity} />
                    )}
                </View>
            </View>

        </View>
    );
};

export default StateCityPicker;