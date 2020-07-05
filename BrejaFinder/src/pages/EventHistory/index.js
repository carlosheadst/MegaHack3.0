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
};




export default function Detail(){

    const navigation = useNavigation();
    const route = useRoute();
    function navigateToBack() {
        navigation.goBack();
    };
    
    return(
        <>
        <StatusBar backgroundColor="#c41c27"></StatusBar>

        <View style={styles.globalContainer}>
        <View style={styles.menuBar}>
        <TouchableOpacity onPress={()=>navigateToBack()}>
        <Image style={styles.menuBarButton} source={back} size={45} color="#FFF"/>
        </TouchableOpacity>
        <Text style={styles.textMenuBar}>Historico de eventos</Text>
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

        <View style={styles.eventItem}>
            <View style={styles.eventDesc}>
            <Text style={styles.eventProprety}>Nome do evento:</Text>
            <Text style={styles.eventValue}>{evento.name}</Text>

            <Text style={styles.eventProprety}>Descrição:</Text>
            <Text style={styles.eventValue}>{evento.description}</Text>

                        
            </View>
            <View style={styles.containerAvaliacao}>
                <Text style={styles.textVer}>Avalie</Text>
            <View style={styles.avaliacao}>
            <TouchableOpacity style={styles.detailsButton} 
            onPress={()=>navigateToDetail(evento)}>
                <MaterialIcons name="star" size={20}/>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsButton} 
            onPress={()=>navigateToDetail(evento)}>
            <MaterialIcons name="star" size={20}/>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsButton} 
            onPress={()=>navigateToDetail(evento)}>
                <MaterialIcons name="star" size={20}/>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsButton} 
            onPress={()=>navigateToDetail(evento)}>
                <MaterialIcons name="star" size={20}/>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsButton} 
            onPress={()=>navigateToDetail(evento)}>
                <MaterialIcons name="star" size={20}/>
                
            </TouchableOpacity>
            
        </View>
        </View>
        </View>
        </View>

        
       </>
        
    );
}