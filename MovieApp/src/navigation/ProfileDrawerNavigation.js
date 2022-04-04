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
import SettingsScreen from '../screens/container/SettingsScreen';


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
      initialRouteName="Profile"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{//({ route }) => ({
          title: 'Perfil',
          drawerIcon: (color, size) => (
            <Icon name={'id-card'} size={23} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{// route }) => ({
          title: 'Configuración',
          drawerIcon: (color, size) => (
            <Icon name={'cog'} size={23} color={color} />
          ),
        }}
      />

    </Drawer.Navigator>
  );
}


export default ProfileDrawerNavigation;
