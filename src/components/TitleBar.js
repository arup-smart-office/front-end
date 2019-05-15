import React, { Component } from 'react';
import { Header, ThemeProvider, Button } from 'react-native-elements';
import { Picker } from 'react-native';
import { withNavigation } from 'react-navigation';


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
              height: 50,
              width: 100,
              borderStyle: 'solid',
              borderRadius: 4,
              borderWidth: 0.5,
              borderColor: '#d6d7da',
            }}
            onValueChange={(itemValue, itemIndex) => this.setState({ Office: itemValue })}
          >
            <Picker.Item label=" Leeds" value=" Leeds"  style={{ align: 'center', height: 50,
              width: 100,
              borderStyle: 'solid',
              borderRadius: 4,
              borderWidth: 0.5,
              borderColor: '#d6d7da'}} />
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
