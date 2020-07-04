import React,{useEffect, useState} from 'react';  
import MapView,{ Marker, Callout } from 'react-native-maps'
import {StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Keyboard,StatusBar, } from 'react-native';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';


import styles from './styles.js';

  
export default function Detail(){
    const [currentRegion, setCurrentRegion]=useState(null);
    useEffect(()=>{
        async function loadInitialPosition(){
           const{granted} = await requestPermissionsAsync();
           if(granted){
               const {coords} =await getCurrentPositionAsync({
                   enableHighAccuracy:true,
               });
               const {latitude,longitude}=coords;
               setCurrentRegion({
                   latitude,
                   longitude,
                   latitudeDelta: 0.07,
                   longitudeDelta: 0.07,
               })
              }
           }
           loadInitialPosition();
       },[]);
       function handleRegionChanged(region){
        //console.log(region);
        setCurrentRegion(region);
    }
    if(!currentRegion){
        return null;
    }

    return(
        
        <>
        
        <StatusBar backgroundColor="#c41c27"></StatusBar>


        <View style={styles.globalContainer}>
        <View style={styles.menuBar}>
        <TouchableOpacity>
        <MaterialIcons style={styles.menuBarButton} name="list" size={45} color="#FFF"/>
        </TouchableOpacity>
        <Text style={styles.textMenuBar}>BrejaFinder</Text>
        </View>
         <MapView onRegionChangeComplete={handleRegionChanged} initialRegion={currentRegion} style={styles.map}></MapView>
         <View style={styles.searchForm}>
         <TextInput 
                style={styles.searchInput}
                placeholder="Buscar eventos de seu interesse..."
                placeholderTextColor="#999"
                autoCapitalize="words"
             
                />   
                <TouchableOpacity style={styles.searchEventButton}>   
                    <MaterialIcons name="my-location" size={20} color="#FFF"/>
                </TouchableOpacity>
            </View>
            </View>
        </>  
       
        
    );
}