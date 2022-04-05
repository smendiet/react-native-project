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
    <View style={{
      width: '100%',
      height: 58,
      justifyContent: 'center',
      backgroundColor: '#3D85C6',
    }}>
      <Searchbar
        style={styles.input}
        placeholder='Búsqueda'
        onChangeText={handleChange}
        value={query}
      />
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    //borderColor: 'gray',
    fontSize: 20,
    //marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 25,
    borderColor: '#3D85C6',
    height: 45,
  },
})