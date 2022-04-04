import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView, TextInput, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
//import Spinner from 'react-native-loading-spinner-overlay';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from 'formik';
import { string, object }from 'yup';
import { useQuery, useMutation } from 'react-query';
import useLogin, { loginPost } from '../../api/useLogin';
import BeduLogo from '../../../assets/bedu.png';


export default function LoginScreen() {
  const SiginSchema = object().shape({
    email: string()
      .required('Requerido')
      .email('Debe ser un una dirección de email valida'),
    password: string()
      .min(8, 'Too Short!')
      .max(25, 'Too Long!')
      .required('Required'),
  });

  const mutation = useMutation(loginPost, {
    onSuccess: () => {
      setLoading(false);
      navigation.navigate('Navigation');
    },
    onError: () => {
      setLoading(false);
      AsyncStorage.removeItem('auth');
    },
  });

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.error(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      setLoading(true);

      storeData('auth', JSON.stringify({
        email: values.email,
        password: values.password, 
      }));

      mutation.mutate(values);
    },
    validationSchema: SiginSchema,
  });

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        const auth = JSON.parse(await AsyncStorage.getItem('auth'));
        console.log('useEffect', auth);
        if (auth) {
          formik.values.email = auth.email;
          formik.values.password = auth.password;

          formik.handleSubmit();
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={BeduLogo}
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentItem}>
          <TextInput
            style={styles.input}
            placeholder='Email'
            onChangeText={formik.handleChange('email')}
            defaultValue={formik.values.email}
          />
        </View>
        <View style={styles.contentItem}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={formik.handleChange('password')}
            defaultValue={formik.values.password}
          />
        </View>
        <View style={styles.contentItem}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
          </View>
          <TouchableOpacity
            onPress={formik.handleSubmit}
            style={styles.button}
            disabled={!formik.isValid}
            style={{
                backgroundColor:
                formik.isValid ? '#3D85C6' : '#b1cee8',
                borderRadius: 20,
            }}>
            <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Progress.CircleSnail
          animating={loading}
          color={['blue']}
          hidesWhenStopped={true}
        />
        <Text style={{fontWeight: "bold", fontSize: 20,}}>React Native</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, header: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#fff',
    justifyContent: "flex-start",
  }, content: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 35,
  },
  contentItem: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    fontSize: 20,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    width: '75%',
    resizeMode: 'contain',
  },
  button: {
    borderRadius: 40,
    marginTop: 20,
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
