import React from 'react';
import { StyleSheet, View } from 'react-native';

import { FontLoader, Text } from './src'

export default function App() {
  return (
    <FontLoader>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
