import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '../components/app-bar.js';
import Slide from '@mui/material/Slide';
import Toolbar from '../components/toolbar.js';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';


const pages = [
  {id: 1, title: 'Life & Times', url: '/life'},
  {id: 2, title: 'From The Desk', url: "/desk"},
  {id: 3, title: 'Partner With Cheryl', url: "/partner"},
];


const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};




function HideOnScroll(props) {

  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 150,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function AppAppBar(props) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };




  return (
    <div>
      <CssBaseline />
        <AppBar position="relative" color="transparent">
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex', color: 'common.white' } }}
              >
                Dr. Cheryl Pruitt
              </Typography>


              <Typography
                variant="subtitle2"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                  letterSpacing: '2px',
                  textTransform: 'capitalize',
                  fontWeight: 600,
                 }}
              >
                Welcome!
              </Typography>

              {/*<Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  PaperProps={{
                  style: {
                       width: "100%",
                       square: true,
                       elevation: 0,
                       variant: 'outlined'
                     }
                   }}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <Box>
                      <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                        <Link
                          key={page.id}
                          underline="none"
                          href={page.url}
                          color="#000"
                          variant="h6"
                          underline="none"
                          sx={{ my: 2, display: 'block', fontSize: 24 }}
                        >

                        <Typography textAlign="center" sx={{color: 'black'}}>{page.title}</Typography>
                        </Link>
                      </MenuItem>
                      <Divider variant="middle" />
                    </Box>
                  ))}
                </Menu>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'grid' }, gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {pages.map((page) => (
                  <Box sx={{ justifyContent: "space-around"}}>
                  <Link
                    key={page.id}
                    underline="none"
                    href={page.url}
                    color="inherit"
                    variant="subtitle2"
                    underline="none"
                    sx={{ my: 2, color: 'white', display: "inline-block", fontSize: 24 }}
                  >
                    {page.title}
                  </Link>
                  </Box>
                ))}
              </Box>*/}
            </Toolbar>
          </Container>
        </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
