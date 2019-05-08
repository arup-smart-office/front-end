import React, { Component } from 'react';
import { Svg } from 'expo';
import PT from 'prop-types';

const {
  G, Rect, Defs, Use,
} = Svg;

const styles = { occupied: 'red', vacant: 'green' }

export default class SvgRoot extends Component {
  state = {
    occupied: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      false,
      true,
      true,
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      false,
    ],
  };

  render() {
    const { transform } = this.props;
    const { occupied } = this.state;
    return (
      <Svg width="100%" height="100%">
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
        </Defs>
        <G>
          <Rect x="0" y="0" width="100%" height="100%" fill="white" strokeWidth="3" stroke="#d1d5da" />

          <G transform={transform}>
            <G id="largeDeskOne" y="50">
              <G id="desk1">
                <Use href="#deskHoz" y="15" />
                <Use href="#deskHoz" x="20" y="15" />
                <Use href="#chair" x="5" fill={occupied[0] ? styles.occupied : styles.vacant} />
                <Use href="#chair" x="25" fill={occupied[1] ? styles.occupied : styles.vacant} />
              </G>
              <G id="desk2" x="40">
                <Use href="#deskHoz" y="15" />
                <Use href="#deskHoz" x="20" y="15" />
                <Use href="#chair" x="5" fill={occupied[2] ? styles.occupied : styles.vacant} />
                <Use href="#chair" x="25" fill={occupied[3] ? styles.occupied : styles.vacant} />
              </G>
              <G id="desk3" y="35">
                <Use href="#deskHoz" />
                <Use href="#deskHoz" x="20" />
                <Use href="#chair" y="25" x="5" fill={occupied[4] ? styles.occupied : styles.vacant} />
                <Use href="#chair" y="25" x="25" fill={occupied[5] ? styles.occupied : styles.vacant} />
              </G>
              <G id="desk4" x="40" y="35">
                <Use href="#deskHoz" />
                <Use href="#deskHoz" x="20" />
                <Use href="#chair" y="25" x="5" fill={occupied[6] ? styles.occupied : styles.vacant} />
                <Use href="#chair" y="25" x="25" fill={occupied[7] ? styles.occupied : styles.vacant} />
              </G>
            </G>
            <G id="largeDeskTwo" y="140">
              <G id="desk5">
                <Use href="#deskHoz" y="15" />
                <Use href="#deskHoz" x="20" y="15" />
                <Use href="#chair" x="5" fill={occupied[8] ? styles.occupied : styles.vacant} />
                <Use href="#chair" x="25" fill={occupied[9] ? styles.occupied : styles.vacant} />
              </G>
              <G id="desk6" x="40">
                <Use href="#deskHoz" y="15" />
                <Use href="#deskHoz" x="20" y="15" />
                <Use href="#chair" x="5" fill={occupied[10] ? styles.occupied : styles.vacant} />
                <Use href="#chair" x="25" fill={occupied[11] ? styles.occupied : styles.vacant} />
              </G>
              <G id="desk7" y="35">
                <Use href="#deskHoz" />
                <Use href="#deskHoz" x="20" />
                <Use href="#chair" y="25" x="5" fill={occupied[12] ? styles.occupied : styles.vacant} />
                <Use href="#chair" y="25" x="25" fill={occupied[13] ? styles.occupied : styles.vacant} />
              </G>
              <G id="desk8" x="40" y="35">
                <Use href="#deskHoz" />
                <Use href="#deskHoz" x="20" />
                <Use href="#chair" y="25" x="5" fill={occupied[14] ? styles.occupied : styles.vacant} />
                <Use href="#chair" y="25" x="25" fill={occupied[15] ? styles.occupied : styles.vacant} />
              </G>
            </G>
            <G id="smallDeskOne" x="100">
              <Use href="#deskVert" x="15" />
              <Use href="#deskVert" x="15" y="20" />
              <Use href="#chair" y="5" fill={occupied[16] ? styles.occupied : styles.vacant} />
              <Use href="#chair" y="25" fill={occupied[17] ? styles.occupied : styles.vacant} />
            </G>
            <G id="smallDeskTwo" x="100" y="60">
              <Use href="#deskVert" x="15" />
              <Use href="#deskVert" x="15" y="20" />
              <Use href="#chair" y="5" fill={occupied[18] ? styles.occupied : styles.vacant} />
              <Use href="#chair" y="25" fill={occupied[19] ? styles.occupied : styles.vacant} />
            </G>
            <G id="smallDeskThree" x="100" y="120">
              <Use href="#deskVert" x="15" />
              <Use href="#deskVert" x="15" y="20" />
              <Use href="#chair" y="5" fill={occupied[20] ? styles.occupied : styles.vacant} />
              <Use href="#chair" y="25" fill={occupied[21] ? styles.occupied : styles.vacant} />
            </G>
            <G id="smallDeskThree" x="100" y="180">
              <Use href="#deskVert" x="15" />
              <Use href="#deskVert" x="15" y="20" />
              <Use href="#chair" y="5" fill={occupied[22] ? styles.occupied : styles.vacant} />
              <Use href="#chair" y="25" fill={occupied[23] ? styles.occupied : styles.vacant} />
            </G>
          </G>
        </G>
      </Svg>
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
