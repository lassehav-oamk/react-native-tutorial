import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginScreen from './components/LoginScreen';


export default class AuthDemo extends Component {
  constructor(props)
  {
    super(props);


  }
  render() {
    return (
      <View style={{ flex: 1}}>        
        <LoginScreen></LoginScreen>
      </View>
    )
  }
}
