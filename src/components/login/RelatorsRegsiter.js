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
//import Button from '@material-ui/core/Button';
import '../css/guest.css';

class RelatorsRegsiter extends React.Component {
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
        //const { dispatch } = this.props;
        if ( username && password && licenseNumber ) {
            //dispatch(register_user.register(user));
			this.props.register_user({'payload':{username, password, licenseNumber}})
        }
    }

    render() {
        const { user } = this.props;
		
       const { username, password, licenseNumber, submitted } = this.state;
	
        return (
		
          
         <AppProvider>
       
			  
            <Paper style={{padding:'5px'}} elevation={1} className="register_bg">
			 <AppContext.Consumer>
          {(context) => ( 
          <ButtonAppBar></ButtonAppBar>   
		  )}
		</AppContext.Consumer>
             
			 <div className="col-md-4 reg_form " style={{ background: '#fff', margin: '0 auto' }}>
                
				<br/>
				<br/>
				<div className="main_title">CREATE ACCOUNT</div>
					
				
				
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
					
					<div className={'form-group' + (submitted && !licenseNumber ? ' has-error' : '')}>
                        <label htmlFor="licenseNumber"></label>
                        <input type="text" className="form-control" placeholder="License Number" name="licenseNumber" value={licenseNumber} onChange={this.handleChange} />
                        {submitted && !licenseNumber &&
                            <div className="help-block">LicenseNumber is required</div>
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
    // const { user } = state.app;
    return {
        
        // user,
		 
    };
}
const mapDispatchToProps = {
    // register_user:register_user.request
};

export default withTheme()( connect(mapStateToProps, mapDispatchToProps)(RelatorsRegsiter)); 
