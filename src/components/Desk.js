/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { Svg } from 'expo';
import PT from 'prop-types';
import tinygradient from 'tinygradient';

const tempColours = tinygradient('blue', 'yellow', 'red').rgb(30);
const humColours = tinygradient('blue', 'green', 'red').rgb(100);

const {
  G, Rect, Path,
} = Svg;

const styles = {
  occupied: '#ef5350',
  vacant: '#8bc34a',
  chairStroke: '#FFF7EE',
  deskBackground: '#F7F4F6',
  deskStroke: '#E3E2EB',
};

export default class Desk extends Component {
  constructor(props) {
    super(props);
    this.deskPressed = this.deskPressed.bind(this);
  }

  deskPressed() {
    const { id, onPress } = this.props;
    onPress(id);
  }

  render() {
    const {
      desks, id, currentDesk, currentDisplay,
    } = this.props;


    let rgb;
    let r; let g; let
      b;
    const deskTemp = desks[id].temperature;
    const deskHum = Math.round(desks[id].humidity);
    const deskLight = desks[id].light;
    const deskSound = desks[id].sound;

    switch (currentDisplay) {
      case 'temperature':
        r = tempColours[deskTemp]._r;
        g = tempColours[deskTemp]._g;
        b = tempColours[deskTemp]._b;
        rgb = `rgb(${r},${g},${b})`;
        break;
      case 'humidity':
        r = Math.round(humColours[deskHum]._r);
        g = Math.round(humColours[deskHum]._g);
        b = Math.round(humColours[deskHum]._b);
        rgb = `rgb(${r},${g},${b})`;
        break;
      case 'light':
        rgb = `${deskLight ? '#fff7ff' : '#032533'}`;
        break;
      case 'noise':
        rgb = `${deskSound ? '#fff7ff' : '#032533'}`;
        break;
      default:
        rgb = styles.deskBackground;
        break;
    }

    let currentId = null;
    if (currentDesk) {
      currentId = String(Number(currentDesk.id) - 1);
    }
    return (
      <G
        {... this.props}
        onPressIn={this.deskPressed}
        opacity={currentId !== null && currentId !== id ? 0.4 : 1}
      >
        <G id="chair" originX="17" originY="37" rotation="180" scale="0.03" fill={desks[id].isOccupied ? styles.occupied : styles.vacant}>
          <Path d="m220.691406 61.792969h70.617188v105.929687h-70.617188zm0 0" fill="#373737" />
          <Path d="m441.378906 44.136719h8.828125c29.242188.023437 52.941407 23.722656 52.964844 52.964843v123.589844h-35.308594v-123.589844c-.03125-9.738281-7.917969-17.625-17.65625-17.652343h-388.414062c-9.738281.027343-17.625 7.914062-17.65625 17.652343v123.589844h-35.308594v-123.589844c.023437-29.242187 23.722656-52.941406 52.964844-52.964843zm0 0" fill="#8e8e8e" />
          <Path d="m123.585938 141.242188h264.828124c19.5 0 35.308594 15.808593 35.308594 35.308593v194.207031c0 78.007813-63.234375 141.242188-141.238281 141.242188h-52.96875c-78.003906 0-141.238281-63.234375-141.238281-141.242188v-194.207031c0-19.5 15.808594-35.308593 35.308594-35.308593zm0 0" />
          <Path d="m418.074219 88.277344h-324.148438c-8.417969 0-15.664062-5.941406-17.316406-14.195313l-10.59375-52.964843c-1.035156-5.1875.304687-10.566407 3.660156-14.65625 3.355469-4.089844 8.367188-6.460938 13.65625-6.460938h345.335938c5.289062 0 10.300781 2.371094 13.652343 6.460938 3.355469 4.089843 4.695313 9.46875 3.660157 14.65625l-10.59375 52.964843c-1.648438 8.253907-8.894531 14.195313-17.3125 14.195313zm0 0" />
          <G fill="#373737">
            <Path d="m8.828125 203.035156h35.308594c4.875 0 8.828125 3.953125 8.828125 8.828125v158.894531c0 14.625-11.855469 26.484376-26.480469 26.484376-14.628906 0-26.484375-11.859376-26.484375-26.484376v-158.894531c0-4.875 3.953125-8.828125 8.828125-8.828125zm0 0" />
            <Path d="m485.515625 397.242188c-14.625 0-26.480469-11.859376-26.480469-26.484376v-158.894531c0-4.875 3.953125-8.828125 8.828125-8.828125h35.308594c4.875 0 8.828125 3.953125 8.828125 8.828125v158.894531c0 14.625-11.855469 26.484376-26.484375 26.484376zm0 0" />
          </G>
        </G>
        <G id="desk">
          <Rect x="0" y="0" width="20" height="20" fill={`${rgb}`} stroke={styles.deskStroke} strokeWidth="1" ry="1" rx="1" />
        </G>
      </G>
    );
  }
}

Desk.propTypes = {
  id: PT.string.isRequired,
  onPress: PT.func.isRequired,
  desks: PT.arrayOf(
    PT.shape({
      id: PT.string.isRequired,
      isOccupied: PT.bool.isRequired,
      light: PT.bool.isRequired,
      sound: PT.bool.isRequired,
      rfid: PT.string,
      temperature: PT.number.isRequired,
      humidity: PT.number.isRequired,
      version: PT.number.isRequired,
    }),
  ).isRequired,
  currentDesk: PT.shape({
    id: PT.string,
  }),
  currentDisplay: PT.string.isRequired,
};

Desk.defaultProps = {
  currentDesk: null,
};
