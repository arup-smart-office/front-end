import React from 'react';
import { Header } from 'react-native-elements';

const TitleBar = () => (
  <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'TITLE', style: { color: '#fff', fontFamily: 'serif' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
    containerStyle={{
      backgroundColor: '#28AAE1',
    }}
  />
);

export default TitleBar;
