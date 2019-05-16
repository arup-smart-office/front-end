import React from 'react';
import { Card } from 'react-native-elements';
import { View, Text } from 'react-native';
import PT from 'prop-types';


export default function InfoCard({ currentDesk }) {
  return (
    <Card
      title={currentDesk ? `Desk ${currentDesk.id}` : null}
      containerStyle={{
        position: 'relative',
        padding: 15,
        margin: 0,
        marginTop: 0,
        borderTopWidth: 5,
        borderBottomWidth: 0,
        elevation: 0,
      }}
    >
      {currentDesk ? (
        <View>
          <Text>
            <Text>The desk is currently</Text>
            <Text style={{ fontWeight: 'bold' }}>{currentDesk.isOccupied ? ' occupied' : ' vacant'}</Text>
          </Text>
          <Text>
            <Text>The temperature is</Text>
            <Text style={{ fontWeight: 'bold' }}>{` ${currentDesk.temperature}°C`}</Text>
          </Text>
          <Text>
            <Text>The humidity is</Text>
            <Text style={{ fontWeight: 'bold' }}>{` ${Math.round(currentDesk.humidity)}%`}</Text>
          </Text>
          <Text>
            <Text>This area is</Text>
            <Text style={{ fontWeight: 'bold' }}>{` ${currentDesk.light ? 'brighter' : 'darker'}`}</Text>
            <Text> and</Text>
            <Text style={{ fontWeight: 'bold' }}>{` ${currentDesk.sound ? 'louder' : 'quieter'}`}</Text>
            <Text> than average</Text>
          </Text>
        </View>
      ) : null}
    </Card>
  );
}

InfoCard.propTypes = {
  currentDesk: PT.shape({
    id: PT.string.isRequired,
    isOccupied: PT.bool.isRequired,
    light: PT.bool.isRequired,
    sound: PT.bool.isRequired,
    rfid: PT.string,
    temperature: PT.number.isRequired,
    humidity: PT.number.isRequired,
    version: PT.number.isRequired,
  }).isRequired,
};
