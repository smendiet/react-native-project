import { View, Text, DrawerButton } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/container/SearchScreen';
import MovieDetailScreen from '../screens/container/MovieDetailScreen';

const SearchStack = new createStackNavigator();

export default function SearchStackNavigation() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name='Search'      
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name='MovieDetail'
        component={MovieDetailScreen}
        options={{
          title: 'Películas',
        }}
      />
    </SearchStack.Navigator>
  );
}