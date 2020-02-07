import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './tutorials/step1-helloworld/HelloWorld';
import CustomText from './tutorials/step2-props/CustomText';
import Greeter from './tutorials/step3-state-and-text-input/Greeter'
import StyleDemo from './tutorials/step4-style/StyleDemo'

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld></HelloWorld>
      <CustomText value="This is data passed by props to the component"></CustomText>
      <Greeter></Greeter>
      <StyleDemo></StyleDemo>
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
