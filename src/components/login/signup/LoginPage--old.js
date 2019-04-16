import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../actions/user'; 


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.username && user.password) {
            this.props.register({'payload':user}).then((response) => {
                if(response.success ===true){
                    this.props.onDone();
                }
              }).catch((e) => {
                // payload == e
                console.log('Oops!', e)
              });
              
              
           
        }
    }

    render() {
        const { login  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-12 reg_form">
                
				
                <form name="form" onSubmit={this.handleSubmit}>
                 
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username"></label>
                        <input type="text" className="form-control" placeholder="Username/Email Address" name="username" value={user.username} onChange={this.handleChange} />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password"></label>
                        <input type="password" className="form-control" placeholder="Password" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-primary reg_btn">SIGN IN</button>
						<div>
						<a className="click_signup_btn" href="#">Don’t have an account? Click to sign up</a>
						</div>
                  
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { fetching } = state.app;
    return {
        login:fetching
    };
}   
const mapDispatchToProps = {
    login:login.request
};
const connectedRegisterPage = connect(mapStateToProps,mapDispatchToProps)(LoginPage);
export { connectedRegisterPage as LoginPage };