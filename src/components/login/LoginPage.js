import React from 'react';
import { connect } from 'react-redux';
// import { login } from '../../actions';
import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../../components/TopBar';
import FooterBar from "../../components/FooterBar";
import AppProvider from "../../provider/AppContext";
import { AppContext } from '../../provider/AppContext';
import { userActions } from '../../actions';
//import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
import '../css/guest.css';

class LoginPage extends React.Component {
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
        const { dispatch } = this.props;
        // if (username && password) {
        //     this.props.login({ 'payload': { username, password } })
        // }

        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn, type, message } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <AppProvider>
                <Paper style={{ padding: '5px' }} elevation={1} className="login_bg">
                    <AppContext.Consumer>
                        {(context) => (
                            <ButtonAppBar></ButtonAppBar>
                        )}
                    </AppContext.Consumer>
                    <div className="col-md-4 login_form " style={{ background: '#fff', margin: '0 auto' }}>
                        <p class="MuiTypography-root-74 MuiTypography-body1-83 main_title">Login</p>
                        <form name="form" onSubmit={this.handleSubmit}>

                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username"></label>
                                <input type="text" className="form-control" placeholder="Username/Email Address" name="username" value={username} onChange={this.handleChange} />
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
                            <div className="form-group text-center">
                                <button className="btn btn-primary reg_btn">SIGN IN</button>
                                {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }

                                <div>
                                    {submitted && type=='alert-danger' &&
                                        <div className="help-block">{message}</div>
                                    }
                                </div>
                                <div>
                                    <a className="click_signup_btn" href="/register">Don’t have an account? Click to sign up</a>
                                </div>

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
    const { loggingIn } = state.authentication;
    const { type, message } = state.alert;
    return {
        loggingIn, type, message
    };
}
const mapDispatchToProps = {
    // login: login.request
};
export default withTheme()(connect(mapStateToProps)(LoginPage)); 
