import {
  View,
  Text,
} from 'react-native';
import React, { useState, } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MovieList from '../components/MovieList';
import Search from '../components/Search';
import { useMovieSearch } from '../../api/useMovies';


interface AuthResult {
  email: string;
  password: string;
}

interface MovieType {
  title: String;
}

export default function SearchScreen() {
  const [title, setTitle] = useState<String>('');
  const { isLoading, movies } = useMovieSearch(title); 

  const handleChange = (title: string) => setTitle(title);

  const MovieListCtrl = () => {
    if (isLoading) {
      return <Text>Loading</Text>;
    }

    if (!movies) {
        return <Text>not loading or error</Text>; 
    }

    if (movies.length <= 0) {
      return <Text>empty</Text>;
    }
    
    return <MovieList movies={movies} />;
  };

  return (
    <View style={{flex: 1}}>
      <Search handleChange={handleChange} query={title} />
      <MovieListCtrl /> 
    </View>
  );
}
