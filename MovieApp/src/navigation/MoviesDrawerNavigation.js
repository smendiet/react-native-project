import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MovieScreen from '../screens/container/MoviesScreen';

const Drawer = createDrawerNavigator();

const MoviesDrawerNavigation = ({route}) => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator initialRouteName="Movies">

      <Drawer.Screen
        name="Movies"
        component={MovieScreen}
        options={{
          title: 'Inicio',
          drawerIcon: (color, size) => (
            <Icon name={'id-card'} size={23} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Drama"
        component={MovieScreen}
        options={{
          title: 'Drama',
          drawerIcon: (color, size) => (
            <Icon name={'id-card'} size={23} color={color} />
          ),
        }}
        initialParams={{
          genre: 'Drama',
        }}
      />

      <Drawer.Screen
        name="Action"
        component={MovieScreen}
        options={{
          title: 'Acción',
          drawerIcon: (color, size) => (
            <Icon name={'id-card'} size={23} color={color} />
          ),
        }}
        initialParams={{
          genre: 'Acción',
        }}
      />

      <Drawer.Screen
        name="Adventure"
        component={MovieScreen}
        options={{
          title: 'Aventura',
          drawerIcon: (color, size) => (
            <Icon name={'id-card'} size={23} color={color} />
          ),
        }}
        initialParams={{
          genre: 'Aventura',
        }}
      />

    </Drawer.Navigator>
  );
}


export default MoviesDrawerNavigation;
