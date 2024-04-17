import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, KeyboardAvoidingView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importando estilos
import { styles } from '../../src/styles/Styles';

// Importando componentes
import CardsServices from '../../src/components/CardServices';
import CustomHeader from '../../src/components/CustomHeader';
import CustomFooter from '../../src/components/CustomFooter';
import MyDateTimePicker from '../../src/components/DateTimePicker';

// Importando a função buscarAnfitrioes
import buscarAnfitrioesComValores from '../models/buscarAnfitrioesComValores';
import StateCityPicker from '../services/StateCityPicker';

export function SearchScreen({ route, navigation }) {
    const { serviceInfo } = route.params;
    const [selectedDateEntrada, setSelectedDateEntrada] = useState(new Date());
    const [selectedDateSaida, setSelectedDateSaida] = useState(new Date());
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [anfitrioes, setAnfitrioes] = useState([]);
    const [tipoServico, setTipoServico] = useState(serviceInfo.title)

    useEffect(() => {
        console.log('Estado e Cidade:', selectedCity && selectedState)

        if (selectedState && selectedCity) {
            buscarAnfitrioesComValores(selectedState, selectedCity, tipoServico)
                .then((anfitrioes) => setAnfitrioes(anfitrioes))
                .catch((error) => console.error('Erro ao buscar anfitriões:', error));
        } else {
            console.error('Erro: Estados ou cidades não definidos corretamente.');
        }
    }, [selectedState, selectedCity]);


    const handleDateChange = (date, tipo) => {
        if (tipo === 'entrada') {
            setSelectedDateEntrada(date);
        } else if (tipo === 'saida') {
            setSelectedDateSaida(date);
        }
    };


    return (
        <SafeAreaView style={styles.contentView}>
            <ScrollView>
                <KeyboardAvoidingView behavior='position'>
                    <View style={styles.containerWhite}>
                        <StatusBar backgroundColor="#00C9CC" barStyle="light-content" />
                        <CustomHeader subTitle={'Encontre um Anfitrião'} navigation={navigation} />
                        <View style={styles.margin}>
                        <StateCityPicker
                                onSelectState={state => setSelectedState(state)}
                                onSelectCity={city => setSelectedCity(city)}
                            />
                            <Text style={styles.txtBold}>Do que você precisa?</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.goBack();
                                setTipoServico(serviceInfo.title); // Definindo o tipo de serviço com base no título
                            }}>
                                <CardsServices
                                    title={serviceInfo.title}
                                    description={serviceInfo.description}
                                    image={serviceInfo.image}
                                    backgroundColor={serviceInfo.backgroundColor}
                                />
                            </TouchableOpacity>
                            <View style={styles.containerRow}>
                                <MyDateTimePicker
                                    titulo={'Entrada'}
                                    value={selectedDateEntrada}
                                    onChange={(date) => handleDateChange(date, 'entrada')}
                                    tipo="entrada"
                                />
                                <MyDateTimePicker
                                    titulo={'Saída'}
                                    value={selectedDateSaida}
                                    onChange={(date) => handleDateChange(date, 'saida')}
                                    tipo="saida"
                                />
                            </View>
                            <View style={styles.containerRow}>
                                <Button title="Buscar Anfitriões" onPress={() => { }} />
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
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <CustomFooter navigation={navigation} />
        </SafeAreaView>

    );
};