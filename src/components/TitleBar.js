import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Picker, View } from 'react-native';
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
          <View style={{ borderRadius: 50, overflow: 'hidden', width: '100%' }}>
            <Picker
              selectedValue={office}
              mode="dropdown"
              style={{
                width: '100%',
                color: '#fff',
                backgroundColor: '#007baf',
                height: 35,
              }}
              onValueChange={itemValue => this.setState({ office: itemValue })}
            >
              <Picker.Item
                label="Leeds"
                value="Leeds"
              />
            </Picker>
          </View>
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
          height: 56,
          paddingTop: 0,
        }}
      />
    );
  }
}

TitleBar.propTypes = {
  navigation: PT.shape({ navigate: PT.func.isRequired }).isRequired,
};

export default withNavigation(TitleBar);
