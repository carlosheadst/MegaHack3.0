import React,{useEffect, useState} from 'react';  
import {StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Keyboard,StatusBar,ScrollView } from 'react-native';
import{MaterialIcons} from '@expo/vector-icons'
import Gallery from 'react-native-image-gallery';

import back from '../../../assets/baseline_keyboard_backspace_white_18dp.png';
import whatsapplogo from '../../../assets/WhatsappLogo.png';

import styles from './styles.js';

  
export default function Detail(){


    return(
        <>
        <StatusBar backgroundColor="#c41c27"></StatusBar>
        <View   style={styles.globalContainer}>
            <View style={styles.menuBar}>
                <TouchableOpacity>
                 <Image style={styles.menuBarButton} source={back} size={45} color="#FFF"/>
                </TouchableOpacity>
                <Text style={styles.textMenuBar}>Informações do evento</Text>
            </View>
            <View style={styles.eventPic}>
             <Gallery
                style={{ flex: 1, backgroundColor: 'black' }}
                images={[
                    { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } , dimensions: { width: 150, height: 150 } },
                    { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                    { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                    { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                    { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
                 ]}
              /> 
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
                <TouchableOpacity style={styles.buttonContact}>
                 <Image source={whatsapplogo} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContact}>
                 <MaterialIcons name="mail" size={20} color="#FFFF"/>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        </>
        
    );
}