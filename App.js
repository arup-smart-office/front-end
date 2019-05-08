import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import TitleBar from './components/TitleBar';
import Maps from './components/Maps';

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <ThemeProvider>
        <TitleBar />
        <Maps />
      </ThemeProvider>
    );
  }
}
