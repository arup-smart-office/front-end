import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import TitleBar from './components/TitleBar';
import Maps from './components/Maps';

const App = () => (
  <ThemeProvider>
    <TitleBar />
    <Maps />
  </ThemeProvider>
);

export default App;
