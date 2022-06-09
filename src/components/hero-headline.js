import * as React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { jsx, css, keyframes } from '@emotion/react';


const typing = keyframes`typing {
  from {
    width: 0
  }
}`;

const blink = keyframes`{
  50% {
    border-color: transparent
  }
}`;


let theme = createTheme();
theme = responsiveFontSizes(theme);






export default function Headline(props) {


  return (
    <ThemeProvider theme={theme}>
      <Container
        css={css`
          animation: ${typing} 2s steps(22), ${blink} .5s step-end infinite alternate`
        }
        sx={{
          position: "relative",
          ml: 1,
          mr: 1,
          animation: `${typing} 2s steps(22), ${blink} .5s step-end infinite alternate`
        }}
        maxWidth="xs">

        <Box
        sx={{
          textTransform: 'uppercase',
          typography: 'subtitle2',
          letterSpacing: '2px',
          wordSpacing: '2px',
          lineHeight: 1.6,
          textAlign: 'left',
          fontWeight: 'bold',
          color: "white",
          overflowWrap: 'break-word',
        }}>
          <Box>
          Allow Me To&nbsp;
          <Box
          component="span"
          sx={{
            color: '#ffdc25',
          }}>
            Introduce&nbsp;
          </Box>
          Myself!
          </Box>
          I'm passionate about solving problems that impact&nbsp;
          <Box
          component="span"
          sx={{
            color: 'lightblue',
          }}>
          economic&nbsp;
          </Box>
          and&nbsp;
          <Box
          component="span"
          sx={{
            color: 'lightblue',
          }}>
          social&nbsp;
          </Box>
          well-being.
        </Box>
      </Container>

    </ThemeProvider>
  );
}
