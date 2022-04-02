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
        <ProfileHeader email={email} />
        <View style={styles.save}>
          <Text style={styles.saveItem}>Peliculas</Text>
        </View>
      </View>
    </View>
  )
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
    flexDirection: "row",
    justifyContent: "space-around",
  },
  saveItem: {
    fontWeight: "bold",
  },
});
