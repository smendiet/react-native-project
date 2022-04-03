import { View, Text, } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/container/ProfileScreen';
import MovieDetailScreen from '../screens/container/MovieDetailScreen';
import ProfileDrawerNavigation from './ProfileDrawerNavigation';


const ProfileStack = new createStackNavigator();

export default function ProfileStackNavigation() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name='ProfileStack'
        component={ProfileDrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name='MovieDetail'
        component={MovieDetailScreen}
        options={{
          title: 'Películas',
        }}
      />
    </ProfileStack.Navigator>
  );
}