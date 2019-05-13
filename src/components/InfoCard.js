import React from 'react';
import { Card } from 'react-native-elements';
import { View, Text } from 'react-native';


export default function InfoCard(currentDesk) {
  return (
    <Card
      title={currentDesk ? `Desk ${currentDesk.id}` : null}
      containerStyle={{
        position: 'relative',
        padding: 15,
        margin: 20,
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
            <Text>The light level is</Text>
            <Text style={{ fontWeight: 'bold' }}>{` ${currentDesk.light} Lux`}</Text>
          </Text>
        </View>
      ) : null}
    </Card>
  );
}
