import React from "react";
import {connect} from "react-redux";
import { AppContext } from '../provider/AppContext';
import AppProvider from "../provider/AppContext";
import ButtonAppBar from '../components/TopBar';
import FooterBar from '../components/FooterBar';
//import './font-awesome.min.css';
import {Welcome} from "../components/Welcome";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Fade from '@material-ui/core/Fade';
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

class AgentInquiries extends React.Component {
	state = {
    checked: false,
	  };

	  handleChange = () => {
		this.setState(state => ({ checked: !state.checked }));
	  };
	render() {
	 
    const {classes, fetching , errorMessage, loggedInUser} = this.props;
    const { checked } = this.state;
    return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            
            <div className="profile_header FavoriteRoommates">
				<ButtonAppBar></ButtonAppBar> 
				<div className="col-sm-12 dashboard_page">
			        <div className="col-sm-2 side_dashboard_list side_dashboard_list_desktop">
						<Grid item xs={1}>
										<Paper className={classes.paper}> 
										<div className="dashboard_btns">
										<Button data-toggle="tab" data-target="#page0" className="dashboard_btn btn btn-default btn-sm">My Dashboard</Button>
										<Button data-toggle="tab" data-target="#page1" className="dashboard_btn btn btn-default btn-sm">Profile Page</Button>
										<Button data-toggle="tab" data-target="#page2" className="dashboard_btn btn btn-default btn-sm">Messages</Button>
										<Button data-toggle="tab" data-target="#page3" className="dashboard_btn btn btn-default btn-sm">Listings</Button>
										<Button data-toggle="tab" data-target="#page4" className="dashboard_btn active btn btn-default btn-sm"> Applications</Button>
										</div>
										
										</Paper>
										
									  </Grid>
					</div>
						
					<div className="col-sm-10">	
						<div className="loader-container">
						
						   			    <div className="agent_inquries_bg banner_text">
											<div className="dash_head" style={{display:"block"}}>
											  <Typography variant="title" color="inherit">
												Applications
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
																	<Button data-toggle="tab" data-target="#page2" className="dashboard_btn btn btn-default btn-sm">Messages</Button>
																	<Button data-toggle="tab" data-target="#page3" className="dashboard_btn btn btn-default btn-sm">Listings</Button>
																	<Button data-toggle="tab" data-target="#page4" className="dashboard_btn active btn btn-default btn-sm"> Applications</Button>
																	</div>
																	
																	</Paper>
																	
														</Grid>
													</div>
												  </Zoom>
												</div>
								</div>
								</div>	
										
										
									</div>
								
						
			<div className="col-sm-12">			
			<div className="app_btns">
				<div className="left_app_area">
				<input type="text" name="search" placeholder="Search…" className="search" />
				<Button className="submit">SUBMIT</Button>
				</div>
				<div className="right_app_area">
				<Button data-toggle="tab" data-target="#page3" className="dashboard_btn active btn btn-default btn-sm applications_btn">Applications</Button>
				<Button data-toggle="tab" data-target="#page4" className="dashboard_btn active btn btn-default btn-sm listing_btn"> Listings</Button>
				</div>
			</div>
            </div>			
			<div className="col-sm-12">
			<div className="main_roomates roommatefinder_result">
				<React.Fragment>
					<div className="row">
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/roommate_profile.jpeg')} /></a>
							<div className="agent_inquiry_app_area">
								<Button data-toggle="tab" data-target="#page3" className="dashboard_btn active btn btn-default btn-sm applications_btn">Accept</Button>
				                <Button data-toggle="tab" data-target="#page4" className="dashboard_btn active btn btn-default btn-sm listing_btn"> Decline</Button>
								<Button data-toggle="tab" data-target="#page5" className="dashboard_btn active btn btn-default btn-sm inq_view_btn">View</Button>
								</div>
							<div className="room_finder_title">	<h5>Jeffrey Armstrong</h5></div>
							<div className="profile_title">
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
							
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/roommate_profile.jpeg')} /></a>
							<div className="room_finder_title">	<h5>Jeffrey Armstrong</h5></div>
							<div className="profile_title">
							
							<span>Quiet</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/roommate_profile.jpeg')} /></a>
							<div className="room_finder_title">	<h5>Jeffrey Armstrong</h5></div>
							<div className="profile_title">
						
							<span>Loud</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/roommate_profile.jpeg')} /></a>
							<div className="room_finder_title">	<h5>Jeffrey Armstrong</h5></div>
							<div className="profile_title">
							
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
						  </Grid>
						  
						  
					</div>
					
					<div className="row">
						  
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/roommate_profile.jpeg')} /></a>
							<div className="room_finder_title">	<h5>Jeffrey Armstrong</h5></div>
							<div className="profile_title">
							
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/roommate_profile.jpeg')} /></a>
							<div className="room_finder_title">	<h5>Jeffrey Armstrong</h5></div>
							<div className="profile_title">
							
							<span>Quiet</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
							
						  </Grid>
						  
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/roommate_profile.jpeg')} /></a>
							<div className="room_finder_title">	<h5>Jeffrey Armstrong</h5></div>
							<div className="profile_title">
							
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/roommate_profile.jpeg')} /></a>
							<div className="room_finder_title">	<h5>Jeffrey Armstrong</h5></div>
							<div className="profile_title">
							
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
						   </Grid>
						   
						   
					</div>					
					
										
					</React.Fragment>
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
  fetching: state.app.fetching,
  errorMessage: state.app.error
  //loggedInUser:state.app.user
});


//export default withTheme()(RoommateFinderResultVariationTwo);


AgentInquiries = connect(mapStateToPropsN)(AgentInquiries);

export default withStyles(styles)(AgentInquiries);
