import React, { Component } from 'react';
import { Svg } from 'expo';
import PT from 'prop-types';
import * as api from '../api';
import Desk from './Desk';
import ArupLogo from './ArupLogo';
import Fridge from './Fridge';
import Sink from './Sink';


const {
  G, Rect, Text, Path, Polygon,
} = Svg;

const styles = {
  background: '#F2F2F2',
  room: '#FFF7EE',
  roomStroke: '#FDE6CE',
  deskBackground: '#F7F4F6',
  deskStroke: '#E3E2EB',
  doorBackground: 'rgba(0,0,0,0.1)',
  doorStroke: '#bdbdbd',
};

export default class SvgRoot extends Component {
  state = {
    desks: [],
  };

  componentDidMount() {
    api.getDesks(24).then(({ data: { listDesks } }) => this.seedDesk(listDesks.items));
    api.subscribeToDesks(this.updateDesk);
  }

  updateDesk = ({ value: { data } }) => {
    const { updatedSelectedDesk, currentDesk } = this.props;
    const { desks } = this.state;
    const updatedDesk = data.onUpdateDesk;
    if (updatedDesk.id === currentDesk.id) {
      updatedSelectedDesk({ ...desks[(updatedDesk.id - 1)], ...updatedDesk });
    }
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

  selectDesk = (id) => {
    const { updatedSelectedDesk } = this.props;
    const { desks } = this.state;
    updatedSelectedDesk(desks[id] === null ? null : desks[id]);
  };

  render() {
    const {
      transform, updatedSelectedDesk, map: { height }, currentDesk, currentDisplay,
    } = this.props;
    const { desks } = this.state;
    return (
      desks.length > 0 ? (
        <Svg width="100%" height={height}>
          <G>
            <Rect x="0" y="0" width="100%" height="100%" fill={styles.background} onPressIn={() => { updatedSelectedDesk(null); }} />
            <G transform={transform}>
              <G key="room" x="5" y="5">
                <Polygon points="-2,380 148,380 148,88 60,0 0,60" fill={styles.room} stroke={styles.roomStroke} strokeWidth="1" onPressIn={() => { updatedSelectedDesk(null); }} />
                <Path
                  rotation="90"
                  origin="275, 175"
                  d="M275,175 v-150 a150,150 0 0,0 -150,150 z"
                  x="-276.5"
                  y="106"
                  scale="0.1"
                  fill={styles.doorBackground}
                  stroke={styles.doorStroke}
                  strokeWidth="3"
                />
                <Fridge scale={`${1 / 16},${1 / 16}`} rotation="-90" y="99" />
                <Polygon points="0,60, 60,0 75,15 15,75" fill={styles.deskBackground} stroke={styles.deskStroke} />
                <Sink scale={`${1 / 32},${1 / 32}`} rotation="-45" y="26" x="40" />
                <G key="desks" x="10" y="150">
                  <G id="largeDeskOne" y="30">
                    <Desk id="0" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="180" />
                    <Desk id="1" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="180" x="20" />
                    <Desk id="2" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="180" x="40" />
                    <Desk id="3" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="180" x="60" />
                    <Desk id="4" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} y="35" />
                    <Desk id="5" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} y="35" x="20" />
                    <Desk id="6" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} y="35" x="40" />
                    <Desk id="7" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} y="35" x="60" />
                  </G>
                  <G id="largeDeskTwo" y="150">
                    <Desk id="8" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="180" />
                    <Desk id="9" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="180" x="20" />
                    <Desk id="10" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="180" x="40" />
                    <Desk id="11" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="180" x="60" />
                    <Desk id="12" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} y="35" />
                    <Desk id="13" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} y="35" x="20" />
                    <Desk id="14" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} y="35" x="40" />
                    <Desk id="15" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} y="35" x="60" />
                  </G>
                  <G id="smallDeskOne" x="100">
                    <Desk id="16" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="90" x="7.5" />
                    <Desk id="17" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="90" y="20" x="7.5" />
                  </G>
                  <G id="smallDeskTwo" x="100" y="60">
                    <Desk id="18" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="90" x="7.5" />
                    <Desk id="19" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="90" y="20" x="7.5" />
                  </G>
                  <G id="smallDeskThree" x="100" y="120">
                    <Desk id="20" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="90" x="7.5" />
                    <Desk id="21" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="90" y="20" x="7.5" />
                  </G>
                  <G id="smallDeskThree" x="100" y="180">
                    <Desk id="22" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="90" x="7.5" />
                    <Desk id="23" desks={desks} onPress={this.selectDesk} origin="10, 17.5" currentDesk={currentDesk} currentDisplay={currentDisplay} rotation="90" y="20" x="7.5" />
                  </G>
                </G>
              </G>
            </G>
            <G>
              <ArupLogo scale="0.5" y={height - 30} x="10" stroke="#000" />
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
  updatedSelectedDesk: PT.func.isRequired,
  map: PT.shape({ width: PT.number.isRequired, height: PT.number.isRequired }).isRequired,
  currentDesk: PT.shape({
    id: PT.string,
  }),
  currentDisplay: PT.string.isRequired,
};

SvgRoot.defaultProps = {
  transform: {
    scaleX: 0,
    scaleY: 0,
    translateX: 0,
    translateY: 0,
  },
  currentDesk: null,
};
