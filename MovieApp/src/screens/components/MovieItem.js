import { 
  Image,
  TouchableOpacity,
 } from 'react-native';
import React from 'react';
import {
  Button,
  Card,
} from 'react-native-paper';

export default function MovieItem({handleClick, movie}) {
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
        <Button onPress={handleClick}>Ver Detalle</Button>
        <Button>
          Añadir a Favorito
        </Button>
      </Card.Actions>
    </Card>
  );
}