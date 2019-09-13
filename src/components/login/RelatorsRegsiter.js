import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import {register_user} from  '../../actions/user';
import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../../components/TopBar';
import FooterBar from "../../components/FooterBar";
import AppProvider from "../../provider/AppContext";
import { AppContext } from '../../provider/AppContext';
import { userActions } from '../../actions';
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
			licenseNumber: '',
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
        const { username, password, licenseNumber } = this.state;
        const { dispatch } = this.props;

        if (username && password) {
            let Role = 'Agent'
            let DOB = '01-05-1990'
            let gender = 'male'
            let user = {
                username, password,  Role, DOB, gender, licenseNumber
            }
			
            dispatch(userActions.register(user));
        }
    }

    render() {
		
        const { registering, type, message } = this.props;
        const { username, password, licenseNumber, submitted } = this.state;

        return (
            <AppProvider>
                <Paper style={{ padding: '5px' }} elevation={1} className="register_bg">
                    <AppContext.Consumer>
                        {(context) => (
                            <ButtonAppBar></ButtonAppBar>
                        )}
                    </AppContext.Consumer>

                    <div className="col-md-offset-4 col-md-4 reg_form " style={{ background: '#fff' }}>

                        <div className="main_title">CREATE ACCOUNT</div>
                        <h3>or sign in with Facebook</h3>
                        <form name="form" onSubmit={this.handleSubmit}>

                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username"></label>
                                <input type="text" className="form-control" placeholder="Username/Email Address" name="username" name="username" value={username} onChange={this.handleChange} />
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
							
						<div className={'form-group' + (submitted && !licenseNumber ? ' has-error' : '')}>
                        <label htmlFor="licenseNumber"></label>
                        <input type="text" className="form-control" placeholder="License Number" name="licenseNumber" value={licenseNumber} onChange={this.handleChange} />
                        {submitted && !licenseNumber &&
                            <div className="help-block">LicenseNumber is required</div>
                        }
                    </div>

                                                      
                            <div className="form-group text-center">
                                <button className="btn btn-primary reg_btn">Create Account</button>

                            </div>

                            {registering &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                            <div>
                                {submitted && type == 'alert-danger' &&
                                    <div className="help-block">{message}</div>
                                }
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
    const { registering } = state.registration;
    const { type, message } = state.alert;
    return {
        registering, type, message

    };
}
const mapDispatchToProps = {
    // register_user:register_user.request
};

export default withTheme()(connect(mapStateToProps)(RegisterPage)); 
