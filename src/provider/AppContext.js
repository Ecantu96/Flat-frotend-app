import React, { Component } from "react";
import { get_user_by_email } from '../actions/user';
import { withRouter } from "react-router";
import { connect } from "react-redux";

//import '../resources/css/index.css';

export const AppContext = React.createContext();

// Then create a provider Component
class AppProvider extends Component {
    state = {
        loggedInUser: null,
        isLoading: true,
    }
  
    componentDidMount = () => {
        // if(localStorage.getItem("kc_username")!==""){
       // this.props.getUserByEmail({ 'payload': localStorage.getItem("email") });
        // }
    }
    static getDerivedStateFromProps(props, state) {
        
            if (props.loggedInUser !== state.loggedInUser) {
                
                return {
                    loggedInUser: props.loggedInUser,
                    isLoading: false

                };
            }
        return null;
    }
    render() {
        return (
            <AppContext.Provider value={{
                state: this.state
             }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

const mapStateToProps = state => ({
    loggedInUser:state.app.user
});

AppProvider = withRouter(connect(mapStateToProps, {
   // getUserByEmail: get_user_by_email.request
 
})(AppProvider));

export default AppProvider