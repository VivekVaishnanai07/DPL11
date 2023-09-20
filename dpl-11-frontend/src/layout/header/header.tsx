import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import './header.css';
import { Fab } from '@mui/material';
import { capitalizeAndChangeColor } from '../../utils/util';

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let pathName = pathname.replace("/", "").toLocaleUpperCase()
  const getData: any = localStorage.getItem('isLogin')
  let user = JSON.parse(getData)
  let profileAvatar = capitalizeAndChangeColor(user.first_name, user.last_name)

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
  }

  const addForms = () => {
    if (pathname === "/teams") {
      navigate("/team/add-team")
    } else if (pathname === "/matches") {
      navigate("/match/add-match")
    } else {
      navigate("/user/add-user")
    }
  }

  return (
    <div className='header'>
      <div className='top-header'></div>
      <AppBar position='sticky' className='middle-header'>
        <Toolbar className='middle-header-container' style={{ paddingLeft: "0px !important" }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={require('../../assets/img/ipl-logo-new-old.png')} alt='dpl-11' style={{ height: "auto", width: "95px" }} />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon style={{ color: "white", height: 36, width: 36 }} />
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem>
                <Typography textAlign="center" onClick={() => {
                  navigate("/dashboard");
                  handleCloseNavMenu();
                }}>Dashboard</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" onClick={() => {
                  navigate("/matches");
                  handleCloseNavMenu();
                }}>Matches</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" onClick={() => {
                  navigate("/teams");
                  handleCloseNavMenu();
                }}>Teams</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" onClick={() => {
                  navigate("/users");
                  handleCloseNavMenu();
                }}>Users</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" onClick={() => {
                  navigate("/about");
                  handleCloseNavMenu();
                }}>About</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <img src={require('../../assets/img/ipl-logo-new-old.png')} alt='dpl-11' style={{ height: "50px", width: "100px" }} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "header-title active" : "header-title"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/matches"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "header-title active" : "header-title"
              }
            >
              Matches
            </NavLink>
            <NavLink
              to="/teams"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "header-title active" : "header-title"
              }
            >
              Teams
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "header-title active" : "header-title"
              }
            >
              Users
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "header-title active" : "header-title"
              }
            >
              About
            </NavLink>
          </Box>
          <Box sx={{ flexGrow: 0 }} className="avatar-box">
            <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
              <Avatar className='profileAvatar' sx={{ bgcolor: profileAvatar?.backgroundColor }}>
                {profileAvatar?.firstName}{profileAvatar?.lastName}
              </Avatar>
              <Typography className='avatar-title'>{user.first_name + " " + user.last_name}</Typography>
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={logout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <div className='bottom-header'>
        <div className='container'>
          <span className='font'>HOME</span>&nbsp;&nbsp; / &nbsp;&nbsp;<span className='font'>{pathName}</span>
        </div>
      </div>
      <div className='title-header'>
        <div className="title">{pathName}</div>
        {
          (pathname === "/teams" || pathname === "/matches" || pathname === "/users") && (
            <div className="add-icon-box">
              <Fab color="primary" aria-label="add" className='add-button'>
                <AddIcon onClick={addForms} />
              </Fab>
            </div>
          )
        }
      </div>
    </div>
  );
}
export default Header;
