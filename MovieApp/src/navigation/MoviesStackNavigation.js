import { View, Text, DrawerButton } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import MoviesScreen from '../screens/container/MoviesScreen';
import MoviesDrawerNavigation from './MoviesDrawerNavigation';
import MovieDetailScreen from '../screens/container/MovieDetailScreen';

const MoviesStack = new createStackNavigator();

export default function MoviesStackNavigation() {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen
        name='MoviesDrawerNavigation'
        component={MoviesDrawerNavigation}
        options={{
          title: 'Inicio',
          headerShown: false,
        }}
      />
      <MoviesStack.Screen
        name='MovieDetail'
        component={MovieDetailScreen}
        options={{
          title: 'Películas',
        }}
      />
    </MoviesStack.Navigator>
  );
}