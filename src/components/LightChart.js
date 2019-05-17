import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { View, Text, Dimensions } from 'react-native';
import PT from 'prop-types';
import * as api from '../api';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientTo: '#fff',
  color: (opacity = 3) => 'rgba(50, 145, 155)',
  strokeWidth: 1, // optional, default 3
};
export default class LightChart extends Component {
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
        desks.map(ele => ele.light).filter(ele => ele).length,
        desks.map(ele => ele.light).length - desks.map(ele => ele.light).filter(ele => ele).length,
      ],
      temp: desks.map(ele => ele.temperature),
      avTemp: desks.map(ele => ele.temperature).reduce((acc, num) => acc + num) / desks.length,
      id: desks.map(ele => ele.id),
    }));
  };

  seedDesk = (desks) => {
    console.log(desks);
    this.setState({
      desks: desks.sort((a, b) => Number(a.id) - Number(b.id)),
      occ: [
        desks.map(ele => ele.light).filter(ele => ele).length,
        desks.map(ele => ele.light).length - desks.map(ele => ele.light).filter(ele => ele).length,
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
                labels: ['Brighter Desks', 'Darker Desks'],
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

LightChart.propTypes = {
  transform: PT.shape({
    scaleX: PT.number,
    scaleY: PT.number,
    translateX: PT.number,
    translateY: PT.number,
  }),
};

LightChart.defaultProps = {
  transform: {
    scaleX: 0,
    scaleY: 0,
    translateX: 0,
    translateY: 0,
  },
};
