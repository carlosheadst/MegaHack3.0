import React, { useEffect, useState, Component } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps'
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Keyboard, StatusBar, } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles.js';
import back from '../../../assets/baseline_keyboard_backspace_white_18dp.png';




export default function Detail() {

    const navigation = useNavigation();
    const route = useRoute();

    function navigateToBack() {
        navigation.goBack();
    };
    function navigateEventList(){
        navigation.navigate('EventList');
    }
    function navigateEventHistory(){
        navigation.navigate('EventHistory');
    }





    return (

        <>

            <StatusBar backgroundColor="#c41c27"></StatusBar>


            <View style={styles.globalContainer}>
                <View style={styles.menuBar}>
                    <TouchableOpacity onPress={()=>navigateToBack()}>
                        <Image style={styles.menuBarButton} source={back} size={45} color="#FFF" />
                        </TouchableOpacity>    
                    <Text style={styles.textMenuBar}>Perfil</Text>
                    
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.profileItems}>
                        <Text style={styles.textProfileName}>Nome do piao</Text>
                        <Text style={styles.textProfileName}>imei do piao @ piao pocotom</Text>
                    </View>
                    <View style={styles.contentButtonItems}>
                        <TouchableOpacity onPress={()=>navigateEventList()} style={styles.buttonMenu}>
                            <Text style={styles.textButtonMenu}>Lista de eventos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigateEventHistory()} style={styles.buttonMenu}>
                            <Text style={styles.textButtonMenu}>Historico de eventos</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

            </View>
        </>


    );
}