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
          style={{flex: 1, width: "70%", height: '70%', resizeMode: "center"}}
          source={ProfileLogo} />
      </View>
      <View style={styles.contentProfile}>
        <View style={styles.contentProfileItem}>
          <Text style={{fontSize: 20, fontWeight: "bold",}}>{person?.fullName}</Text>
        </View>
        <View style={styles.contentProfileItem}>
          <Text style={{fontSize: 16,}}>Software Developer</Text>
        </View>
        <View style={[styles.contentProfileItem]}>
          <View style={styles.contentProfileDetailItem}>
            <Text style={{fontSize: 10,}}>{person?.country}</Text>
          </View>
          <View style={styles.contentProfileDetailItem}>
            <Text style={{fontSize: 10,}}>Joined on {person?.createdDate}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#00bfff",
  },
  person: {
    flex: 1,
    flexDirection: "row",
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