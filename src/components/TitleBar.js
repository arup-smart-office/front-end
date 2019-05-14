import React, { Component } from 'react';
import { Header, ThemeProvider, Button } from 'react-native-elements';
import { Picker } from 'react-native';

// import * as React from 'react';
import { withNavigation } from 'react-navigation';
import Home from '../../App';

class TitleBar extends Component {
  state = { office: 'Select Your Office' };

  render() {
    return (
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => this.props.navigation.toggleDrawer(),
        }}
        centerComponent={(
          <Picker
            selectedValue={this.state.language}
            style={{
              height: 50, width: 100, backgroundColor: '#62B9DE',
            }}
            onValueChange={(itemValue, itemIndex) => this.setState({ Office: itemValue })}
          >
            <Picker.Item label=" Leeds" value=" Leeds" />
          </Picker>
)}
        rightComponent={{
          icon: 'home',
          color: '#fff',
          onPress: () => {
            this.props.navigation.navigate('Home');
          },
        }}
        containerStyle={{
          backgroundColor: '#28AAE1',
        }}
      />
    );
  }
}

export default withNavigation(TitleBar);
