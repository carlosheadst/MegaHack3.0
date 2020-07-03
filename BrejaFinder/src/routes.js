import React from 'react';
import'intl';
import 'intl/locale-data/jsonp/pt-BR';
import{ NavigationContainer }from '@react-navigation/native';
import{ createStackNavigator }from '@react-navigation/stack';

const AppStack = createStackNavigator();
import Main from './src/pages/Main';
import Login from './src/pages/Login';
import Load from './src/pages/Load';
import InfoEvent from './src/pages/InfoEvent';
import EventList from './src/pages/EventsList';
import EventHistory from './src/pages/EventHistory';
export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Main" component={Main}/>
            </AppStack.Navigator>
        </NavigationContainer>

    );
}
