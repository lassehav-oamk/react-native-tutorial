import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import CustomText from './components/CustomText'; 

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld></HelloWorld>
      <CustomText value="This is data passed by props to the component"></CustomText>
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
