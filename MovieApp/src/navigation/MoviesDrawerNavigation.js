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
import MovieScreen2 from '../screens/container/MoviesScreen';
import MovieScreen3 from '../screens/container/MoviesScreen';
import MovieScreen4 from '../screens/container/MoviesScreen';

const Drawer = createDrawerNavigator();

const MoviesDrawerNavigation = ({route}) => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      initialRouteName="Movies"
      useLegacyImplementation={true}
    >

      <Drawer.Screen
        name="Movies"
        component={MovieScreen}
        options={{
          title: 'Inicio',
        }}
      />

      <Drawer.Screen
        name="Drama"
        component={MovieScreen2}
        options={{
          title: 'Drama',
        }}
        initialParams={{
          genre: 'Drama',
        }}
      />

      <Drawer.Screen
        name="Action"
        component={MovieScreen3}
        options={{
          title: 'Acción',
        }}
        initialParams={{
          genre: 'Acción',
        }}
      />

      <Drawer.Screen
        name="Adventure"
        component={MovieScreen4}
        options={{
          title: 'Aventura',
        }}
        initialParams={{
          genre: 'Aventura',
        }}
      />

    </Drawer.Navigator>
  );
}


export default MoviesDrawerNavigation;
