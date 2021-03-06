import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { useQuery } from 'react-query';

import { MOVIES } from '../../helpers/movies';
import MovieList from '../components/MovieList';
import { useMoviesList } from '../../api/useMovies';

export default function MovieScreen({route}) {
  const navigation = useNavigation();
  const genre = route.params?.genre ?? '';
  const { isLoading, movies } = useMoviesList(genre);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (!movies) {
    return <Text>not loading or error</Text>;
  }

  return (
    <View style={{flex: 1}}>
      <MovieList movies={movies} />
    </View>
  );
}