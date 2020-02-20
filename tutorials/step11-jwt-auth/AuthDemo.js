import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginScreen from './components/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import View1 from './components/View1'
import View2 from './components/View2'
import View3 from './components/View3'

const Stack = createStackNavigator();

export default class AuthDemo extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isCheckingTokenStorage: true
    };
  }

  render() {

    const loginScreen = (
      <Stack.Screen
        name="Main"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />)
        }}
      >
        { props => <LoginScreen {...props}></LoginScreen> }
      </Stack.Screen>
    );

    const app = (
      <>
      <Stack.Screen name="View1" component={View1} />
      <Stack.Screen name="View2" component={View2} options={{ title: 'Title for View 2' }} />
      <Stack.Screen name="View3" component={View3} />
      </>
    );

    return (
      <View style={{ flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            { this.state.isCheckingTokenStorage ? loginScreen : app }
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}
