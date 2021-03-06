import React, { Component } from "react";
// import { register_user } from '../actions/user';
import { withRouter } from "react-router";
import { connect } from "react-redux";

import RegisterPage from "../components/login/RegisterPage";

//import { LoginPage } from "../components/login/signup/LoginPage";
import { toast } from "react-toastify";


export const SignupContext = React.createContext();

// Then create a provider Component 
class SignupProvider extends Component {
    state = {

        user: {
            username: '',
			password: '',
			questionsNecessary: '',
			interestedRoommate: '',
           
        }, submitted: false,
        steps:[{
            label: 'Register',
          }
		  	  
		  ],
          activeStep: 0,

    }


    render() {
        return (
            <SignupContext.Provider value={{
                state: this.state,
                register: (event) => {
                    event.preventDefault();
                    this.setState({ submitted: true });
                    const { user } = this.state;
                    if ( user.username && user.password && user.questionsNecessary && user.interestedRoommate ) {

                        this.props.register({ 'payload': this.state.user }).then((response) => {
                            if (response.success === true) {
                                //this.props.onDone();
                                this.setState({ activeStep:1 });
                            }else{
                                toast(this.props.message)
                            }
                        }).catch((e) => {
                            // payload == e
                            console.log('Oops!', e)
                            toast(this.props.message)
                        });
                    }
                },
                handleChange: (event) => {
                    event.preventDefault()

                    const { name, value } = event.target;
                    const { user } = this.state;
                    this.setState({
                        user: {
                            ...user,
                            [name]: value
                        }
                       
                    });
                },
                handleNext : () => {
                    this.setState(prevState => ({
                        activeStep: prevState.activeStep + 1,
                    }));
                  },
                handleBack : () => {
                    this.setState(prevState => ({
                      activeStep: prevState.activeStep - 1,
                    }));
                  },
                  GetStep : () => {
                      switch(this.state.activeStep){
						  case 0: return <RegisterPage ></RegisterPage>;
                          
                          
                      }
                    }  
            }}>
                {this.props.children}
            
            </SignupContext.Provider>
        )
    }
}

const mapStateToProps = state => ({
    // loggedInUser: state.app.user,
    // message:state.app.message
});
const mapDispatchToProps = {
    // register: register_user.request
};
SignupProvider = withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupProvider));

export default SignupProvider