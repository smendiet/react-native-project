import { View, Text, Image } from 'react-native';
import React from 'react';
import { Button, Card, Title, Paragraph, CardMedia } from 'react-native-paper';

export default function MovieItem({navigation, screenName, handleClick, movie}) {
  return (
    <Card style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Card.Title title={movie.title} />
      <Card.Content>
        <Image source={movie.portada} />
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleClick}>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
}