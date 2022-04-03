import { View, Text, DrawerButton } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesScreen from '../screens/container/MoviesScreen';
import MovieDetailScreen from '../screens/container/MovieDetailScreen';

const MoviesStack = new createStackNavigator();

export default function MoviesStackNavigation() {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen
        name='Movies'
        component={MoviesScreen}
        options={{
          title: 'Inicio',
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