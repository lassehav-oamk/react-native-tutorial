import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet } from 'react-native'

const LoginScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={ styles.screen }>
      <Text style={ styles.header }>User Login</Text>
      <Text style={ styles.text }>Username</Text>
      <TextInput 
        style={ styles.input }
        value={ userName } 
        placeholder="johndoe" 
        onChangeText={ value => setUserName(value)}
      />
      <Text style={ styles.text }>Password</Text>
      <TextInput 
        style={ styles.input }
        value={ password } 
        placeholder="password"
        onChangeText={ value => setPassword(value)}
      />
      <TouchableHighlight>
        <View style={ styles.loginButton }>
          <Text style={ styles.loginButtonText }>Login</Text>
        </View>
      </TouchableHighlight>
      <Button title="Sign up" />
        
      
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgb(51, 153, 255)',
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: 'white'
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: '90%',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20
  },
  loginButton: {
    backgroundColor: 'rgb(0, 153, 51)',
    height: 60,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 10
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20

  }
});

export default LoginScreen
