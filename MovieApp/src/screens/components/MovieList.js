import { ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import MovieItem from './MovieItem';

export default function MovieList({navigation, movies}) {
  const handleClick = () => {
    navigation.navigate('MovieDetail');
  }

  return (
    <ScrollView style={styles.container}>
      {
        movies.map((movie, index) => {  
          return <MovieItem
            key={movie.id}
            movie={movie}
            handleClick={handleClick}
          />
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});