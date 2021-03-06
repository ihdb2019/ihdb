import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width:'100%',
    height:"25px"
    
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  }
}));
const NavBar=(props)=>{

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
      
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  var isLogin = (localStorage.getItem("isLogin") == 'true');

  return (
    
    <div className={classes.root} >
      
      <AppBar style={{backgroundColor: '#F76C6C',width:'100%'}} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {localStorage.getItem("audiophilemaster")&&
        <a href="/adminpage">adminpage</a>
      }
        <a href="/listnews">ListNews</a>
        <a href="/listheadphone">ListHeadphone</a>
        {isLogin && <a href='/findforme'>FindForMe</a>}
        {!isLogin&&
        <a href="/loginpage">loginpage</a>
      }
      {!isLogin&&
        <a href="/registerpage">registerpage</a>
      } 
      


    

          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
          {isLogin&& (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                
                <MenuItem onClick={handleClose}>  <a href="/myprofile">profile</a></MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;