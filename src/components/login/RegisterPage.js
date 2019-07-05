import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {register_user} from  '../../actions/user';
import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../../components/TopBar';
import FooterBar from "../../components/FooterBar";
import AppProvider from "../../provider/AppContext";
import { AppContext } from '../../provider/AppContext';
//import {Welcome} from "../../components/Welcome";
//import Button from '@material-ui/core/Button';
//import PropTypes from 'prop-types';
//import IconButton from '@material-ui/core/IconButton';
//import SignupProvider, { SignupContext } from '../provider/SignupContext';
//import  { user_register } from '../provider/user';
import '../css/guest.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
                username: '',
                password: '',
				questionsNecessary: '',
                interestedRoommate: '',
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
       const { username, password, questionsNecessary, interestedRoommate } = this.state;
        //const { dispatch } = this.props;
        if ( username && password && questionsNecessary && interestedRoommate ) {
            //dispatch(register_user.register(user));
			this.props.register_user({'payload':{username, password, questionsNecessary, interestedRoommate}})
        }
    }

    render() {
        const { user } = this.props;
		
       const { username, password, questionsNecessary, interestedRoommate, submitted } = this.state;
	
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
                <form name="form" onSubmit={this.handleSubmit}>
				
				    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username"></label>
                        <input type="text" className="form-control"  placeholder="Username/Email Address" name="username" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
					
					<div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password"></label>
                        <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
					
					<div className={'form-group' + (submitted && !questionsNecessary ? ' has-error' : '')}>
                        <label htmlFor="questionsNecessary"></label>
                        <input type="text" className="form-control" placeholder="Lots of questions that are necessary" name="questionsNecessary" value={questionsNecessary} onChange={this.handleChange} />
                        {submitted && !questionsNecessary &&
                            <div className="help-block">Questions is required</div>
                        }
                    </div>
                   
                    					
					<div className={'form-group' + (submitted && !interestedRoommate ? ' has-error' : '')}>
                        <label htmlFor="interestedRoommate"></label>
                        <input type="text" className="form-control" placeholder="Are you interested in a roommate" name="interestedRoommate" value={interestedRoommate} onChange={this.handleChange} />
                        {submitted && !interestedRoommate &&
                            <div className="help-block">Interested is required</div>
                        }
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
    const { user } = state.app;
    return {
        
        user,
		
    };
}
const mapDispatchToProps = {
    register_user:register_user.request
};

export default withTheme()( connect(mapStateToProps, mapDispatchToProps)(RegisterPage)); 
