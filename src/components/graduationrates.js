import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { VictoryChart, VictoryTheme, VictoryGroup, VictoryArea, VictoryScatter, VictoryLine, VictoryAxis, VictoryLabel, VictoryLegend } from 'victory';



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
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'rgba(236,239,241,1)',
      border: 'none',

    },
  },
});

class GraduationRates extends Component {

  render(){

    const { classes } = this.props;

    const axisData = [
      "\'06-\'07",
      "\'07-\'08",
      "\'08-\'09",
      "\'09-\'10",
      "\'10-\'11",
      "\'11-\'12",
      "\'12-\'13",
      "\'13-\'14",
      "\'14-\'15",
      "\'15-\'16",
      "\'16-\'17",
    ];

    return(
      <Fragment>
        <div className={classes.root}>

          <Typography variant="subtitle2" color='inherit' align='center' gutterBottom>
              Graduation Rates
          </Typography>

          <VictoryChart
          >
            <VictoryGroup
              colorScale="qualitative"
              vertical
              standalone={false}
              style={
                {
                  data: { width: 20 }, labels: { fontSize: 11 }
                }
              }
            >
              <VictoryArea
                data={
                  [
                    {x: "\'06-\'07", y: 51.4},
                    {x: "\'07-\'08", y: 53.6},
                    {x: "\'08-\'09", y: 59.7},
                    {x: "\'09-\'10", y: 70},
                    {x: "\'10-\'11", y: 67.5},
                    {x: "\'11-\'12", y: 60.3},
                    {x: "\'12-\'13", y: 68.9},
                    {x: "\'13-\'14", y: 85.7},
                    {x: "\'14-\'15", y: 82.1},
                    {x: "\'15-\'16", y: 85.9},
                    {x: "\'16-\'17", y: 89.6}
                  ]}
                interpolation="natural"
              />
              <VictoryArea
                data={
                  [
                    {x: "\'06-\'07", y: 49},
                    {x: "\'07-\'08", y: 52.3},
                    {x: "\'08-\'09", y: 46.2},
                    {x: "\'09-\'10", y: 48.3},
                    {x: "\'10-\'11", y: 54.6},
                    {x: "\'11-\'12", y: 57.5},
                    {x: "\'12-\'13", y: 56},
                    {x: "\'13-\'14", y: 47.6},
                    {x: "\'14-\'15", y: 47.8},
                    {x: "\'15-\'16", y: 38.5},
                    {x: "\'16-\'17", y: 50.4}
                  ]}
                  interpolation="natural"
              />
              <VictoryArea
                data={
                  [
                    {x: "\'06-\'07", y: 15.2},
                    {x: "\'07-\'08", y: 11.7},
                    {x: "\'08-\'09", y: 10.3},
                    {x: "\'09-\'10", y: 10.6},
                    {x: "\'10-\'11", y: 12.7},
                    {x: "\'11-\'12", y: 18.3},
                    {x: "\'12-\'13", y: 15.8},
                    {x: "\'13-\'14", y: 21.2},
                    {x: "\'14-\'15", y: 4.7},
                    {x: "\'15-\'16", y: 30.1},
                    {x: "\'16-\'17", y: 29.2}
                  ]}
                  interpolation="natural"
              />
              <VictoryArea
                data={
                  [
                    {x: "\'06-\'07", y: 11.6},
                    {x: "\'07-\'08", y: 17.7},
                    {x: "\'08-\'09", y: 19.6},
                    {x: "\'09-\'10", y: 18.3},
                    {x: "\'10-\'11", y: 18.1},
                    {x: "\'11-\'12", y: 19.3},
                    {x: "\'12-\'13", y: 21.1},
                    {x: "\'13-\'14", y: 23.6},
                    {x: "\'14-\'15", y: 26.1},
                    {x: "\'15-\'16", y: 26.2},
                    {x: "\'16-\'17", y: 21.2}
                  ]}
                  interpolation="natural"
              />
            </VictoryGroup>
            <VictoryLine
              style={{
                data: { stroke: "black", strokeWidth: .3 },
                labels: { angle: 0, fill: "grey", fontSize: 10 }
              }}
              labels={["First Year as Superintendent"]}
              labelComponent={<VictoryLabel y={59}/>}
              x={() => 7}
            />

            <VictoryAxis
              tickFormat={axisData}
              offsetY={30}
              style={{
                axisLabel: {fontSize: 12, padding: 30},
                tickLabels: {fontSize: 9, padding: 5}
              }}
              tickLabelComponent={<VictoryLabel textAnchor="start" />}
            />
            <VictoryAxis
              tickFormat={(t) => `${Math.round(t)}%`}
              dependentAxis
              offsetX={45}

            />
            <VictoryLegend x={40} y={15}
              colorScale="qualitative"
              orientation="horizontal"
              symbolSpacer={5}
              gutter={20}
              data={
                [
                  { name: "Graduation" },
                  { name: "% took SAT" },
                  { name: "% took ACT" },
                  { name: "% took AP" }
                ]
              }
            />

          </VictoryChart>
        </div>
      </Fragment>
    );
  }
}



GraduationRates.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(GraduationRates);
