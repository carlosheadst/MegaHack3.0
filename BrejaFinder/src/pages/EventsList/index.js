import React from 'react';
import {StyleSheet, Image, View, Text, FlatList, TextInput, TouchableOpacity, Keyboard,StatusBar, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import{useNavigation, useRoute} from '@react-navigation/native';
import back from '../../../assets/baseline_keyboard_backspace_white_18dp.png';

import styles from './styles.js';
const evento={
    name:"teste",
    value:15.00,
    description:"teste"
}
export default function Detail(){
    const navigation=useNavigation();
    const route = useRoute();
    
    function navigateToScreenInfoEvent(){
        navigation.navigate('InfoEvent');
    };
    //trocar para funçao de confirmar
    function navigateToScreen(){
        navigation.navigate('Main');
    };
    function navigateToBack(){
        navigation.goBack();
    };
    return(
        <>
        <StatusBar backgroundColor="#c41c27"></StatusBar>

        <View style={styles.globalContainer}>
        <View style={styles.menuBar}>
        <TouchableOpacity onPress={()=>navigateToBack()}  >
        <Image style={styles.menuBarButton} source={back} size={45} color="#FFF"/>
        </TouchableOpacity>
        <Text style={styles.textMenuBar}>Eventos de interesse</Text>
        </View>   

        {/* <FlatList 
        style={styles.eventList}
        keyExtractor={evento => String(evento.id)}
        showsVerticalScrollIndicator={false}
        //onEndReached={loadEventos}
        onEndReachedThreshold={0.2}

        //data={event}
        renderItem={({item:evento})=>(
            

        )}
        />
        */}
        {/* <FlatList */}

        <TouchableOpacity onPress={()=>navigateToScreenInfoEvent()}style={styles.eventItem}>
            <View style={styles.eventDesc}>
            <Text style={styles.eventProprety}>Nome do evento:</Text>
            <Text style={styles.eventValue}>{evento.name}</Text>

            <Text style={styles.eventProprety}>Descrição:</Text>
            <Text style={styles.eventValue}>{evento.description}</Text>

            <Text style={styles.eventProprety}>Valor:</Text>
            <Text style={styles.eventValue}>{
            //Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'})
            //.format(evento.value)}
            evento.value
            }
            </Text>
            </View>
            <TouchableOpacity style={styles.detailsButton} 
            onPress={()=>navigateToScreen()}>
                <View style={styles.confirmarPresenca}>
                    <Text style={styles.textBlank}>Confirmar</Text>
                </View>
                
            </TouchableOpacity>
        </TouchableOpacity>

        </View>

        
       </>
        
    );
}