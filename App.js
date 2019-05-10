import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import TitleBar from './src/components/TitleBar';
import Maps from './src/components/Maps';

const App = () => (
  <ThemeProvider>
    <TitleBar />
    <Maps />
  </ThemeProvider>
);

export default App;
