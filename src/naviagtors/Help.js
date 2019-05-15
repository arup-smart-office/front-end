import * as React from 'react';
import { Alert, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import PT from 'prop-types';
import styles from './DrawerStyle';
import TitleBar from '../components/TitleBar';

const helpStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  buttonContainer: {
    flex: 0.3,
    height: 450,
    backgroundColor: 'powderblue',
  },
  textContainer: {
    marginLeft: 5,
    flex: 0.7,
    height: 450,
    backgroundColor: 'green',
  },
  button: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
  },
  heading: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    marginLeft: 10,
  },
});

export default class Help extends React.Component {

  static navigationOptions = {
    title: 'Help',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-help-circle-outline" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      helpText: 'About',
    };
  }

  handleButtonPress(page) {
    // Alert.alert('you pressed a button!');
    this.setState({ helpText: page });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TitleBar />
        <Text
          style={helpStyles.heading}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          Help & Support
        </Text>
        <View style={helpStyles.container}>
          <View style={helpStyles.buttonContainer}>
            <TouchableOpacity 
              style={helpStyles.button}
              onPress={event => this.handleButtonPress('About')}
            >
              <Text>
                About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={helpStyles.button}
              onPress={event => this.handleButtonPress('FAQs')}
            >
              <Text>
                FAQs
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={helpStyles.button}
              onPress={event => this.handleButtonPress('Contact')}
            >
              <Text>
                Contact
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={helpStyles.button}
              onPress={event => this.handleButtonPress('Terms')}
            >
              <Text>
                Terms
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={helpStyles.button}
              onPress={event => this.handleButtonPress('Copyright')}
            >
              <Text>
                Copyright
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={helpStyles.button}
              onPress={event => this.handleButtonPress('Credits')}
            >
              <Text>
                Credits
              </Text>
            </TouchableOpacity>
          </View>
          <View style={helpStyles.textContainer}>
            <Text>
              { this.state.helpText }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

Help.propTypes = {
  navigation: PT.shape({ navigate: PT.func.isRequired }).isRequired,
};
