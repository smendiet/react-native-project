import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MOVIES } from '../../helpers/movies';
import MovieList from '../components/MovieList';
import Search from '../components/Search';
import { title } from 'process';


export default function SearchScreen() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState(MOVIES);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (query: string) => setSearchQuery(query);

  return (
    <View style={{flex: 1}}>
      <Search handleChange={handleChange} query={searchQuery} />
      <MovieList movies={movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({

});