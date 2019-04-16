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

class AgentViewProfile extends React.Component {
		
	render() {
	 
    const {classes, fetching , errorMessage, loggedInUser} = this.props;
    debugger;
    return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            
            <div className="profile_header">
            <ButtonAppBar></ButtonAppBar> 
			<div className="col-sm-12 profile_full">	
			<div className="col-sm-9">	
            {fetching && <div className="loader-container roommate_profile_banner">
			
							 <div className="back_btn">
								 <Button>Back to all Results</Button>					   
						      </div>
								<div className="agent_view_app_area">
								<Button data-toggle="tab" data-target="#page3" className="dashboard_btn active btn btn-default btn-sm applications_btn">Accept</Button>
				                <Button data-toggle="tab" data-target="#page4" className="dashboard_btn active btn btn-default btn-sm listing_btn"> Decline</Button>
								</div>
			                <div className="roommate_profile_text">
			   					   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit">
									Hey there, my name is Joe…
								  </Typography>
								  								   
								</div>
								
								
			                </div>
						
							
			            </div>
			}	
			
			<div className="profile_description">
					<Typography variant="body1" >
					  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra pellentesque lobortis. Nunc velit tortor, lobortis a orci non, consectetur volutpat eros. Fusce vel tellus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
					  Pellentesque pretium mi nisi, vestibulum congue tortor pellentesque id. Maecenas ornare turpis at enim euismod aliquam. Quisque sed pellentesque mi
					  Mauris euismod eleifend risus non vulputate. Nunc tempus efficitur venenatis. Nullam iaculis odio tincidunt tincidunt bibendum. 
                    </Typography>
					<Typography variant="body1" >
					  consectetur volutpat eros. Fusce vel tellus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
					  Pellentesque pretium mi nisi, 
                    </Typography>
					
					<Typography variant="body1" >
					  Pellentesque pretium mi nisi, vestibulum congue tortor pellentesque id. Maecenas ornare turpis at enim euismod aliquam. Quisque sed pellentesque mi
                    </Typography>
              			
					
					<Typography variant="body1" >
					  lobortis a orci non, consectetur volutpat eros. Fusce vel tellus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                    </Typography>

			</div>
		</div>
			<div className="col-sm-3 side_profile">
			<Grid item xs={1}>
							<Paper className={classes.paper}><a href="#"><img style={{ width: '320px' }}  src={require('./images/Wildlike2.png')} /></a>
							<div className="profile_variants">
							<h5>Joe White</h5>
							<span className="squre_box">Age: 24</span>
							<span className="squre_box">Gender: Male</span> 
							<span className="squre_box">Age: 24</span>
							<span className="squre_box">Gender: Male</span>
							<span className="round_box">Messy</span>
							<span className="round_box">Full-time</span>
							<span className="round_box">Drink Partner</span>	
							<span className="round_box">Bedtime at 1am</span>
							<span className="round_box">Not a Smoke Partner</span>
							</div>
							<div className="profile_btns">
							<Button className="profile_btn">Send Message</Button>
							<Button className="profile_btn">Favorite</Button>
							</div>
							<div className="pro_social_media">
							<ul>
								<li><a href="#">f</a></li>
								<li><a href="#">t</a></li>
								<li><a href="#">L</a></li>
							</ul> 
							
							
							
							</div>
							</Paper>
							
						  </Grid>
			</div>
			
			
				
					
						
			{fetching && <div className="loader-container">

		
					<div className="profile_head_title">
	   
					   <div style={{display:"block"}}>
						  <Typography variant="title" color="inherit">
							 Photos of what I’m interested in…
						  </Typography>
						  
						</div>
						
						
					</div>
				
					
				</div>
	
			
            }	
			</div>		
			
			
			            
			{errorMessage && <div className="error-message">{errorMessage}</div>}
			
            </div>
			
          )}
		        		  
        </AppContext.Consumer>
		
		
		<div className="col-sm-12">
			<div className="roommateProfile">
				<React.Fragment>
				
				
				
				
					<div className="row">
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img  src={require('./images/roommate_pr_picture.jpg')} /></a>
							
							</Paper>
							
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img  src={require('./images/roommate_pr_picture.jpg')} /></a>
														
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img  src={require('./images/roommate_pr_picture.jpg')} /></a>
							
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img  src={require('./images/roommate_pr_picture.jpg')} /></a>
							
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img  src={require('./images/roommate_pr_picture.jpg')} /></a>
							
							</Paper>
						   </Grid>
						   
						   
						  
					</div>
				</React.Fragment>
			</div>
			
			
		</div>
		
				  
		 <div style={{
		  border: '1px solid rgba(0, 0, 0, 0.12)',
		  height: '100%',
		  width: '45%',
		 margin: '10px auto'
		 }}>
		</div>
    
		
		{fetching && <div className="loader-container">
		
				
			                <div className="check_home_title">
			   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit" >
									 People like Joe you may be interested in…
								  </Typography>
								  
								</div>
								
								
			                </div>
						
							
			            </div>
			
					
		}
		
		
		<div className="container">
			<div className="main_roomates">
				<React.Fragment>
					<div className="row">
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
							
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
														
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
						   </Grid>
						   
						   
						  
					</div>
										
					 <div className="view_more">
								
					</div>
					
					
				</React.Fragment>
			</div>
			
				
			
		</div>

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


AgentViewProfile = connect(mapStateToPropsN)(AgentViewProfile);

export default withStyles(styles)(AgentViewProfile);
