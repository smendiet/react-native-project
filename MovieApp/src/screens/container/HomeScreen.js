import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { MOVIES } from '../../helpers/movies';
import MovieList from '../components/MovieList';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const navigation = useNavigation();

  const logout = () => {
    AsyncStorage.removeItem('auth');
    navigation.navigate('LoginScreen');
  };
     

  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={logout}
        style={styles.button}>
        <Text style={styles.buttonLabel}>Cerrar Sesión</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({

});