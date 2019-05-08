import React, { Component } from 'react';
import { Svg } from 'expo';
import PT from 'prop-types';

const {
  G, Rect, Defs, Use,
} = Svg;

export default class SvgRoot extends Component {
  state = {
    active: [[true, true, false, false, true], [false, false, true, true, false]],
  };

  render() {
    const { transform } = this.props;
    const { active } = this.state;
    const dist = 100 / 5;
    return (
      <Svg width="100%" height="100%">
        <Defs>
          <G id="chair">
            <Rect x="0" y="0" width="10" height="10" />
          </G>
        </Defs>
        <G>
          <Rect x="0" y="0" width="100%" height="100%" fill="white" strokeWidth="3" stroke="#d1d5da" />
          <G transform={transform}>
            {[0, 0].map((_, j) => [0 + j, 1 + j, 2 + j, 3 + j, 4 + j].map((id, i) => (
              <Use
                href="#chair"
                x={String(dist * i)}
                y={String(dist * j)}
                fill={active[j][i] ? 'green' : 'black'}
                key={id}
              />
            )))}
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
