import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import skier from '../../assets/cyprien-delaporte-xe46njOok-A-unsplash.jpg'

export default class ImageDemo extends Component {
  render() {
    return (
      <View style={{ height: 300, width: '100%', backgroundColor: 'green'}}>
        <Image source={ skier } style={{ width: 300, height: 200, position: 'absolute', top: 0, left: 0}} resizeMode={'contain'}></Image>
        <Text style={{
          position: 'absolute',
          
        }}>Overlay</Text>          
      </View>
    )
  }
}
