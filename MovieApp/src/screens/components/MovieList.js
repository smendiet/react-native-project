import { ScrollView, Text, StyleSheet } from 'react-native'
import React, {Fragment} from 'react'
import MovieItem from './MovieItem';
import { movieSearch } from '../../api/useMovies';
import { useQuery } from 'react-query';

export default function MovieList({movies}) {

  return (
    <Fragment>
    {movies ?
      <ScrollView style={styles.container}>
        {movies.map((movie, index) => {  
            return <MovieItem
              key={movie.id}
              movie={movie}
            />
          })
        }
      </ScrollView>
      :<Fragment></Fragment>
    }
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});