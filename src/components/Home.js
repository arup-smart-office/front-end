import React from 'react';
import { View, ThemeProvider } from 'react-native';
import Maps from './Maps';
import TitleBar from './TitleBar';

const Home = () => (
  <View>
    <ThemeProvider>
      <TitleBar />
      <Maps />
    </ThemeProvider>
  </View>
);


export default Home;
