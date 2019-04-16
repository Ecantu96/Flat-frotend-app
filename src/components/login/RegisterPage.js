import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {login} from '../../actions/user'; 
import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../../components/TopBar';
import FooterBar from "../../components/FooterBar";
import AppProvider from "../../provider/AppContext";
import { AppContext } from '../../provider/AppContext';
import {Welcome} from "../../components/Welcome";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
//import SignupProvider, { SignupContext } from '../provider/SignupContext';
import './login.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
      //  this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login({'payload':{username, password}})
        }
    }

    render() {
        const {classes, fetching, user } = this.props;
		
        const { username, password, submitted } = this.state;
	
        return (
		
          
         <AppProvider>
       
			  
            <Paper style={{padding:'5px'}} elevation={1} className="register_bg">
			 <AppContext.Consumer>
          {(context) => ( 
          <ButtonAppBar></ButtonAppBar>   
		  )}
		</AppContext.Consumer>
             
			 <div className="col-md-4 reg_form " style={{ background: '#fff', margin: '0 auto' }}>
                
				<div className="main_title">CREATE ACCOUNT</div>
				<h3>or sign in with Facebook</h3>
                <form name="form">
                    
                    <div className="form-group" >
                        <label htmlFor="username"></label>
                        <input type="text" className="form-control" placeholder="Username/Email Address" name="username"  />
                            
                    </div>
                    <div >
                        <label htmlFor="password"></label>
                        <input type="password" className="form-control" placeholder="Password" name="password"  />
                                           
                    </div>
					
					<div className="form-group">
                        <label htmlFor="firstName"></label>
                        <input type="text" className="form-control" placeholder="Lots of questions that are necessary" name="firstName"  />
                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName"></label>
                        <input type="text" className="form-control" placeholder="Are you interested in a roommate" name="lastName" />
                        
                           
                    </div>
					
                    <div  className="form-group text-center">
                        <button  className="btn btn-primary reg_btn">Create Account</button>
                       
                    </div>
                </form>
            </div>
			 
            </Paper>
			
			<FooterBar></FooterBar>
			
      	   </AppProvider>	
		
        );
    }
}

function mapStateToProps(state) {
    const { fetching,user } = state.app;
    return {
        fetching,
        user,
		
    };
}
const mapDispatchToProps = {
    login:login.request
};
export default withTheme()( connect(mapStateToProps,mapDispatchToProps)(RegisterPage)); 
