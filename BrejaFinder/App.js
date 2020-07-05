import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//import Routes from './src/routes';
import Main from './src/pages/Main';
import Login from './src/pages/Login';
import Load from './src/pages/Load';
import InfoEvent from './src/pages/InfoEvent';
import EventList from './src/pages/EventsList';
import EventHistory from './src/pages/EventHistory';

export default function App() {
  
    return (
      //<Main/>
      //<Login/>
      //<Load/>
      <InfoEvent/>
      //<EventList/>
      //<EventHistory/>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
