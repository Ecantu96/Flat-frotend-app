import React from "react";
import {connect} from "react-redux";
import { AppContext } from '../provider/AppContext';
import AppProvider from "../provider/AppContext";
import ButtonAppBar from '../components/TopBar';
import FooterBar from '../components/FooterBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

class RoommateFinderResult extends React.Component {
		
	render() {
	 
    const {classes, fetching , errorMessage, loggedInUser} = this.props;
    debugger;
    return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            
            <div>
                <ButtonAppBar></ButtonAppBar> 
            <div className="loader-container bg_roommate">
			                <div className="banner_text_roomate_profile">
			   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit" >
									 We went searching throughout all Chicago
								  </Typography>
								  <Typography variant="title" color="inherit" >
									and this is what we found just for you….
								  </Typography>
								   
								</div>
								
								<div className="type_of_person">
								  
								  <Button variant="title" color="#F9790E">Type of Person</Button>
								  <Button>Type of Person</Button>
								  <Button>Type of Person</Button>
								  <Button>Type of Person</Button>
								  <Button>Type of Person</Button>
								
								</div>
			                </div>
						
							
			            </div>
			
					
		
			            
			{errorMessage && <div className="error-message">{errorMessage}</div>}
			
            </div>
			
          )}
		        		  
        </AppContext.Consumer>
		
		
		<div className="container">
			<div className="main_roomates roommatefinder_result">
				<React.Fragment>
					<div className="row">
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
							<div className="profile_title">
							
							<span>Tidy</span>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
						<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
						<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
							<div className="profile_title">
							
							<span>Tidy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  					 
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href="#"><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="room_finder_title">	<h5>Selena Gomez</h5></div>
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
					
					
					<div className="next_pre">
								  
								  <Button className="pre_page" variant="title" color="#F9790E">Previous</Button>
								  <span className="numbers active">1</span>
								  <span className="numbers">2</span>
								  <span className="numbers">3</span>
								  <span className="numbers">4</span>
								  <span variant="title" color="#F9790E">....</span>
								  <span className="numbers">18</span>
								  <Button className="next_page">Last</Button>
								  
						   
								  							   
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
    
		
		<div className="loader-container">
		
				
			                <div className="check_home_title">
			   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit">
									 Check out these homes…
								  </Typography>
								  
								</div>
								
								
			                </div>
						
							
			            </div>
			
					
	
		
		
		<div className="container">
			<div className="main_roomates rooms_finder">
				<React.Fragment>
					<div className="row">
						  <Grid item xs={5}>
	<Paper className={classes.paper}><a href="#"><img  className="home_img" src={require('./images/lsiting_room.jpg')} /></a>
	        <div className="room_finder_title"><h5>Address goes here</h5></div>
							<div className="profile_title">
							<h5>Beautiful Mod Apartment</h5>
							<span>1 BD</span>
							<span>1 Bath</span>
							<span>1200 sq ft</span>
							<span>casselton</span>
							<span>$800/mo</span>
							</div>
							</Paper>
							
						  </Grid>
						  <Grid item xs={5}>
							<Paper className={classes.paper}><a href="#"><img  className="home_img" src={require('./images/lsiting_room.jpg')} /></a>
							 <div className="room_finder_title"><h5>Address goes here</h5></div>
							<div className="profile_title">
							<h5>Beautiful Mod Apartment</h5>
							<span>1 BD</span>
							<span>1 Bath</span>
							<span>1200 sq ft</span>
							<span>casselton</span>
							<span>$800/mo</span>
							</div>
							</Paper>
						  </Grid>
						  <Grid item xs={5}>
							<Paper className={classes.paper}><a href="#"><img  className="home_img" src={require('./images/lsiting_room.jpg')} /></a>
							 <div className="room_finder_title"><h5>Address goes here</h5></div>
							<div className="profile_title">
							<h5>Beautiful Mod Apartment</h5>
							<span>1 BD</span>
							<span>1 Bath</span>
							<span>1200 sq ft</span>
							<span>casselton</span>
							<span>$800/mo</span>
							</div>
							</Paper>
						  </Grid>
						  <Grid item xs={5}>
							<Paper className={classes.paper}><a href="#"><img  className="home_img" src={require('./images/lsiting_room.jpg')} /></a>
							 <div className="room_finder_title"><h5>Address goes here</h5></div>
							<div className="profile_title">
							<h5>Beautiful Mod Apartment</h5>
							<span>1 BD</span>
							<span>1 Bath</span>
							<span>1200 sq ft</span>
							<span>casselton</span>
							<span>$800/mo</span>
							</div>
							</Paper>
						  </Grid>
						  
						  
					</div>
					
										
					 <div className="view_more">
								<Button className="view_more_btn" variant="title" color="#F9790E">View More</Button>
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


RoommateFinderResult = connect(mapStateToPropsN)(RoommateFinderResult);

export default withStyles(styles)(RoommateFinderResult);
