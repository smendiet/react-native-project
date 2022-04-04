import { 
  Image,
  StyleSheet,
  TouchableOpacity,
 } from 'react-native';
import React from 'react';
import {
  Card,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { 
  Button,
  ToggleButton,
} from  'react-native-paper';
import { useState } from 'react';
import { parseMutationFilterArgs } from 'react-query/types/core/utils';
import { useMutation, useQueryClient } from 'react-query';
import { movieUpdate, movieDelete } from '../../api/useMovies';

export default function MovieItem({movie}) {
  const [status, setStatus] = useState('unchecked')
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate({
      name: 'MovieDetail',
      params: {
        movieId: movie.id,    
      }
    });
  };

  const queryClient = useQueryClient();
  
  const mutation = useMutation(movieUpdate, {
    onSuccess: () => {
      console.log('actualizado');
    },
    onError: () => {
      console.log('error');
    },
  });
  /*
  const mutationDelete = useMutation(movieDelete, {
    onSuccess: () => {
      console.log('delete');
    },
    onError: () => {

    },
  });

  const onButtonToggle = value => {
    if (status === 'checked') {
      mutationDelete.mutate({ movieId: movie.id, email: 'smendiet@gmail.com' }); 
      setStatus('unchecked');
    } else {
      mutation.mutate({ movieId: movie.id, email: 'smendiet@gmail.com' }); 
      setStatus('checked');
    }
  };
  */

  return (
    <Card
      style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}
    >
      <TouchableOpacity onPress={handleClick}>  
        <Card.Title title={movie.title} />
        <Card.Content onPress={handleClick} >
          <Image 
            style={{
              width: 260,
              height: 400,
              resizeMode: "contain",
            }}
          source={{uri: movie.portada }} />
        </Card.Content>
      </TouchableOpacity>
      <Card.Actions>
        {/*<ToggleButton
          icon={'heart'}
          status={status}
          onPress={onButtonToggle}
          color={status === 'checked' ? 'red' : 'gray' }
        />*/}
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
 title: {
   textAlign: 'center',
 } 
});