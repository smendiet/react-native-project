import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function MovieDetailScreen() {
  const handleLoadStart = () => {
    console.log('start');
  };

  const handleLoadEnd = () => {
    console.log('End');
  };

  return (
    <WebView
      source={{ uri: `https://www.imdb.com/title/tt0111161`}}
      onLoadStart={handleLoadStart}
      onLoadEnd={handleLoadEnd}
    />
  )
}