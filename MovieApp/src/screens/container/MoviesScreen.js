import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { MOVIES } from '../../helpers/movies';
import MovieList from '../components/MovieList';

export default function MovieScreen() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState(MOVIES);

  return (
    <View style={{flex: 1}}>
      <MovieList movies={movies} navigation={navigation} />
    </View>
  )
}