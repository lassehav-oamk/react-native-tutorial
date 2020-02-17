import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './tutorials/step1-helloworld/HelloWorld';
import CustomText from './tutorials/step2-props/CustomText';
import Greeter from './tutorials/step3-state-and-text-input/Greeter';
import StyleDemo from './tutorials/step4-style/StyleDemo';
import Dimensions from "./tutorials/step5-layout/1Dimensions";
import FlexDirectionAndJustify from "./tutorials/step5-layout/2FlexDirectionAndJustify";
import ImageDemo from './tutorials/step6-images/ImageDemo';
import skier from './assets/cyprien-delaporte-xe46njOok-A-unsplash.jpg'
import mountains  from './assets/alexandra-avelar-O6RLx-ECnSw-unsplash.jpg'
import IconMix from './tutorials/step7-icons/IconMix';
import SpotifyDemo from './components/spotify/SpotifyDemo';
import StackNavigationDemo from './tutorials/step8-navigation/StackNavigation';
import TabNavigationDemo from './tutorials/step8-navigation/TabNavigation'

export default function App() {

  let output;
  // Steps 1-4
  /*output = (
    <View style={styles.container}>
      <HelloWorld></HelloWorld>
      <CustomText value="This is data passed by props to the component"></CustomText>
      <Greeter></Greeter>
      <StyleDemo></StyleDemo>
    </View>
  );*/

  // Step 5 - Layout example 1
  //output = <Dimensions></Dimensions>;

  // Step 5 - Layout example 2
  //output = <FlexDirectionAndJustify></FlexDirectionAndJustify>;

  // Step 6 - Image example
  /*output = (
    <View style={ styles.container }>
      <ImageDemo style={{ flex: 1}} text={"Hello"} image={ skier }></ImageDemo>
      <ImageDemo style={{ flex: 1}} text={"World"} image={ mountains }></ImageDemo>

    </View>
  );*/

  // Step 7 - Icons example
  /*
  output = (<View style={ styles.container }>
    <IconMix></IconMix>
  </View>);
  */

  // Spotify UI example
  //output = <SpotifyDemo></SpotifyDemo>

  // Step8 - Navigation Stack
  output = (
    <View style={ styles.container }>
      <StackNavigationDemo></StackNavigationDemo>
    </View>);

  // Step8 - Navigation Tab
  /*output = (
    <View style={ styles.container }>
      <TabNavigationDemo></TabNavigationDemo>
    </View>);*/

  return output;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 18
  },
});
