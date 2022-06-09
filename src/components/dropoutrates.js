import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import { VictoryGroup, VictoryLine, VictoryScatter, VictoryAxis, VictoryLabel, VictoryChart, VictoryTheme, VictoryLegend } from 'victory';



const styles = theme => ({
  root: {
    position: 'relative',
    margin: 0,
    padding: '7px',
    backgroundColor: 'white',
    backgroundColor: 'rgba(236,239,241,1)',
    border: '1px solid lightgrey',
    border: 'none',
    color: 'grey',
    borderRadius: '2px',
  },
});

class DropoutRates extends Component {

  render() {

    const { classes } = this.props;

    const axisData = [
      "\'08-\'09",
      "\'10-\'11",
      "\'12-\'13",
      "\'14-\'15",
    ];


    return(
      <Fragment>
        <div className={classes.root}>

          <Typography variant="subtitle2" color='inherit' align='center' gutterBottom>
              Dropouts & Suspensions
          </Typography>

          <VictoryChart
          >
            <VictoryGroup
              colorScale={["tomato", "orange"]}
            >
              <VictoryLine
                size={7}
                data={
                  [
                    { x: '\'08-\'09', y: 13.2},
                    { x: '\'10-\'11', y: 9.3},
                    { x: '\'12-\'13', y: 7},
                    { x: '\'14-\'15', y: 8.5}
                  ]
                }
                y0={0}
                interpolation="natural"
              />
              <VictoryLine
                size={7}
                data={
                  [
                    { x: '\'08-\'09', y: 1.96 },
                    { x: '\'10-\'11', y: .95 },
                    { x: '\'12-\'13', y: .58 },
                    { x: '\'14-\'15', y: .9 }
                  ]
                }
                interpolation="natural"
              />
              <VictoryScatter
              colorScale={["tomato"]}
              size={3}
              data={
                [
                  { x: '\'08-\'09', y: 13.2},
                  { x: '\'10-\'11', y: 9.3},
                  { x: '\'12-\'13', y: 7},
                  { x: '\'14-\'15', y: 8.5}
                ]
              }
              />
              <VictoryScatter
              colorScale={["orange"]}
              size={3}
              data={
                [
                  { x: '\'08-\'09', y: 1.96 },
                  { x: '\'10-\'11', y: .95 },
                  { x: '\'12-\'13', y: .58 },
                  { x: '\'14-\'15', y: .9 }
                ]
              }
              />
            </VictoryGroup>
            <VictoryLine
              style={{
                data: { stroke: "black", strokeWidth: .3 },
                labels: { angle: 0, fill: "grey", fontSize: 10 }
              }}
              labels={["First Year as Superintendent"]}
              labelComponent={<VictoryLabel y={75}/>}
              x={() => 3}
            />
            <VictoryAxis
              tickFormat={axisData}
              offsetY={30}
              tickLabelComponent={<VictoryLabel textAnchor="start" />}
            />
            <VictoryAxis
              tickFormat={(t) => `${Math.round(t)}%`}
              dependentAxis
              offsetX={45}
            />
            <VictoryLegend x={100} y={15}
              colorScale={["tomato", "orange", "gold"]}
              orientation="horizontal"
              symbolSpacer={5}
              gutter={20}
              data={
                [
                  { name: "Dropouts" },
                  { name: "Out of School Suspensions" },
                ]
              }
            />
          </VictoryChart>
        </div>
      </Fragment>
    );
  }
}

DropoutRates.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, {withTheme: true})(DropoutRates);
