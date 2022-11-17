import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';

export type RootStackParams = {
    HomeScreen: undefined;
    GameScreen: {mode: string,limit:number}
}

const Stack = createStackNavigator<RootStackParams>();


const Navigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='GameScreen' component={GameScreen}/>
    </Stack.Navigator>
  )
}

export default Navigator