import React from 'react';

import { NavigationConteiner } from '@react-navigation/native';

import { CreateStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screen/HomeScreen';

import SeconderyScreen from './Screen/SecondaryScreen';

import CafeScreen from './Screen/CafeScreen';

import BoloScreen from './Screen/BoloScreen';

import PaoScreen from './Screen/PaoScreen';

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationConteiner>
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen Name="Home" Component= {HomeScreen} Options={{title: 'Bem-Vindo!'}} />
      <Stack.Screen Name="Secondary" Component= {SeconderyScreen} Options={{title: 'Opções Deliciosas'}} />
      <Stack.Screen Name="Cafe" Component= {CafeScreen} Options={{title: 'Nosso Café'}} />
      <Stack.Screen Name="Bolo" Component= {BoloScreen} Options={{title: 'Bolo de Chocolate'}} />
      <Stack.Screen Name="Pao" Component= {PaoScreen} Options={{title: 'Pão Caseiro'}} />
     </Stack.Navigator>
   </NavigationConteiner>
 );
}