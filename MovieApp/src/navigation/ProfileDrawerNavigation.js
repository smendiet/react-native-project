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
import ProfileScreen from '../screens/container/ProfileScreen';


const Drawer = createDrawerNavigator();

const ProfileDrawerNavigation = () => {
  const navigation = useNavigation();

  function CustomDrawerContent(props) {
    const handleLogout = () => {
      AsyncStorage.removeItem('auth');
      navigation.navigate('LoginScreen');
    };

    return(
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={"Cerrar Sesión"}
          onPress={handleLogout}
          icon={
            (image) => {
              return (<Icon name={'close'} size={23} />);
            }
          }
        />

      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="ProfileScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Perfil'
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          title: 'Configuración',
          drawerIcon: (color, size) => (
            <Icon name={'home'} size={23} color={color} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
}


export default ProfileDrawerNavigation;
