
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import'intl';
import 'intl/locale-data/jsonp/pt-BR';
import{ NavigationContainer }from '@react-navigation/native';
import{ createStackNavigator }from '@react-navigation/stack';
import {createAppContainer}from 'react-navigation';



import Main from './src/pages/Main';
import Login from './src/pages/Login';
import Load from './src/pages/Load';
import InfoEvent from './src/pages/InfoEvent';
import EventList from './src/pages/EventsList';
import EventHistory from './src/pages/EventHistory';
import Routes from './src/routes';

export default function App() {
  
    return (
      //<Main/>
      //<Login/>
      //<Load/>
      //<InfoEvent/>
      //<EventList/>
      //<EventHistory/>
      <>
      <Routes/>
      </>
    );
  
}


