import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchStackNavigation from './SearchStackNavigation';
import MoviesStackNavigation from './MoviesStackNavigation';
import ProfileStackNavigation from './ProfileStackNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName='MoviesStackNavigation'
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
        name='MoviesStackNavigation'
        component={MoviesStackNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Inicio',
          tabBarShowLabel: false,
          tabBarIcon: (color, size) => (
            <Icon name={'home'} size={23} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='SearchNavigation'
        component={SearchStackNavigation}
        options={{
          title: 'Búsqueda',
          labelShown: false,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: 'Busqueda',
          tabBarIcon: (color, size) => (
            <Icon name={'search'} size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='ProfileNavigation'
        component={ProfileStackNavigation}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: 'Perfil',
          tabBarIcon: (color, size) => (
            <Icon name="user" size={23} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}