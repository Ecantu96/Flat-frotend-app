import React, { Component } from "react";
import { register_user } from '../actions/user';
import { withRouter } from "react-router";
import { connect } from "react-redux";
//import RegisterPage from "../components/login/RegisterPage";
import LookingRoommate from "../components/login/signup/LookingRoommate";
import LookingInRoommate from "../components/login/signup/LookingInRoommate";
import QuestionsDoyouDrink from "../components/login/signup/QuestionsDoyouDrink";
import DoYouSmoke from "../components/login/signup/DoYouSmoke";
import LikesToGoOut from "../components/login/signup/LikesToGoOut";
import WorkHours from "../components/login/signup/WorkHours";
import BedTime from "../components/login/signup/BedTime";
import RelationshipStatus from "../components/login/signup/RelationshipStatus";
//import { LoginPage } from "../components/login/signup/LoginPage";
import { toast } from "react-toastify";


export const SignupContext = React.createContext();

// Then create a provider Component 
class SignupProvider extends Component {
    state = {

        user: {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            apartmentChoice: '',
            budget: '',
            location: '',
            userPersonalType: '',

        }, submitted: false,
        steps:[
		  
          {
            label: "Tell me about you, what describes you best?",
          },
          {
            label: 'Tell me about what you are looking for in a roommate?',
          },          
		  
		  {
            label: 'Do you drink',
          },
		  
		   {
            label: 'Do you smoke',
          },
		  
		   {
            label: 'Likes to go out',
          },
		  
		   {
            label: 'Work hours',
          },
		  {
            label: 'Bed Time',
          },
		  {
            label: 'Relationship Status',
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
                    if (user.firstName && user.lastName && user.username && user.password) {

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
						  //case 0: return <RegisterPage ></RegisterPage>;
                          case 0: return <LookingRoommate></LookingRoommate>;
                          case 1: return <LookingInRoommate></LookingInRoommate>;
                          case 2: return <QuestionsDoyouDrink></QuestionsDoyouDrink>;
                          case 3: return <DoYouSmoke></DoYouSmoke>;
                          case 4: return <LikesToGoOut></LikesToGoOut>;
                          case 5: return <WorkHours></WorkHours>;
                          case 6: return <BedTime></BedTime>;
                          case 7: return <RelationshipStatus></RelationshipStatus>;
                          
                      }
                    }  
            }}>
                {this.props.children}
            
            </SignupContext.Provider>
        )
    }
}

const mapStateToProps = state => ({
    loggedInUser: state.app.user,
    message:state.app.message
});
const mapDispatchToProps = {
    register: register_user.request
};
SignupProvider = withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupProvider));

export default SignupProvider