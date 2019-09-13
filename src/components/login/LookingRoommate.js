import React from 'react';
//import { Link } from 'react-router-dom';
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

class LookingRoommate extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
      //  this.props.dispatch(userActions.logout());

        this.state = {
            data: this.props.location.state.data,
            username: '',
            password: '',
            submitted: false,
            LookingRoommate:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log('data===LookingRoommate' + JSON.stringify(this.state.data))
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


    updateState = (data) => {
        this.setState({
            LookingRoommate: data
        })
    }

    goToNext = () => {
        const { data, LookingRoommate } = this.state;
        let tempData = data;
        tempData.questions.LookingRoommate = LookingRoommate;
        this.props.history.push('LookingInRoommates', { data: tempData });
    }

    render() {
        const { user } = this.props;
		
        const { username, password, submitted } = this.state;
	
        return (
		
          
         <AppProvider>
       
			  
            <Paper style={{padding:'5px'}} elevation={1} className="lookingroomate">
			 <AppContext.Consumer>
          {(context) => ( 
          <ButtonAppBar></ButtonAppBar>   
		  )}
		</AppContext.Consumer>
             
        <div className="col-md-offset-4 col-md-4 reg_form" style={{ background: '#fff' }}>
                
				<div className="main_title">Tell me about you, what describes you best?</div>
				
				<div className="type_list">
				<button onClick={() => this.updateState('Quiet')} data-toggle="tab" data-target="#page0" className="btn btn-default btn-sm">QUIET</button>
				<button onClick={() => this.updateState('Loud')} data-toggle="tab" data-target="#page1" className="btn btn-default btn-sm">LOUD</button>
				<button onClick={() => this.updateState('Tidy')} data-toggle="tab" data-target="#page2" className="btn btn-default  btn-sm">TIDY</button>
				<button onClick={() => this.updateState('Messy')} data-toggle="tab" data-target="#page3" className="btn btn-default btn-sm">MESSY</button>
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
export default withTheme()( connect(mapStateToProps,mapDispatchToProps)(LookingRoommate)); 
