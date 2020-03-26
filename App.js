import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactLogo from './components/ReactLogo';
import PG_ReactLogo from './components/PG_ReactLogo';

export default function App() {
  return (
    <View style={styles.container}>
       {/* <ReactLogo /> */}
       <PG_ReactLogo />
    </View>
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
