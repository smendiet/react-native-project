import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import ProfileLogo from '../../../assets/profile-logo.png';
import { useQuery } from 'react-query';
import { format } from 'date-fns';

import { userGet } from '../../api/useUsers';

export default function ProfileHeader({email}) {
  let person = null;
  if (email) {
    const {data} = useQuery(['user', email], async () => await userGet({email}));
    person = data;
  }

  return (
    <View style={styles.person}>
      <View style={styles.contentImage}>
        <Image
          width='35'
          height='40'
          style={{flex: 1, width: "70%", height: '70%', resizeMode: "contain"}}
          source={ProfileLogo} />
      </View>
      <View style={styles.contentProfile}>
        <View style={styles.contentProfileItem}>
          <Text style={{fontSize: 20, fontWeight: "bold",}}>{person?.fullName}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  person: {
    flex: 1,
    flexDirection: "row",
  },
  contentImage: {
   flex: 3, 
   alignItems: "flex-end",
   justifyContent: "flex-start",
  },
  contentProfile: {
    flex: 5,
    justifyContent: "center",
  },
  contentProfileItem: {
    height: 30,
  },
});