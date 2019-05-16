import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements'
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
import HelpNav from '../components/HelpNav';

class Help extends React.Component {

  static navigationOptions = {
    title: 'Help',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-help-circle-outline" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  state = {
    HelpText: About,
    Tab: 'About',
  };

  handleBottomBarClick = (newTab) => {
    this.setState({ Tab: newTab });
  };

  handleButtonPress = ({ key: page }) => {
    this.handleBottomBarClick(page);
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
    const { HelpText, Tab } = this.state;

    return (
      <View style={styles.container}>
        <TitleBar />
        <View style={{
          alignSelf: 'stretch',
          flex: 1,
        }}>
          <Card
            title={Tab}
            containerStyle={
              {
                marginBottom: 60,
              }
            }
          >
            <HelpText />
          </Card>
        </View>
        <HelpNav activeTab={Tab} onClick={this.handleButtonPress} />
      </View >
    );
  }
}

export default Help;
