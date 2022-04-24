import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import InfoClima from './src/pages/InfoClima';
import Sobre from './src/pages/Sobre';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{ 
        headerTintColor:"white", 
        headerStyle:{backgroundColor: '#4682B4'}}}
      >
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title:"   |   Previsão do Tempo para:"
        }}
        />
        <Stack.Screen 
        name="InfoClima"
        component={InfoClima}
        />
        <Stack.Screen 
        name="Sobre"
        component={Sobre}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
export default App;