import React, { Component } from 'react';
import { Svg } from 'expo';
import PT from 'prop-types';
import * as api from '../api';
import Desk from './Desk';

const {
  G, Rect, Text,
} = Svg;

export default class SvgRoot extends Component {
  state = {
    desks: [],
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

  showDeskInfo = id => null;

  render() {
    const { transform } = this.props;
    const { desks } = this.state;
    return (
      desks.length > 0 ? (
        <Svg width="100%" height="100%">
          <G>
            <Rect x="0" y="0" width="100%" height="100%" strokeWidth="3" stroke="#CCC" fill="rgba(40, 170, 225, 0.4)" />

            <G transform={transform}>
              <G id="room" x="5" y="5">
                <Rect width="140" height="230" x="-2" fill="#FFF" stroke="#999" strokeWidth="1" />
                <Rect width="140" height="230" x="-2" fill="rgba(40, 170, 225, 0.2)" stroke="#999" strokeWidth="1" />
                <G id="largeDeskOne" y="50">
                  <G key="desk0" origin="10, 17.5" rotation="180">
                    <Desk id="0" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk1" origin="10, 17.5" rotation="180" x="20">
                    <Desk id="1" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk2" origin="10, 17.5" rotation="180" x="40">
                    <Desk id="2" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk3" origin="10, 17.5" rotation="180" x="60">
                    <Desk id="3" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk4" origin="10, 17.5" y="35">
                    <Desk id="4" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk5" origin="10, 17.5" y="35" x="20">
                    <Desk id="5" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk6" origin="10, 17.5" y="35" x="40">
                    <Desk id="6" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk7" origin="10, 17.5" y="35" x="60">
                    <Desk id="7" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                </G>
                <G id="largeDeskTwo" y="140">
                  <G id="desk8" origin="10, 17.5" rotation="180">
                    <Desk id="8" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk9" origin="10, 17.5" rotation="180" x="20">
                    <Desk id="9" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk10" origin="10, 17.5" rotation="180" x="40">
                    <Desk id="10" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk11" origin="10, 17.5" rotation="180" x="60">
                    <Desk id="11" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk12" origin="10, 17.5" y="35">
                    <Desk id="12" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk13" origin="10, 17.5" y="35" x="20">
                    <Desk id="13" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk14" origin="10, 17.5" y="35" x="40">
                    <Desk id="14" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk15" origin="10, 17.5" y="35" x="60">
                    <Desk id="15" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                </G>
                <G id="smallDeskOne" x="100">
                  <G id="desk16" origin="10, 17.5" rotation="90" x="7.5">
                    <Desk id="16" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk17" origin="10, 17.5" rotation="90" y="20" x="7.5">
                    <Desk id="17" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                </G>
                <G id="smallDeskTwo" x="100" y="60">
                  <G id="desk18" origin="10, 17.5" rotation="90" x="7.5">
                    <Desk id="18" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk19" origin="10, 17.5" rotation="90" y="20" x="7.5">
                    <Desk id="19" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                </G>
                <G id="smallDeskThree" x="100" y="120">
                  <G id="desk20" origin="10, 17.5" rotation="90" x="7.5">
                    <Desk id="20" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk21" origin="10, 17.5" rotation="90" y="20" x="7.5">
                    <Desk id="21" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                </G>
                <G id="smallDeskThree" x="100" y="180">
                  <G id="desk22" origin="10, 17.5" rotation="90" x="7.5">
                    <Desk id="22" desks={desks} onPress={this.showDeskInfo} />
                  </G>
                  <G id="desk23" origin="10, 17.5" rotation="90" y="20" x="7.5">
                    <Desk id="23" desks={desks} onPress={this.showDeskInfo} />
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
