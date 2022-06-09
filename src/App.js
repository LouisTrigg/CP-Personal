import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Routes from './routes.js';
import PropTypes from 'prop-types';


export default class App extends React.Component {

  render() {

    const theme = createMuiTheme({
      palette: {
        primary: {
        light: 'rgba(241, 239, 240, 1)',
        main: 'rgba(241, 239, 240, 1)',
        dark: 'rgba(241, 239, 240, 1)',
        },
        secondary: {
          light: 'rgba(194,146,73, .5)',
          main: '#E2B24F',
          main: '#AD562C',
          main: '#C29249',
          dark: 'rgba(241, 239, 240, 1)',
        },
        text: {
          primary: 'rgba(127,140,141 ,1)',
          primary:  'rgba(77, 83, 96, 1)',
          primary: '#272727',
          secondary: '#575757',

        }
      },
      overrides: {
        MuiToolbar: {
          root: {
            color: 'rgba(127,140,141 ,1)',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(241, 239, 240, 1)',
          },
        },
        MuiList: {
          backgroundColor: 'rgba(127,140,141 ,1)'
        },
        MuiListItem: {
          marginRight: 'center',
          marginLeft: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(127,140,141 ,1)'
        },
        MuiDialogContentText: {
          textIndent: '50px',
        },
        MuiAppBar: {
          backgroundColor: 'rgba(230,213,193, 1)',
        },
        MuiButton: {
          root: {
            background: "rgba(241, 239, 240, 1)",
            color: "#DEAC4A",
          }
        }
      },
    });

    return (
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
