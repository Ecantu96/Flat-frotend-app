import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



import {register_user} from  '../actions/user';

import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../components/TopBar';
import FooterBar from "../components/FooterBar";
import AppProvider from "../provider/AppContext";
import { AppContext } from '../provider/AppContext';
//import {Welcome} from "../components/Welcome";
//import Button from '@material-ui/core/Button';
//import PropTypes from 'prop-types';
//import IconButton from '@material-ui/core/IconButton';
//import SignupProvider, { SignupContext } from '../provider/SignupContext';
//import  { user_register } from '../provider/user';


class allUser extends React.Component {
    

    render() {
        
        return (
		
          
         <AppProvider>
       
			  
            <Paper style={{padding:'5px'}} elevation={1} className="register_bg">
			 <AppContext.Consumer>
          {(context) => ( 
          <ButtonAppBar></ButtonAppBar>   
		  
		  )}
		  
		 
		  
		</AppContext.Consumer>
		
		  <AppContext.Consumer>
		
          {(context) => (<div style={{ color: "#fff", fontWeight: "bold", textAlign: "center", marginTop: "100px", fontSize: "50px" }}> 
		            {'Current User - ' +context.state.loggedInUser.username} 
			  </div>
          )}

		
          </AppContext.Consumer>
             
			 
			 
            </Paper>
			
			<FooterBar></FooterBar>
			
      	   </AppProvider>	
		
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.app;
    return {
        
        user,
		
    };
}
const mapDispatchToProps = {
    register_user:register_user.request
};

export default withTheme()( connect(mapStateToProps, mapDispatchToProps)(allUser)); 
