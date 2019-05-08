import React, { Component } from 'react';
import { Svg } from 'expo';
import PT from 'prop-types';

const {
  G, Rect, Defs, Use,
} = Svg;

export default class SvgRoot extends Component {
  state = {
  };

  render() {
    const { transform } = this.props;
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
              <G id="deskOne" y="35">
                <Use href="#deskHoz" />
                <Use href="#deskHoz" x="20" />
                <Use href="#chair" y="25" x="5" />
                <Use href="#chair" y="25" x="25" />
              </G>
              <G id="deskTwo" x="40" y="35">
                <Use href="#deskHoz" />
                <Use href="#deskHoz" x="20" />
                <Use href="#chair" y="25" x="5" />
                <Use href="#chair" y="25" x="25" />
              </G>
              <G id="deskThree">
                <Use href="#deskHoz" y="15" />
                <Use href="#deskHoz" x="20" y="15" />
                <Use href="#chair" x="5" />
                <Use href="#chair" x="25" />
              </G>
              <G id="deskFour" x="40">
                <Use href="#deskHoz" y="15" />
                <Use href="#deskHoz" x="20" y="15" />
                <Use href="#chair" x="5" />
                <Use href="#chair" x="25" />
              </G>
            </G>
            <G id="largeDeskTwo" y="140">
              <G id="deskOne" y="35">
                <Use href="#deskHoz" />
                <Use href="#deskHoz" x="20" />
                <Use href="#chair" y="25" x="5" />
                <Use href="#chair" y="25" x="25" />
              </G>
              <G id="deskTwo" x="40" y="35">
                <Use href="#deskHoz" />
                <Use href="#deskHoz" x="20" />
                <Use href="#chair" y="25" x="5" />
                <Use href="#chair" y="25" x="25" />
              </G>
              <G id="deskThree">
                <Use href="#deskHoz" y="15" />
                <Use href="#deskHoz" x="20" y="15" />
                <Use href="#chair" x="5" />
                <Use href="#chair" x="25" />
              </G>
              <G id="deskFour" x="40">
                <Use href="#deskHoz" y="15" />
                <Use href="#deskHoz" x="20" y="15" />
                <Use href="#chair" x="5" />
                <Use href="#chair" x="25" />
              </G>
            </G>
            <G id="smallDeskOne" x="100">
              <Use href="#deskVert" x="15" />
              <Use href="#deskVert" x="15" y="20" />
              <Use href="#chair" y="5" />
              <Use href="#chair" y="25" />
            </G>
            <G id="smallDeskTwo" x="100" y="60">
              <Use href="#deskVert" x="15" />
              <Use href="#deskVert" x="15" y="20" />
              <Use href="#chair" y="5" />
              <Use href="#chair" y="25" />
            </G>
            <G id="smallDeskThree" x="100" y="120">
              <Use href="#deskVert" x="15" />
              <Use href="#deskVert" x="15" y="20" />
              <Use href="#chair" y="5" />
              <Use href="#chair" y="25" />
            </G>
            <G id="smallDeskThree" x="100" y="180">
              <Use href="#deskVert" x="15" />
              <Use href="#deskVert" x="15" y="20" />
              <Use href="#chair" y="5" />
              <Use href="#chair" y="25" />
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
