import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import React from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileLogo from '../../../assets/profile-logo.png';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const logout = () => {
    AsyncStorage.removeItem('auth');
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.person}>
          <View style={styles.contentImage}>
            <Image
              width='35'
              height='40'
              style={{flex: 1, width: "70%", height: '70%', resizeMode: "center"}}
              source={ProfileLogo} />
          </View>
          <View style={styles.contentProfile}>
            <View style={styles.contentProfileItem}>
              <Text style={{fontSize: 20, fontWeight: "bold",}}>Sergio Mendieta</Text>
            </View>
            <View style={styles.contentProfileItem}>
              <Text style={{fontSize: 16,}}>Software Developer</Text>
            </View>
            <View style={[styles.contentProfileItem]}>
              <View style={styles.contentProfileDetailItem}>
                <Text style={{fontSize: 10,}}>Panamá, Panamá</Text>
              </View>
              <View style={styles.contentProfileDetailItem}>
                <Text style={{fontSize: 10,}}>Joined on October 2020</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.save}>
          <Text style={styles.saveItem}>Peliculas</Text>
          <Text style={styles.saveItem}>Series</Text>
        </View>
      </View>
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "#00bfff",
  },
  content: {
    flex: 3,
    flexDirection: "column",
  },
  person: {
    flex: 1,
    flexDirection: "row",
  },
  save: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  saveItem: {
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
  },
  contentImage: {
   flex: 3, 
   alignItems: "center",
   justifyContent: "flex-start",
  },
  contentProfile: {
    flex: 5,
    justifyContent: "space-around",
  },
  contentProfileItem: {
    height: 25,
  },
  contentProfileDetail: {
    flexDirection: "row",
  },
  contentProfileDetailItem: {
    flex: 1,
    fontSize: 8,
  }
});
