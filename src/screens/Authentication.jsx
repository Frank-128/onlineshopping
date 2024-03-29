import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import VerifyEmail from '../components/VerifyEmailOrPhone'

const Stack = createStackNavigator()

const Authentication = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen component={SignUp} name='SignUp' options={{headerShown:false}} />
    <Stack.Screen component={VerifyEmail} name='VerifyEmailOrPhone' options={{headerShown:false}} />
    <Stack.Screen component={SignIn} name='SignIn' options={{headerShown:false}}/>
   </Stack.Navigator>
  )
}

export default Authentication