import React from 'react';
import'intl';
import 'intl/locale-data/jsonp/pt-BR';
import{ NavigationContainer }from '@react-navigation/native';
import{ createStackNavigator }from '@react-navigation/stack';

const AppStack = createStackNavigator();
import Main from './pages/Main';
import Login from './pages/Login';
import Load from './pages/Load';
import Menu from './pages/Menu';
import InfoEvent from './pages/InfoEvent';
import EventList from './pages/EventsList';
import EventHistory from './pages/EventHistory';
export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Main" component={Main}/>
                <AppStack.Screen name="Load" component={Load}/>
                <AppStack.Screen name="InfoEvent" component={InfoEvent}/>
                <AppStack.Screen name="EventList" component={EventList}/>
                <AppStack.Screen name="EventHistory" component={EventHistory}/>
                <AppStack.Screen name="Menu" component={Menu}/>

            </AppStack.Navigator>
        </NavigationContainer>

    );
}
