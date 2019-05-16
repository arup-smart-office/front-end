import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FAQs extends Component {
  render() {
    return (
      <View>
        <Text>
          Frequently Asked Questions

          {"\n\n"}

          - How do I see which parts of the office are warm? {"\n"}
            On the Office Map page, the footer bar has a number of icons to display information about the office environment.

            {"\n\n"}

            - How do I change which office I am looking at? {"\n"}
              Select your preferred office from the drop-down meanu at the top of the Office Map

              {"\n\n"}

            - Can I add my own office to the App? {"\n"}
              New offices will be added to the App in the next version release. To make sure yours is included, leave a comment in the Contact page.
        </Text>
      </View>
    );
  }
}

export default FAQs;