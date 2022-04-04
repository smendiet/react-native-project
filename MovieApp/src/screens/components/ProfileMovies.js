import { View, Text } from 'react-native';
import React from 'react';
import { useMovieProfile } from '../../api/useMovies';
import MovieList from './MovieList';

export default function ProfileMovies({email}) {
  const {isLoading , movies} = useMovieProfile(email);

  if (isLoading) { 
    return <Text>Loading</Text>;
  }

  if (!movies) {
    return <Text>not loading or error</Text>;
  }

  if (movies.length <= 0) {
    return <Text>not found</Text> 
  }

  return (
    <View style={{ flex: 1, }}>
      <MovieList movies={movies} />
    </View>
  );
}