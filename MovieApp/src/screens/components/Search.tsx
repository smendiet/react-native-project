import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Searchbar } from 'react-native-paper';

interface Options {
  handleChange: any;
  query: any;
}

const Search = ({handleChange, query}: Options) => {
  return (
    <View>
      {/*<TextInput
        style={styles.input}
        placeholder='Ingresa tu busqueda'
      />*/}
      <Searchbar
        style={styles.input}
        placeholder='Search'
        onChangeText={handleChange}
        value={query}
      />
    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    fontSize: 20,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 3,
  },
})