import React, { Component } from 'react';
import { Svg } from 'expo';
import PT from 'prop-types';


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
    const { desks, id } = this.props;
    return (
      <G onPressIn={this.deskPressed} {... this.props}>
        <G id="chair" scale="0.07" x="2.5" y="21" fill={desks[id].isOccupied ? styles.occupied : styles.vacant}>
          <Path d="M161.332 22.666H54.664C48.777 22.666 44 27.447 44 33.334v64c0 17.645 14.355 32 32 32h64c17.641 0 32-14.355 32-32v-64c0-5.887-4.781-10.668-10.668-10.668z" stroke={styles.chairStroke} strokeWidth="5" />
          <Path d="M182.666 1.666c-17.641 0-32 14.355-32 32v64c0 5.887-4.777 10.668-10.664 10.668h-64c-5.891 0-10.668-4.781-10.668-10.668v-64c0-17.645-14.355-32-32-32s-32 14.355-32 32v85.332c0 29.398 23.938 53.336 53.332 53.336h106.668c29.398 0 53.332-23.937 53.332-53.336V33.666c0-17.645-14.355-32-32-32zm0 0" stroke={styles.chairStroke} strokeWidth="5" />
        </G>
        <G id="desk">
          <Rect x="0" y="0" width="20" height="20" fill={styles.deskBackground} stroke={styles.deskStroke} strokeWidth="1" ry="1" rx="1" />
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
      light: PT.number.isRequired,
      rfid: PT.string,
      temperature: PT.number.isRequired,
      version: PT.number.isRequired,
    }),
  ).isRequired,

};
