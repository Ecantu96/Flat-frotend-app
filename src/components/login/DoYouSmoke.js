import React from 'react';
//import { 	 } from 'react-router-dom';
import { connect } from 'react-redux';
// import {login} from '../../actions/user'; 
import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../../components/TopBar';
import FooterBar from "../../components/FooterBar";
import AppProvider from "../../provider/AppContext";
import { AppContext } from '../../provider/AppContext';
//import Button from '@material-ui/core/Button';
import '../css/guest.css';

class DoYouSmoke extends React.Component {
    constructor(props) {
        super(props);
 
        // reset login status
      //  this.props.dispatch(userActions.logout());

        this.state = {
            data: this.props.location.state.data,
            username: '',
            password: '',
            submitted: false,
            DoYouSmoke:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log('data===DoYouSmoke' + JSON.stringify(this.state.data))
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    updateState = (data) => {
        this.setState({
            DoYouSmoke: data
        })
    }

    goToNext = () => {
        const { data, DoYouSmoke } = this.state;
        let tempData = data;
        tempData.questions.DoYouSmoke = DoYouSmoke;
        this.props.history.push('/LikeGoOut', { data: tempData });
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
        const { user } = this.props;
		
        const { username, password, submitted } = this.state;
	 
        return (
		
          
         <AppProvider>
       
			  
            <Paper style={{padding:'5px'}} elevation={1} className="lookingInroomate">
			 <AppContext.Consumer>
          {(context) => ( 
          <ButtonAppBar></ButtonAppBar>   
		  )}
		</AppContext.Consumer>
             
        <div className="col-md-offset-4 col-md-4 reg_form" style={{ background: '#fff' }}>
                
				<div className="main_title">Do you smoke ?</div>
				
				<div className="type_list"> 
				<button onClick={() => this.updateState('true')} data-toggle="tab" data-target="#page0" className="btn btn-default  btn-sm">Yes</button>
		        <button onClick={() => this.updateState('false')} data-toggle="tab" data-target="#page1" className="btn btn-default  btn-sm">No</button>
				</div>
				<a href="/" className="prv_question" >Previous Question</a>
                <button onClick={() => this.goToNext()} className="btn btn-default btn-sm">Next Question</button>
            </div>
			 
            </Paper>
			
			<FooterBar></FooterBar>
			
      	   </AppProvider>	
		
        );
    }
}

function mapStateToProps(state) {
    // const { user } = state.app;
    return {
        
        // user,
		
    };
}
const mapDispatchToProps = {
    // login:login.request
};
export default withTheme()( connect(mapStateToProps,mapDispatchToProps)(DoYouSmoke)); 
