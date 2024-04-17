import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, KeyboardAvoidingView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importando estilos
import { styles } from '../../src/styles/Styles';

// Importando a função buscarAnfitrioesComValores
import buscarAnfitrioesComValores from '../models/buscarAnfitrioesComValores';
import StateCityPicker from '../services/StateCityPicker';

export function NovaSearchScreen({ navigation }) {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [anfitrioes, setAnfitrioes] = useState([]);

    useEffect(() => {
        if (selectedState && selectedCity) {
            buscarAnfitrioesComValores(selectedState, selectedCity, 'hospedagem')
                .then((anfitrioes) => setAnfitrioes(anfitrioes))
                .catch((error) => console.error('Erro ao buscar anfitriões:', error));
        } else {
            console.error('Erro: Estados ou cidades não definidos corretamente.');
        }
    }, [selectedState, selectedCity]);

    return (
        <SafeAreaView style={styles.contentView}>
            <ScrollView>
                <KeyboardAvoidingView behavior='position'>
                    <View style={styles.containerWhite}>
                        <StatusBar backgroundColor="#00C9CC" barStyle="light-content" />
                        <Text style={styles.txtBold}>Selecione o Estado e a Cidade:</Text>
                        <StateCityPicker
                            onSelectState={state => setSelectedState(state)}
                            onSelectCity={city => setSelectedCity(city)}
                        />
                        <View style={styles.containerRow}>
                            <Button title="Buscar Anfitriões" onPress={() => {}} />
                        </View>
                        <View>
                            {anfitrioes.map(anfitriao => (
                                <TouchableOpacity key={anfitriao.id} onPress={() => {
                                    // Ação quando o anfitrião é pressionado
                                    // Por exemplo, você pode navegar para uma tela de detalhes do anfitrião
                                    // ou mostrar mais informações sobre o anfitrião
                                    console.log('Anfitrião selecionado:', anfitriao);
                                }}>
                                    {/* Componente para exibir as informações do anfitrião */}
                                    <Text>{anfitriao.nome}</Text>
                                    <Text>{anfitriao.valor}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}