import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-elements';
import {
  LineChart, BarChart, PieChart, ProgressChart,
} from 'react-native-chart-kit';
import { View, Text, Dimensions } from 'react-native';
import PT from 'prop-types';
import * as api from '../api';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const chartConfig = {
  backgroundGradientFrom: '#ecf0f1',
  backgroundGradientTo: '#ecf0f1',
  color: () => 'rgba(0, 123, 195, 3)',
  strokeWidth: 5, // optional, default 3
};
export default class OccupancyChart extends Component {
  state = {
    desks: [],
    occ: [0, 1],
    temp: [1, 1],
    avTemp: 0,
    id: [1, 1],
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
    this.setState(({ desks }) => ({
      occ: [
        desks.map(ele => ele.isOccupied).filter(ele => ele).length,
        desks.map(ele => ele.isOccupied).length
          - desks.map(ele => ele.isOccupied).filter(ele => ele).length,
      ],
      temp: desks.map(ele => ele.temperature),
      avTemp: desks.map(ele => ele.temperature).reduce((acc, num) => acc + num) / desks.length,
      id: desks.map(ele => ele.id),
    }));
  };

  seedDesk = (desks) => {
    this.setState({
      desks: desks.sort((a, b) => Number(a.id) - Number(b.id)),
      occ: [
        desks.map(ele => ele.isOccupied).filter(ele => ele).length,
        desks.map(ele => ele.isOccupied).length
          - desks.map(ele => ele.isOccupied).filter(ele => ele).length,
      ],
      temp: desks.map(ele => ele.temperature),
      avTemp: desks.map(ele => ele.temperature).reduce((acc, num) => acc + num) / desks.length,
      id: desks.map(ele => ele.id.toString()),
    });
  };

  render() {
    const {
      occ, temp, avTemp, id,
    } = this.state;
    return (
      <ThemeProvider>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{flex:0.3}}></View>
          <View style={{ flex: 3 }}>
            <BarChart
              // style={graphStyle}
              data={{
                legendFontSize: 45,
                labels: ['Occupied Desks', 'Vancant Desks'],
                datasets: [
                  {
                    data: [occ[0], occ[1]],
                    // data: [avTemp],
                    strokeWidth: 5, // optional
                  },
                ],
              }}
              width={screenWidth * 1}
              fromZero="false"
              height={screenHeight * 0.8}
              chartConfig={chartConfig}
              backgroundColor="#ecf0f1"
              legendFontSize={20}
            />
          </View>
        </View>
        <View />
      </ThemeProvider>
    );
  }
}

OccupancyChart.propTypes = {
  transform: PT.shape({
    scaleX: PT.number,
    scaleY: PT.number,
    translateX: PT.number,
    translateY: PT.number,
  }),
};

OccupancyChart.defaultProps = {
  transform: {
    scaleX: 0,
    scaleY: 0,
    translateX: 0,
    translateY: 0,
  },
};
