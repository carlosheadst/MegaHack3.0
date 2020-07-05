import React from 'react';
import{Feather}from '@expo/vector-icons';
import{useNavigation, useRoute} from '@react-navigation/native';

import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import styles from './styles.js';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

import logoImg from '../../../assets/Logo.png';
import logoText from '../../../assets/LogoTexto.png';
import facebookLogo from '../../../assets/facebookicon.png';
import googleLogo from '../../../assets/googleicon.png'
export default function Detail(){
    
    const navigation=useNavigation();
    const route = useRoute();

    function navigateToScreen(){
        navigation.navigate('Main');
    }
    return(
        
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={logoImg}/>
                <Image style={styles.img} source={logoText}/>       
            </View>
            <TouchableOpacity style={styles.facebookButton} >
                <View style={styles.containerHorizontal}>
                    <Image style={styles.imgFacebook}source={facebookLogo}/>
                    <Text style={styles.textoBranco}>Entre Com o Facebook</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.googleButton} onPress={()=>navigateToScreen()} >
                <View style={styles.containerHorizontal}>
                    <Image style={styles.imgGoogle}source={googleLogo}/>
                <Text >Entre Com o Google</Text>
                </View>
                </TouchableOpacity>
        </View>
       
        
    );
}