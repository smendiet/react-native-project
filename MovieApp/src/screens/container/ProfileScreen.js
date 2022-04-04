import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import { useNavigation, } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProfileHeader from '../components/ProfileHeader';
import ProfileMovies from '../components/ProfileMovies';
import { useEmail } from '../../hooks/useEmail';


export default function ProfileScreen() {
  const navigation = useNavigation();
  const {isLoading, email} = useEmail();

  const logout = async () => {
    await AsyncStorage.removeItem('auth');
    navigation.navigate('LoginScreen');
  };

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (!email) {
    return <Text>not loading or error</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{flex: .6, }}>
          <ProfileHeader
          email={email}
          style={{
            backgroundColor: 'red',
          }} />
        </View>
        <View style={styles.save}>
          <View
            style={{
              marginBottom: 15,
              alignItems: 'center',
            }} >
            <Text style={styles.saveItem}>Mis Favoritos</Text>
          </View>
          <View
            style={{flex: 1,}}
          >
            <ProfileMovies email={email} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 3,
    flexDirection: "column",
  },
   save: {
    flex: 3,
    flexDirection: "column",
  },
  saveItem: {
    fontWeight: "bold",
    justifyContent: 'center',
    fontSize: 15,
  },
});
