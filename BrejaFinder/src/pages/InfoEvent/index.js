import React,{useEffect, useState} from 'react';  
import {StyleSheet, Image, View, Text, TextInput, Linking, TouchableOpacity, Keyboard,StatusBar,ScrollView } from 'react-native';
import{MaterialIcons} from '@expo/vector-icons'

import{useNavigation, useRoute} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer';

import back from '../../../assets/baseline_keyboard_backspace_white_18dp.png';
import whatsapplogo from '../../../assets/WhatsappLogo.png';

import styles from './styles.js';

  
export default function Detail(){

    const message ='Olá poderia me dar mais informações sobre o evento?';
    const navigation=useNavigation();
    const route = useRoute();
    function navigateToBack(){
        navigation.goBack();
    };
    function sendMail(){
        MailComposer.composeAsync({
            subject:`Evento`,
            recipients:`carlosheadst@gmail.com`,
            body:message
        })
    };
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=+5511948170639&text=${message}`)
    };

    return(
        <>
        <StatusBar backgroundColor="#c41c27"></StatusBar>
        <View   style={styles.globalContainer}>
            <View style={styles.menuBar}>
                <TouchableOpacity onPress={()=>navigateToBack()}>
                 <Image  style={styles.menuBarButton} source={back} size={45} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.textMenuBar}>Informações do evento</Text>
            </View>
            
            <View style={styles.contentContainer}>
                <View style={styles.contentDados}>
                    <View style={styles.contentInfo}>
                    <Text style={styles.textDados}>Nome do evento</Text>
                    <Text style={styles.textDados}>Teste</Text>
                    <Text style={styles.textDados}>Endereço</Text>
                    <Text style={styles.textDados}>Teste</Text>
                    <Text style={styles.textDados}>Descrição</Text>
                   
                    </View>
                    <View style={styles.contentInfo}>
                    <Text style={styles.textDados}>Inicio</Text>
                    <Text style={styles.textDados}>20:00</Text>
                    <Text style={styles.textDados}>Termino</Text>
                    <Text style={styles.textDados}>20:01</Text>

                    </View>
                    
                </View>
                <ScrollView style={styles.descScroll}>
                    <Text style={styles.textDados}>TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTeste</Text>
                    </ScrollView>
                    <View style={styles.valueContainer}>
                    <Text style={styles.textDados}>Valor:</Text>
                    <Text style={styles.textDados}>R$10,00</Text>
                    </View>
                <TouchableOpacity style={styles.buttonTenhoInteresse}>
                <Text style={styles.textButton}>Tenho interesse</Text>
                </TouchableOpacity>
                <Text style={styles.textContato}>Contate os organizadores</Text>

                <View style={styles.contactContainer}>
                <TouchableOpacity onPress={()=>sendWhatsapp()}style={styles.buttonContact}>
                 <Image source={whatsapplogo} />
                </TouchableOpacity>
                
                </View>
            </View>
        </View>
        </>
        
    );
}