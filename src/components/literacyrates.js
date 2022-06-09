import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { VictoryStack, VictoryBar, VictoryScatter, VictoryLine, VictoryAxis, VictoryLabel, VictoryLegend, VictoryChart } from 'victory';



const styles = theme => ({
  root: {
    position: 'relative',
    margin: 0,
    padding: '7px',
    backgroundColor: 'rgba(236,239,241,1)',
    color: 'grey',
    borderRadius: '2px',
  },
});

class LiteracyRates extends Component {

  render(){

    const { classes } = this.props;

    const districtData = [
      {x:'\'11-\'12', y: 69.7},
      {x:'\'12-\'13', y: 65.8},
      {x:'\'13-\'14', y: 77},
      {x:'\'14-\'15', y: 84},
      {x:'\'15-\'16', y: 72.2},
      {x:'\'16-\'17', y: 73.9},
      {x:'\'17-\'18', y: 60.2},
    ];

    const stateData = [
      {x:'\'11-\'12', y: 87.2},
      {x:'\'12-\'13', y: 91.4},
      {x:'\'13-\'14', y: 91.1},
      {x:'\'14-\'15', y: 91.3},
      {x:'\'15-\'16', y: 84},
      {x:'\'16-\'17', y: 89.5},
      {x:'\'17-\'18', y: 87.1},
    ];

    const axisData = [
      "\'11 - \'12",
      "\'12 - \'13",
      "\'13 - \'14",
      "\'14 - \'15",
      "\'15 - \'16",
      "\'16 - \'17",
      "\'17 - \'18"
    ];


    return(
      <Fragment>
        <div className={classes.root}>
          <Typography variant="subtitle2" color='inherit' align='center' gutterBottom>
              3rd Grade Literacy Rates
          </Typography>
          <VictoryChart
          >
            <VictoryStack
              horizontal
              standalone={false}
              domain={{ x: [-100, 100] }}
              style={{ data: { width: 20 }, labels: { fontSize: 11 } }}
            >
              <VictoryBar
                style={{ data: { fill: "tomato" }, labels: {fill: "white"} }}
                data={stateData}
                y={(data) => (-Math.abs(data.y))}
                labels={(data) => (`${Math.abs(data.y)}%`)}
                labelComponent={
                  <VictoryLabel
                    verticalAnchor="middle"
                    dx={40}
                  />
                }
              />
              <VictoryBar
                style={{ data: { fill: "orange" }, labels: {fill: "white"} }}
                data={districtData}
                labels={(data) => (`${Math.abs(data.y)}%`)}
                labelComponent={
                  <VictoryLabel
                    verticalAnchor="middle"
                    dx={-40}
                  />
                }
              />
            </VictoryStack>
            <VictoryLine
              horizontal
              style={{
                data: { stroke: "black", strokeWidth: .3 },
                labels: { angle: 0, fill: "grey", fontSize: 10 }
              }}
              labels={["My First Year"]}
              labelComponent={<VictoryLabel x={372} y={225}/>}
              y={() => 1.5}
            />
            <VictoryLine
              horizontal
              style={{
                data: { stroke: "black", strokeWidth: .3 },
                labels: { angle: 0, fill: "grey", fontSize: 10 }
              }}
              labels={["State Takeover"]}
              labelComponent={<VictoryLabel x={370} y={60}/>}
              y={() => 6.5}
            />

            <VictoryAxis dependentAxis
              style={{
                axis: { stroke: "transparent" },
                ticks: { stroke: "transparent" },
                tickLabels: { fontSize: 11, fill: "black" },
                textAnchor: "middle",
              }}
              /*
                Use a custom tickLabelComponent with
                an absolutely positioned x value to position
                your tick labels in the center of the chart. The correct
                y values are still provided by VictoryAxis for each tick
              */
              tickLabelComponent={<VictoryLabel x={200} verticalAnchor="middle" textAnchor="middle"/>}
              tickValues={stateData.map((point) => point.x)}
            />
            <VictoryLegend
              x={130} y={15}
              colorScale={["tomato", "orange"]}
              orientation="horizontal"
              symbolSpacer={5}
              gutter={20}
              data={
                [
                  { name: "State Average" },
                  { name: "GCSC" }
                ]
              }
            />
            </VictoryChart>
        </div>
      </Fragment>
    );
  }
}

LiteracyRates.propTypes = {
  classes: PropTypes.object.isRequired,

  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(LiteracyRates);
