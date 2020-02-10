import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Dimensions1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Text style={{ flex: 1 }}>Flex demo</Text>
        <View style={{flex: 2, backgroundColor: 'green'}}></View>
        <View style={{flex: 4, backgroundColor: 'red'}}></View>
      </View>
    )
  }
}
