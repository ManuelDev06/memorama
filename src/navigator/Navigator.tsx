import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export type RootStackParams = {
    HomeScreen: undefined;
    GameScreen: {mode: string,limit:number,time?:number}
}

const Stack = createStackNavigator<RootStackParams>();

const Navigator = () => {
    
    const {theme} = useContext(ThemeContext)
    
  return (
    <NavigationContainer
      theme={theme}
    >
      <Stack.Navigator
          screenOptions={{
              headerShown: false
          }}
      >
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          <Stack.Screen name='GameScreen' component={GameScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator