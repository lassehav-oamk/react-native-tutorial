import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './tutorials/step1-helloworld/HelloWorld';
import CustomText from './tutorials/step2-props/CustomText';
import Greeter from './tutorials/step3-state-and-text-input/Greeter';
import StyleDemo from './tutorials/step4-style/StyleDemo';
import Dimensions from "./tutorials/step5-layout/1Dimensions";
import FlexDirectionAndJustify from "./tutorials/step5-layout/2FlexDirectionAndJustify";

export default function App() {

  let output;
  // Example set 1
  /*output = (
    <View style={styles.container}>
      <HelloWorld></HelloWorld>
      <CustomText value="This is data passed by props to the component"></CustomText>
      <Greeter></Greeter>
      <StyleDemo></StyleDemo>
    </View>
  );*/

  // Layout example 1
  //output = <Dimensions></Dimensions>;

  // Layout example 2
  output = <FlexDirectionAndJustify></FlexDirectionAndJustify>;


  return output;


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
