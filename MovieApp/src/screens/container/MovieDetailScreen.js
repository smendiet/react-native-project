import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function MovieDetailScreen({route}) {
  const { movieId } = route.params;

  const handleLoadStart = () => {
    console.log('start');
  };

  const handleLoadEnd = () => {
    console.log('End');
  };

  return (
    <WebView
      source={{ uri: `https://www.imdb.com/title/${movieId}`}}
      onLoadStart={handleLoadStart}
      onLoadEnd={handleLoadEnd}
    />
  )
}