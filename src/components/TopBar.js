import React from 'react';
import {connect} from "react-redux";
import _ from 'lodash';
import login from "../components/login/LoginPage";
import register from "../components/login/RegisterPage";
import RelatorsRegsiter from "../components/login/RelatorsRegsiter";
//import RoommateProfile  from "../components/RoommateProfile";
import RoommateFinderResult from "../components/RoommateFinderResult";
import Neighborhoods from "../components/Neighborhoods";
import Listing from "../components/Listing";
import AppContainer from "../container/AppContainer";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppContext } from '../provider/AppContext'
import SignupSteps from './login/signup/SignupSteps';
import CardMedia from '@material-ui/core/CardMedia';
import logo from './images/logo.png';
import './css/header.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { authHeader } from '../_helpers';   

import DashboardProfile from "../components/DashboardProfile";


const ITEM_HEIGHT = 48;

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    maxWidth: 120,
  },
  media: {
    height: 42,
  },

};



class ButtonAppBar extends React.Component {
   constructor(props) {
		super(props);
		this.state = {
        open: false,
        anchorEl: null,
        error: null,
          Role: []
		};
	}
	

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };


  handleClose = value => {
    this.setState({ anchorEl: null });
    this.setState({ open: false });
  };

 
  componentDidMount() {
     
    let AuthToken = authHeader();
    var url = "https://nooklyn-flats-backend-apis.herokuapp.com/users/userRole";
    var bearer = AuthToken.Authorization;
    fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
        }
      }).then(response => response.json()).then(result => { 
          this.setState({
            Role: result
            
           })
       
        return result;
    })
    .catch(error => this.setState({
        isLoading: false,
        message: 'Something bad happened' + error
    }));
    
}


  render() {
    const { anchorEl, Role, User } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;

  function IsUsersRoles(state) {
        var isUserRole = Role.role;
        if(isUserRole == "User"){
          return "/Dashboard";
        }
        if (isUserRole == "Agent") {
          return "/AgentDashboard";
        }
          
    }
    
      
    return (

      <div className={classes.root}>



          <AppBar position="static" color="default">


          <Toolbar className="MuiToolbar-regular-43">

            <div className="logo">
              <Link to='/' component={AppContainer}>  <CardMedia
                className={classes.media}
                image={logo}
                title="Logo"
              /> </Link>
            </div>

            <div className="mobile_nav">
              <IconButton
                aria-label="More"
                aria-owns={open ? 'long-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200,
                  },
                }}
              >



                <MenuItem> <Link to='/Neighborhoods' component={Neighborhoods}>NEIGHBORHOODS</Link></MenuItem>
                <MenuItem> <Link to='/RoommateFinderResult' component={RoommateFinderResult}>ROOMMATES</Link></MenuItem>
                <MenuItem><Link to='/Listing' component={Listing}>LISTINGS</Link></MenuItem>
                <MenuItem><Link to='/RelatorsRegsiter' component={RelatorsRegsiter}>REALTORS</Link></MenuItem>

                <AppContext.Consumer>

                  {(context) => (<div className="mob">
                    <MenuItem><Button href="#">About</Button></MenuItem>
                    {context.state.loggedInUser !== undefined ? <div>{'Welcome ' + context.state.loggedInUser.username}
                      {<Button href="/login" onClick={() => { localStorage.removeItem('user') }} color="inherit">Logout</Button>}</div> :
                      <div>
                        <MenuItem> <Link to='/login' className="login_last" component={login}>Login</Link></MenuItem>
                        <MenuItem><Link to='/register' component={register}>Sign-up</Link></MenuItem></div>}</div>
                  )}
                </AppContext.Consumer>

              </Menu>
            </div>

            <div className="desktop_view">

              <Typography className={classes.grow}>


                <ul className={classes.menuButton} aria-label="Menu" className="main_menu" >
                  <li><Link to='/Neighborhoods' component={Neighborhoods}>NEIGHBORHOODS</Link></li>
                  <li><Link to='/RoommateFinderResult' component={RoommateFinderResult}>ROOMMATES</Link></li>
                  <li><Link to='/Listing' component={Listing}>LISTINGS</Link></li>
                  <li><Link to='/RelatorsRegsiter' component={RelatorsRegsiter}>REALTORS</Link></li>

                </ul>

              </Typography>

              <AppContext.Consumer>
             
                {(context) => (
                <div className="right_menu">
                 
					        <div className="abt">{context.state.loggedInUser !== undefined?<Button href={IsUsersRoles()}>{context.state.loggedInUser.username}</Button>:<Link to='/'>About</Link>}</div>
                    {context.state.loggedInUser !== undefined ? <div style={{ color: '#fff', fontWeight: "600" }}>
                    
                    {<a href="/login" onClick={() => { localStorage.removeItem('user') }} color="inherit">Logout</a>}</div>  :
                    <div className="log_sign">
                     
                      <Link to='/register' component={register}>Sign-up</Link>
                      <Link to='/login' className="login_last" component={login}>Login</Link>

                    </div>}</div>
                )}
              </AppContext.Consumer>

            </div>


          </Toolbar>
        </AppBar>
        <SignupSteps
          open={this.state.open}
          onClose={this.handleClose}
        />




      </div>

    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(ButtonAppBar));
