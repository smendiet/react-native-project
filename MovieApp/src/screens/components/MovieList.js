import { ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import MovieItem from './MovieItem';

export default function MovieList({movies}) {
  return (
    <ScrollView style={styles.container}>
      {movies.map((movie, index) => {  
          return <MovieItem
            key={movie.id}
            movie={movie}
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