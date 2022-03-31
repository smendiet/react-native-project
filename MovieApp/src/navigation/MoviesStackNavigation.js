import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesScreen from '../screens/container/MoviesScreen';
import MovieDetailScreen from '../screens/container/MovieDetailScreen';

const MoviesStack = new createStackNavigator();

export default function MoviesStackNavigation() {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen
        name='MoviesList'      
        component={MoviesScreen}
        options={{
          title: 'Inicio',
          HeaderTitle: 'Movies',
        }}
      />
      <MoviesStack.Screen
        name='MovieDetail'
        component={MovieDetailScreen}
        options={
          ({route}) => {
          }
        }
      />
    </MoviesStack.Navigator>
  );
}