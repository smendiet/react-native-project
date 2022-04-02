import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/container/HomeScreen';
import MoviesStackNavigation from './MoviesStackNavigation';
import ProfileScreen from '../screens/container/ProfileScreen';
import ProfileDrawerNavigation from './ProfileDrawerNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 23,
        },
        style: {
          backgroundColor: '#eaeaea',
        }
      }}
    >
      <Tab.Screen
        name='Home'
        component={MoviesStackNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Inicio',
          tabBarIcon: (color, size) => (
            <Icon name={'home'} size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={HomeScreen}
        options={{
          title: 'Busqueda',
          labelShown: false,
          tabBarLabel: 'Busqueda',
          tabBarIcon: (color, size) => (
            <Icon name={'search'} size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='ProfileNavigation'
        component={ProfileDrawerNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Perfil',
          tabBarIcon: (color, size) => (
            <Icon name="user" size={23} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}