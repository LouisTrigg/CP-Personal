import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: "64px",
  [theme.breakpoints.up('md')]: {
    height: "7.187rem",
  },
}));

export default Toolbar;
