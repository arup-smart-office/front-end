import React, { Component } from 'react';
import { Svg } from 'expo';
import PT from 'prop-types';
import * as api from '../api'

const {
  G, Rect, Defs, Use, Text,
} = Svg;


const styles = { occupied: 'red', vacant: 'green' };

export default class SvgRoot extends Component {
  state = {
    desks: [],
    dimensions: { width: 0, height: 0 },
  };

  componentDidMount() {
    api.getDesks(24).then(({ data: { listDesks } }) => this.updateOccuancy(listDesks.items));
  }

  updateOccuancy = (desks) => {
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
    const keyTitleSize = (keyHeight - 20) / 5;
    const keyItemSize = (keyHeight - 20) / 10;
    const numKeyItems = 2;
    const itemSpacing = ((keyHeight - keyTitleSize) / numKeyItems) - keyItemSize;

    return (
      desks.length > 0 ? (
        <Svg width="100%" height="100%" onLayout={this.onLayout}>
          <Defs>
            <G id="chair">
              <Rect x="0" y="0" width="10" height="10" />
            </G>
            <G id="deskHoz">
              <Rect x="0" y="0" width="20" height="20" />
            </G>
            <G id="deskVert">
              <Rect x="0" y="0" width="20" height="20" />
            </G>
            <G id="key" x="10" y="-10">
              <Rect width={keyWidth} height={keyHeight} strokeWidth="3" stroke="#d1d5da" fill="white" />
              <Text
                fill="black"
                fontSize={keyTitleSize}
                fontWeight="bold"
                x={(keyWidth / 2)}
                y={keyTitleSize + 5}
                textAnchor="middle"
              >
                Key
            </Text>
              <Text
                fill="black"
                fontSize={keyItemSize}
                fontWeight="bold"
                x="5"
                y={itemSpacing + keyTitleSize}
              >
                Occupied
            </Text>
              <Text
                fill="black"
                fontSize={keyItemSize}
                fontWeight="bold"
                x="5"
                y={2 * itemSpacing + keyTitleSize}
              >
                Vacant
            </Text>
              <Use href="#chair" y={itemSpacing + keyTitleSize - keyItemSize} x={keyWidth - 10 - 5} fill="red" />
              <Use href="#chair" y={2 * itemSpacing + keyTitleSize - keyItemSize} x={keyWidth - 10 - 5} fill="green" />
            </G>
          </Defs>
          <G>
            <Rect x="0" y="0" width="100%" height="100%" fill="white" strokeWidth="3" stroke="#d1d5da" />


            <G transform={transform}>
              <G id="room" x="5" y="5">
                <G id="largeDeskOne" y="50">
                  <G id="desk1">
                    <Use href="#deskHoz" y="15" />
                    <Use href="#deskHoz" x="20" y="15" />
                    <Use href="#chair" x="5" fill={desks[0].isOccupied ? styles.occupied : styles.vacant} />
                    <Use href="#chair" x="25" fill={desks[1].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk2" x="40">
                    <Use href="#deskHoz" y="15" />
                    <Use href="#deskHoz" x="20" y="15" />
                    <Use href="#chair" x="5" fill={desks[2].isOccupied ? styles.occupied : styles.vacant} />
                    <Use href="#chair" x="25" fill={desks[3].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk3" y="35">
                    <Use href="#deskHoz" />
                    <Use href="#deskHoz" x="20" />
                    <Use href="#chair" y="25" x="5" fill={desks[4].isOccupied ? styles.occupied : styles.vacant} />
                    <Use href="#chair" y="25" x="25" fill={desks[5].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk4" x="40" y="35">
                    <Use href="#deskHoz" />
                    <Use href="#deskHoz" x="20" />
                    <Use href="#chair" y="25" x="5" fill={desks[6].isOccupied ? styles.occupied : styles.vacant} />
                    <Use href="#chair" y="25" x="25" fill={desks[7].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                </G>
                <G id="largeDeskTwo" y="140">
                  <G id="desk5">
                    <Use href="#deskHoz" y="15" />
                    <Use href="#deskHoz" x="20" y="15" />
                    <Use href="#chair" x="5" fill={desks[8].isOccupied ? styles.occupied : styles.vacant} />
                    <Use href="#chair" x="25" fill={desks[9].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk6" x="40">
                    <Use href="#deskHoz" y="15" />
                    <Use href="#deskHoz" x="20" y="15" />
                    <Use href="#chair" x="5" fill={desks[10].isOccupied ? styles.occupied : styles.vacant} />
                    <Use href="#chair" x="25" fill={desks[11].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk7" y="35">
                    <Use href="#deskHoz" />
                    <Use href="#deskHoz" x="20" />
                    <Use href="#chair" y="25" x="5" fill={desks[12].isOccupied ? styles.occupied : styles.vacant} />
                    <Use href="#chair" y="25" x="25" fill={desks[13].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                  <G id="desk8" x="40" y="35">
                    <Use href="#deskHoz" />
                    <Use href="#deskHoz" x="20" />
                    <Use href="#chair" y="25" x="5" fill={desks[14].isOccupied ? styles.occupied : styles.vacant} />
                    <Use href="#chair" y="25" x="25" fill={desks[15].isOccupied ? styles.occupied : styles.vacant} />
                  </G>
                </G>
                <G id="smallDeskOne" x="100">
                  <Use href="#deskVert" x="15" />
                  <Use href="#deskVert" x="15" y="20" />
                  <Use href="#chair" y="5" fill={desks[16].isOccupied ? styles.occupied : styles.vacant} />
                  <Use href="#chair" y="25" fill={desks[17].isOccupied ? styles.occupied : styles.vacant} />
                </G>
                <G id="smallDeskTwo" x="100" y="60">
                  <Use href="#deskVert" x="15" />
                  <Use href="#deskVert" x="15" y="20" />
                  <Use href="#chair" y="5" fill={desks[18].isOccupied ? styles.occupied : styles.vacant} />
                  <Use href="#chair" y="25" fill={desks[19].isOccupied ? styles.occupied : styles.vacant} />
                </G>
                <G id="smallDeskThree" x="100" y="120">
                  <Use href="#deskVert" x="15" />
                  <Use href="#deskVert" x="15" y="20" />
                  <Use href="#chair" y="5" fill={desks[20].isOccupied ? styles.occupied : styles.vacant} />
                  <Use href="#chair" y="25" fill={desks[21].isOccupied ? styles.occupied : styles.vacant} />
                </G>
                <G id="smallDeskThree" x="100" y="180">
                  <Use href="#deskVert" x="15" />
                  <Use href="#deskVert" x="15" y="20" />
                  <Use href="#chair" y="5" fill={desks[22].isOccupied ? styles.occupied : styles.vacant} />
                  <Use href="#chair" y="25" fill={desks[23].isOccupied ? styles.occupied : styles.vacant} />
                </G>
              </G>
            </G>

            <Use href="#key" x="0" y={height - keyHeight} />
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
