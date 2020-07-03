import React from 'react';
import{Feather}from '@expo/vector-icons';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import styles from './styles.js';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

import logoImg from '../../../assets/Logo.png';

export default function Detail(){
    

    return(
        
        <View style={styles.container}>
            <Image style={styles.img} source={logoImg}/>
                </View>
       
        
    );
}