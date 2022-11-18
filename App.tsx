import 'react-native-gesture-handler';
import React from 'react'
import Navigator from './src/navigator/Navigator';
import { PairProvider } from './src/context/PairContext/PairContext';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';


const App = () => {
  return (
    <AppState>
        <Navigator/>
    </AppState>
  )
}

const AppState = ({children}:{children: JSX.Element}) => {
  return (
      <PairProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </PairProvider>
  )
}

export default App