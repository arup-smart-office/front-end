import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Picker } from 'react-native';
import { withNavigation } from 'react-navigation';
import PT from 'prop-types';

class TitleBar extends Component {
  state = { office: 'Leeds' };

  render() {
    const { office } = this.state;
    const { navigation } = this.props;
    return (
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.toggleDrawer(),
        }}
        centerComponent={(
          <Picker
            selectedValue={office}
            style={{
              height: 50,
              width: 100,
              borderStyle: 'solid',
              borderRadius: 4,
              borderWidth: 0.5,
              borderColor: '#d6d7da',
            }}
            onValueChange={itemValue => this.setState({ office: itemValue })}
          >
            <Picker.Item
              label=" Leeds"
              value=" Leeds"
              style={{
                align: 'center',
                height: 50,
                width: 100,
                borderStyle: 'solid',
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: '#d6d7da',
              }}
            />
          </Picker>
        )}
        rightComponent={{
          icon: 'home',
          color: '#fff',
          onPress: () => {
            navigation.navigate('Home');
          },
        }}
        containerStyle={{
          backgroundColor: '#28AAE1',
        }}
      />
    );
  }
}

TitleBar.propTypes = {
  navigation: PT.shape({ navigate: PT.func.isRequired }).isRequired,
};

export default withNavigation(TitleBar);
