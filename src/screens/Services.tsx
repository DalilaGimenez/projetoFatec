import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native';
import CardsServices from '../../src/components/CardServices';
import { styles } from '../../src/styles/Styles';
import CustomHeader from '../../src/components/CustomHeader';
import CustomFooter from '../../src/components/CustomFooter';
import { SafeAreaView } from 'react-native-safe-area-context';


export function Services({ navigation }) {

    const handleService = (serviceInfo) => {
        navigation.navigate('SearchScreen', { serviceInfo });
    };

    return (
        <SafeAreaView style={styles.contentView}>
            <ScrollView >
                <StatusBar backgroundColor="#00C9CC" barStyle="light-content" />
                <CustomHeader subTitle='Solicitar Serviço' />
                <View style={styles.containerWhite}>

                    <View style={styles.margin}>

                        <Text style={styles.txtBold}>Do que você precisa?</Text>
                        <TouchableOpacity onPress={() => handleService({
                            title: "Hospedagem",
                            description: "Passar a noite na casa do anfitrião.",
                            image: "IconHospedagem",
                            backgroundColor: '#B256B9'
                        })}>
                            <CardsServices
                                title={"Hospedagem"}
                                description={"Passar a noite na casa do anfitrião."}
                                image={"IconHospedagem"}
                                backgroundColor={'#B256B9'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleService({
                            title: "Creche",
                            description: "Passar o dia na casa do anfitrião.",
                            image: "IconCreche",
                            backgroundColor: '#FF9800'
                        })}>
                            <CardsServices
                                title={"Creche"}
                                description={"Passar o dia na casa do anfitrião.."}
                                image={"IconCreche"}
                                backgroundColor={'#FF9800'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleService({
                            title: "Pet Sitter",
                            description: "O anfitrião vai até a sua casa.",
                            image: "IconPetSitter",
                            backgroundColor: '#00C9CC'
                        })}>
                            <CardsServices
                                title={"Pet Sitter"}
                                description={"O anfitrião vai até a sua casa."}
                                image={"IconPetSitter"}
                                backgroundColor={'#00C9CC'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleService({
                            title: "Passeios",
                            description: "O anfitrião leva seu pet para passear.",
                            image: "IconPasseios",
                            backgroundColor: '#009846'
                        })}>
                            <CardsServices
                                title={"Passeios"}
                                description={"O anfitrião leva seu pet para passear."}
                                image={"IconPasseios"}
                                backgroundColor={'#009846'} />
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            <CustomFooter navigation={navigation} />
        </SafeAreaView>

    );
};