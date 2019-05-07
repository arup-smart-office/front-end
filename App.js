import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import TitleBar from './components/TitleBar';

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <ThemeProvider>
        <TitleBar />
      </ThemeProvider>
    );
  }
}
