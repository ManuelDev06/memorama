import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import { PairProvider } from './src/context/PairContext/PairContext';


const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    </AppState>
  )
}

const AppState = ({children}:{children: JSX.Element}) => {
  return (
    <PairProvider>
      {children}
    </PairProvider>
  )
}

export default App