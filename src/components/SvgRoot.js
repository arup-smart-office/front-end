import React, { Component } from 'react';
import { Svg } from 'expo';
import PT from 'prop-types';
import * as api from '../api';

const {
  G, Rect, Defs, Use, Text, Path,
} = Svg;


const styles = { occupied: '#BE3728', vacant: '#28AF73' };

export default class SvgRoot extends Component {
  state = {
    desks: [],
    dimensions: { width: 0, height: 0 },
  };

  componentDidMount() {
    api.getDesks(24).then(({ data: { listDesks } }) => this.seedDesk(listDesks.items));
    api.subscribeToDesks(this.updateDesk);
  }

  updateDesk = ({ value: { data } }) => {
    const updatedDesk = data.onUpdateDesk;
    this.setState(({ desks }) => ({
      desks: desks.map((desk) => {
        if (desk.id === updatedDesk.id) {
          return { ...desk, ...updatedDesk };
        }
        return desk;
      }),
    }));
  }

  seedDesk = (desks) => {
    this.setState({ desks: desks.sort((a, b) => Number(a.id) - Number(b.id)) });
  }

  onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ dimensions: { width, height } });
  };

  render() {
    const { transform } = this.props;
    const { desks, dimensions: { height, width } } = this.state;
    const keyHeight = height / 5;
    const keyWidth = width / 3;
    const keyTitleSize = (keyHeight - 20) / 7;
    const keyItemSize = (keyHeight - 20) / 10;
    const numKeyItems = 2;
    const itemSpacing = ((keyHeight - keyTitleSize) / numKeyItems) - keyItemSize;
    return (
      desks.length > 0 ? (
        <Svg width="100%" height="100%" onLayout={this.onLayout}>
          <Defs>
            <G id="chair" scale="0.07" x="2.5" y="-1">
              <Path d="M161.332 22.666H54.664C48.777 22.666 44 27.447 44 33.334v64c0 17.645 14.355 32 32 32h64c17.641 0 32-14.355 32-32v-64c0-5.887-4.781-10.668-10.668-10.668z" />
              <Path d="M182.666 1.666c-17.641 0-32 14.355-32 32v64c0 5.887-4.777 10.668-10.664 10.668h-64c-5.891 0-10.668-4.781-10.668-10.668v-64c0-17.645-14.355-32-32-32s-32 14.355-32 32v85.332c0 29.398 23.938 53.336 53.332 53.336h106.668c29.398 0 53.332-23.937 53.332-53.336V33.666c0-17.645-14.355-32-32-32zm0 0" />
              <Path
                d="m161.334 172.334h-106.668c-29.395 0-53.332-23.937-53.332-53.336v-85.332c0-17.645 14.355-32 32-32s32 14.355 32 32v64c0 5.887 4.777 10.668 10.668 10.668h64c5.887 0 10.664-4.781 10.664-10.668v-64c0-17.645 14.359-32 32-32 17.645 0 32 14.355 32 32v85.332c0 29.398-23.934 53.336-53.332 53.336z m-128-149.336c-5.887 0-10.668 4.781-10.668 10.668v85.332c0 17.645 14.359 32 32 32h106.668c17.645 0 32-14.355 32-32v-85.332c0-5.887-4.777-10.668-10.668-10.668-5.887 0-10.664 4.781-10.664 10.668v64c0 17.645-14.359 32-32 32h-64c-17.645 0-32-14.355-32-32v-64c0-5.887-4.781-10.668-10.668-10.668z"
                fill="#000"
              />
              <Path
                d="M161.332 42.668H54.664C48.777 42.668 44 37.887 44 32s4.777-10.668 10.664-10.668h106.668C167.219 21.332 172 26.113 172 32s-4.781 10.668-10.668 10.668z"
                fill="#000"
              />
            </G>
            <G id="desk">
              <Rect x="0" y="0" width="20" height="20" fill="#CCC" stroke="#999" strokeWidth="1" ry="1" rx="1" />
            </G>
          </Defs>
          <G>
            <Rect x="0" y="0" width="100%" height="100%" strokeWidth="3" stroke="#CCC" fill="rgba(40, 170, 225, 0.4)" />

            <G transform={transform}>
              <G id="room" x="5" y="5">
                <Rect width="140" height="230" x="-2" fill="#FFF" stroke="#999" strokeWidth="1" />
                <Rect width="140" height="230" x="-2" fill="rgba(40, 170, 225, 0.2)" stroke="#999" strokeWidth="1" />
                <G id="largeDeskOne" y="50">
                  <G id="desk0" origin="10, 17.5" rotation="180">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[0].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk1" origin="10, 17.5" rotation="180" x="20">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[1].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk2" origin="10, 17.5" rotation="180" x="40">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[2].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk3" origin="10, 17.5" rotation="180" x="60">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[3].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk4" origin="10, 17.5" y="35">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[4].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk5" origin="10, 17.5" y="35" x="20">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[4].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk6" origin="10, 17.5" y="35" x="40">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[6].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk7" origin="10, 17.5" y="35" x="60">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[7].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                </G>
                <G id="largeDeskTwo" y="140">
                  <G id="desk8" origin="10, 17.5" rotation="180">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[8].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk9" origin="10, 17.5" rotation="180" x="20">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[9].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk10" origin="10, 17.5" rotation="180" x="40">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[10].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk11" origin="10, 17.5" rotation="180" x="60">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[11].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk12" origin="10, 17.5" y="35">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[12].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk13" origin="10, 17.5" y="35" x="20">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[13].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk14" origin="10, 17.5" y="35" x="40">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[14].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk15" origin="10, 17.5" y="35" x="60">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[15].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                </G>
                <G id="smallDeskOne" x="100">
                  <G id="desk16" origin="10, 17.5" rotation="90" x="7.5">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[16].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk17" origin="10, 17.5" rotation="90" y="20" x="7.5">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[17].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                </G>
                <G id="smallDeskTwo" x="100" y="60">
                  <G id="desk18" origin="10, 17.5" rotation="90" x="7.5">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[18].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk19" origin="10, 17.5" rotation="90" y="20" x="7.5">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[19].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                </G>
                <G id="smallDeskThree" x="100" y="120">
                  <G id="desk20" origin="10, 17.5" rotation="90" x="7.5">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[20].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk21" origin="10, 17.5" rotation="90" y="20" x="7.5">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[21].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                </G>
                <G id="smallDeskThree" x="100" y="180">
                  <G id="desk22" origin="10, 17.5" rotation="90" x="7.5">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[22].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk23" origin="10, 17.5" rotation="90" y="20" x="7.5">
                    <Use href="#desk" />
                    <Use href="#chair" y="22" fill={desks[23].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </Svg>
      ) : <Text>...Loading</Text>
    );
  }
}

SvgRoot.propTypes = {
  transform: PT.shape({
    scaleX: PT.number,
    scaleY: PT.number,
    translateX: PT.number,
    translateY: PT.number,
  }),
};

SvgRoot.defaultProps = {
  transform: {
    scaleX: 0,
    scaleY: 0,
    translateX: 0,
    translateY: 0,
  },
};
