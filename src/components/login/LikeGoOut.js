import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {login} from '../../actions/user'; 
import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../../components/TopBar';
import FooterBar from "../../components/FooterBar";
import AppProvider from "../../provider/AppContext";
import { AppContext } from '../../provider/AppContext';
//import Button from '@material-ui/core/Button';
import '../css/guest.css';

class LikeGoOut extends React.Component {
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
        const {user } = this.props;
		
        const { username, password, submitted } = this.state;
	
        return (
		
          
         <AppProvider>
       
			  
            <Paper style={{padding:'5px'}} elevation={1} className="lookingInroomate">
			 <AppContext.Consumer>
          {(context) => ( 
          <ButtonAppBar></ButtonAppBar>   
		  )}
		</AppContext.Consumer>
             
			<div className="col-md-4 login_form" style={{ background: '#fff', margin: '0 auto' }}>
                
				<div className="main_title">Likes to go out ?</div>
				
				<div className="type_list"> 
				<button data-toggle="tab" data-target="#page0" className="btn btn-default active btn-sm">Yes</button>
		        <button data-toggle="tab" data-target="#page1" className="btn btn-default  btn-sm">No</button>
				</div>
				<a href="/" className="prv_question" >Previous Question</a>
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
    login:login.request
};
export default withTheme()( connect(mapStateToProps,mapDispatchToProps)(LikeGoOut)); 
