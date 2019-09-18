import React from "react";
import {connect} from "react-redux";
import { AppContext } from '../provider/AppContext';
import AppProvider from "../provider/AppContext";
import ButtonAppBar from '../components/TopBar';
import FooterBar from '../components/FooterBar';
//import {Welcome} from "../components/Welcome";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
//import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
  
const styles = theme => ({
	  root: {
		flexGrow: 1,
	  },
	  paper: {
		padding: theme.spacing.unit,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	  },
	});

class AgentMessages extends React.Component {
		state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };
	render() {
	 
    const {classes} = this.props;
    const { checked } = this.state;
    return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            
            <div className="profile_header agent_msg_header">
				<ButtonAppBar></ButtonAppBar> 
				<div className="col-sm-12 dashboard_page">
			        <div className="col-sm-2 side_dashboard_list side_dashboard_list_desktop">
						<Grid item xs={1}>
						<Paper className={classes.paper}> 
							  <div className="dashboard_btns">
										<Button data-toggle="tab"  onClick={() => {
										this.props.history.push("/AgentDashboard");
										}} data-target="#page0" className="dashboard_btn  btn btn-default btn-sm">My Dashboard</Button>
												<Button data-toggle="tab"  onClick={() => {
										this.props.history.push("/AgentProfile");
										}} data-target="#page1" className="dashboard_btn  btn btn-default btn-sm">Profile Page</Button>
												<Button data-toggle="tab"  onClick={() => {
										this.props.history.push("/AgentMessages");
										}} data-target="#page2" className="dashboard_btn active btn btn-default btn-sm">Messages</Button>
												<Button data-toggle="tab"  onClick={() => {
										this.props.history.push("/AgentListings");
										}} data-target="#page3" className="dashboard_btn btn btn-default btn-sm">Listings</Button>
												<Button data-toggle="tab"  onClick={() => {
										this.props.history.push("/AgentInquiries");
										}} data-target="#page4" className="dashboard_btn btn btn-default btn-sm">Applications</Button>
								</div>
										
					        </Paper>
										
									  </Grid>
					</div>
						
					<div className="col-sm-10">	
						<div className="loader-container">
						
						   			    <div className="agent_msg_bg banner_text">
											<div className="dash_head" style={{display:"block"}}>
											  <Typography variant="title" color="inherit">
												Message
											  </Typography>
											  
											</div>
								  
										    
										</div>
										


								<div className="togle_mobile_menu">		
								<div className={classes.root}>
												<Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
												<div className={classes.container}>
												  <Zoom in={checked}>
													<div className="col-sm-2  side_dashboard_list_mobile">
														<Grid item xs={1}>
																	<Paper elevation={4} className={classes.paper}> 
																	<div className="dashboard_btns">
																	<Button data-toggle="tab" data-target="#page0" className="dashboard_btn btn btn-default btn-sm">My Dashboard</Button>
																	<Button data-toggle="tab" data-target="#page1" className="dashboard_btn btn btn-default btn-sm">Profile Page</Button>
																	<Button data-toggle="tab" data-target="#page2" className="dashboard_btn active btn btn-default btn-sm">Messages</Button>
																	<Button data-toggle="tab" data-target="#page3" className="dashboard_btn btn btn-default btn-sm">Listings</Button>
																	<Button data-toggle="tab" data-target="#page4" className="dashboard_btn btn btn-default btn-sm">Applications</Button>
																	</div>
																	
																	</Paper>
																	
														</Grid>
													</div>
												  </Zoom>
												</div>
								</div>
								</div>
										
									</div>
						
										
												
						<div className="msg_dashbaord_sidebar">	
						
								<div className="col-lg-3">
								<Grid className="main_side" item xs={1}>
									<Paper className={classes.paper}>
									<div className="msg_profile_section">
									<img alt="" style={{ width: '50px', height: '50px' }} className="msg_picture"  src={require('./images/msg_profile_1.png')} />
									<span>NOW</span>
									</div>
									<div className="msg_details">
									 <h5>Jeffrey Armstrong</h5>
										<p>cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…</p>
									</div>
									</Paper>
									
				                </Grid>
								<Grid className="main_side_shild" item xs={1}>
									<Paper className={classes.paper}>
									<div className="msg_profile_section">
									<img alt="" style={{ width: '50px', height: '50px' }} className="msg_picture"  src={require('./images/profile-3.jpg')} />
									<span>11/8/2018</span>
									</div>
									<div className="msg_details">
									 <h5>Jeffrey Armstrong</h5>
										<p>cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…</p>
									</div>
									</Paper>
									
				                </Grid>
								
								<Grid className="main_side_shild" item xs={1}>
									<Paper className={classes.paper}>
									<div className="msg_profile_section">
									<img alt="" style={{ width: '50px', height: '50px' }} className="msg_picture"  src={require('./images/msg_profile_1.png')} />
									<span></span>
									</div>
									<div className="msg_details">
									 <h5>Jeffrey Armstrong</h5>
										<p>cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…</p>
									</div>
									</Paper>
									
				                </Grid>
								<Grid className="main_side_shild" item xs={1}>
									<Paper className={classes.paper}>
									<div className="msg_profile_section">
									<img alt="" style={{ width: '50px', height: '50px' }} className="msg_picture"  src={require('./images/profile-3.jpg')} />
									<span></span>
									</div>
									<div className="msg_details">
									 <h5>Jeffrey Armstrong</h5>
										<p>cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…</p>
									</div>
									</Paper>
									
				                </Grid>
								<Grid className="main_side_shild" item xs={1}>
									<Paper className={classes.paper}>
									<div className="msg_profile_section">
									<img alt="" style={{ width: '50px', height: '50px' }} className="msg_picture"  src={require('./images/msg_profile_1.png')} />
									<span></span>
									</div>
									<div className="msg_details">
									 <h5>Jeffrey Armstrong</h5>
										<p>cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…</p>
									</div>
									</Paper>
									
				                </Grid>
								
								
								</div>
						</div>	

						
						<div className="msg_box col-lg-8">
							<div className="msg_left">
								<Typography variant="body2" style={{ backgroundColor: '#EFEFEF', }} >cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…
								</Typography>
							<img alt="" style={{ width: '30px', height: '30px' }} className="msg_picture"  src={require('./images/msg_profile_1.png')} />
							<span>Jeffrey</span>
						    </div>
							<span className="time_stamp">Timestap each day</span>
							<div className="msg_right">
								<Typography variant="body2" style={{ backgroundColor: '#F9790E', }} >cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…
								</Typography>
								<span>Me</span>
								<img alt="" style={{ width: '30px', height: '30px' }} className="msg_picture"  src={require('./images/msg_profile2.png')} />
								
						    </div>
							<span className="time_stamp">Timestap each day</span>
							<div className="msg_left">
								<Typography variant="body2" style={{ backgroundColor: '#EFEFEF', }} >cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…
								</Typography>
								<img alt="" style={{ width: '30px', height: '30px' }} className="msg_picture"  src={require('./images/msg_profile_1.png')} />
								<span>Jeffrey</span>
						    </div>
							
							<div className="msg_right">
								<Typography variant="body2" style={{ backgroundColor: '#F9790E', }} >cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…
								</Typography>
								<span>Me</span>
								<img alt="" style={{ width: '30px', height: '30px' }} className="msg_picture"  src={require('./images/msg_profile2.png')} />
						    </div>
							
							<div className="msg_left">
								<Typography variant="body2" style={{ backgroundColor: '#EFEFEF', }} >cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…
								</Typography>
								<img alt="" style={{ width: '30px', height: '30px' }} className="msg_picture"  src={require('./images/msg_profile_1.png')} />
								<span>Jeffrey</span>
						    </div>
							
							<div className="msg_right">
								<Typography variant="body2" style={{ backgroundColor: '#F9790E', }}>cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…
								</Typography>
								<span>Me</span>
								<img alt="" style={{ width: '30px', height: '30px' }} className="msg_picture"  src={require('./images/msg_profile2.png')} />
						    </div>
							
							<div className="msg_left">
								<Typography variant="body2" style={{ backgroundColor: '#EFEFEF', }}>cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…
								</Typography>
								<img alt="" style={{ width: '30px', height: '30px' }} className="msg_picture"  src={require('./images/msg_profile_1.png')} />
								<span>Jeffrey</span>
						    </div>
							
							<div className="msg_right">
								<Typography variant="body2" style={{ backgroundColor: '#F9790E', }}>cidunt pellentesque. Duis tortor metus, lobortis sit amet justo a, mollis gravida justo. Nam consequat suscipit dui…
								</Typography>
								<span>Me</span>
								<img alt="" style={{ width: '30px', height: '30px' }} className="msg_picture"  src={require('./images/msg_profile2.png')} />
						    </div>
							
						<div className="message_btns">
						<input type="text"  placeholder="TYPE MESSAGE HERE…" name="type_msg" className="type_msg" />
						<Button>SEND</Button>
						</div>
						</div>	
					    
						
							
					</div>
					
					
					
				</div>	
			</div>
			
          )}
		        		  
        </AppContext.Consumer>
		
		<FooterBar></FooterBar>
		
	  </AppProvider>
	 
    );
  }
 
}

const mapStateToPropsN = state => ({
 // fetching: state.app.fetching,
 // errorMessage: state.app.error
  //loggedInUser:state.app.user
});


//export default withTheme()(RoommateFinderResultVariationTwo);


AgentMessages = connect(mapStateToPropsN)(AgentMessages);

export default withStyles(styles)(AgentMessages);
