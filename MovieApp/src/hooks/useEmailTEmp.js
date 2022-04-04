import { View, Text } from 'react-native';
import React from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function useEmailTEmp() {
  const [email, setEmail] = useAsyncStorage("email");

  return (
    <View>
      <Text>Email</Text>
    </View>
  )
}