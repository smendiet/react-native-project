import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query';

import ProfileHeader from '../components/ProfileHeader';
import { userGet } from '../../api/useUsers';
import { set } from 'react-native-reanimated';
import { MOVIES } from '../../helpers/movies';
import MovieList from '../components/MovieList';

const emptyPerson = {
  fullName: '',
  country: '',
  createdDate: '',
  email: '',
};

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();

  const logout = async () => {
    await AsyncStorage.removeItem('auth');
    navigation.navigate('LoginScreen');
  };

  useEffect(() => {
    (async () => {
      const auth = JSON.parse(await AsyncStorage.getItem('auth'));
      if (auth) {
        setEmail(auth.email);
      }
    })();
  }, []);
  

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
            <MovieList movies={MOVIES} />
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
