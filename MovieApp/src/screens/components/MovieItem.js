import { 
  Image,
  TouchableOpacity,
 } from 'react-native';
import React from 'react';
import {
  Button,
  Card,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function MovieItem({movie}) {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate({
      name: 'MovieDetail',
      params: {
        movieId: movie.id,    
      }
    });
  };

  return (
    <Card
      style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}
    >
      <TouchableOpacity onPress={handleClick}>  
        <Card.Title title={movie.title} />
        <Card.Content onPress={handleClick} >
          <Image source={movie.portada} />
        </Card.Content>
      </TouchableOpacity>
      <Card.Actions>
        <Button>
          Añadir a Favorito
        </Button>
      </Card.Actions>
    </Card>
  );
}