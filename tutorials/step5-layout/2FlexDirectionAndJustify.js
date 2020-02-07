import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class FlexDirectionAndJustify extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 20,
        flexDirection: 'column', // MAIN AXIS
        justifyContent: 'space-around', // MAIN AXIS - Test out all the values
        alignItems: 'baseline' // CROSS AXIS
      }}>
        <Text style={{ height: 80, borderWidth: 1, borderColor: 'black' }}>
          justifyContent does not really work directly with flex dimensioned elements only
        </Text>
        <View style={[ styles.box, { backgroundColor: 'green' }]}></View>
        <View style={[ styles.box, { backgroundColor: 'red' }]}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    height: 80,
    width: 80
  }
})