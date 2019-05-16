import * as React from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import PT from 'prop-types';
import styles from './DrawerStyle';
import TitleBar from '../components/TitleBar';
import About from '../components/About';
import UserGuide from '../components/UserGuide';
import FAQs from '../components/FAQs';
import Contact from '../components/Contact';
import Terms from '../components/Terms';
import Copyright from '../components/Copyright';
import Credits from '../components/Credits';

const helpStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  buttonContainer: {
    flex: 0.3,
    height: 550,
    backgroundColor: 'powderblue',
  },
  textContainer: {
    marginLeft: 5,
    flex: 0.7,
    height: 550,
    backgroundColor: 'grey',
  },
  button: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  heading: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    marginLeft: 10,
  },
});

class Help extends React.Component {

  static navigationOptions = {
    title: 'Help',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-help-circle-outline" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  state = {
    HelpText: About,
  };

  handleButtonPress = (page) => {
    if (page === 'About') {
      this.setState({ HelpText: About });
    }
    if (page === 'User Guide') {
      this.setState({ HelpText: UserGuide });
    }
    if (page === 'FAQs') {
      this.setState({ HelpText: FAQs });
    }
    if (page === 'Contact') {
      this.setState({ HelpText: Contact });
    }
    if (page === 'Terms') {
      this.setState({ HelpText: Terms });
    }
    if (page === 'Copyright') {
      this.setState({ HelpText: Copyright });
    }
    if (page === 'Credits') {
      this.setState({ HelpText: Credits });
    }
  }

  render() {
    const { HelpText } = this.state;
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
              onPress={event => this.handleButtonPress('User Guide')}
            >
              <Text>
                User
                Guide
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
            <HelpText />
          </View>
        </View>
      </View>
    );
  }
}

Help.propTypes = {
  navigation: PT.shape({ navigate: PT.func.isRequired }).isRequired,
};

export default Help;
