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

class RoommateFinderResultVariationTwo extends React.Component {
		
	render() {
	 
    const {classes, fetching , errorMessage, loggedInUser} = this.props;
    debugger;
    return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            
            <div>
                <ButtonAppBar></ButtonAppBar> 
            {fetching && <div className="loader-container bg_roommate">
			                <div className="banner_text">
			   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit" noWrap>
									 We went searching throughout all Chicago
								  </Typography>
								  <Typography variant="title" color="inherit" noWrap>
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
			
					
			}
			            
			{errorMessage && <div className="error-message">{errorMessage}</div>}
			
            </div>
			
          )}
		        		  
        </AppContext.Consumer>
		
		
		<div className="container">
			<div className="main_roomates">
				<React.Fragment>
					<div className="row">
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-1.jpg')} /></a>
							<div className="profile_title">
							<h5>Margot Ryan </h5>
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
							
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img  className="profile_img" src={require('./images/profile-2.jpg')} /></a>
							<div className="profile_title">
							<h5>Sandra Timmins</h5>
							<span>Quiet</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="profile_title">
							<h5>selena gomez</h5>
							<span>Loud</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-4.jpg')} /></a>
							<div className="profile_title">
							<h5>Joe White</h5>
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-5.jpg')} /></a>
							<div className="profile_title">
							<h5>Dipika Padukone</h5>
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
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-2.jpg')} /></a>
							<div className="profile_title">
							<h5>Sandra Timmins</h5>
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-1.jpg')} /></a>
							<div className="profile_title">
							<h5>Margot Ryan </h5>
							<span>Quiet</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
							
						  </Grid>
						  
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
							<div className="profile_title">
							<h5>selena gomez</h5>
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-5.jpg')} /></a>
							<div className="profile_title">
							<h5>Dipika Padukone</h5>
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
						   </Grid>
						   
						   <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-4.jpg')} /></a>
							<div className="profile_title">
							<h5>Joe White</h5>
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
						<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-3.jpg')} /></a>
						<div className="profile_title">
						<h5>selena gomez</h5>
						<span>Loud</span>
						<span>Part-time</span>
						<span>Drink Partner</span>
						<span>Bedtime at 11pm</span>
						<span>Not a Smoke Partner</span>
						</div>
						
						</Paper>
					  </Grid>
					  
					    <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-4.jpg')} /></a>
							<div className="profile_title">
							<h5>Joe White</h5>
							<span>Loud</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
						  </Grid>
					  
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-1.jpg')} /></a>
							<div className="profile_title">
							<h5>Margot Ryan </h5>
							<span>Messy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
							
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/profile-2.jpg')} /></a>
							<div className="profile_title">
							<h5>Sandra Timmins</h5>
							<span>Tidy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  					 
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img"  src={require('./images/profile-5.jpg')} /></a>
							<div className="profile_title">
							<h5>Dipika Padukone</h5>
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
		
		
		{fetching && <div className="loader-container baer-home">
			                <div className="banner_text">
			   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit" noWrap>
									 Or, want to find a house and who is
								  </Typography>
								  <Typography variant="title" color="inherit" noWrap>
									 interested in them?
								  </Typography>
								   
								</div>
								
								<div className="type_of_person">
								  
								  <Button variant="title" color="#F9790E">Bedrooms<i className="down"></i></Button>
								  <Button>Bedrooms</Button>
								  <Button>Area of Chicago</Button>
								  <Button>Budget</Button>
								  <Button>Sq Feet</Button>
								
								</div>
			                </div>
						
							
			            </div>
			
					
		}
		
		
		<div className="container">
			<div className="main_roomates">
				<React.Fragment>
					<div className="row">
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/room-1.jpg')} /></a>
							<div className="profile_title">
							<h5>Beautiful Mod.. </h5>
							<span>1 BD</span>
							<span>1 Bath</span>
							<span>1200 sq ft</span>
							<span>casselton</span>
							<span>$800/mo</span>
							</div>
							</Paper>
							
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/room-2.jpg')} /></a>
							<div className="profile_title">
							<h5>3 Bedroom Apt</h5>
							<span>Tidy</span>
							<span>Full-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 1pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/room-3.jpg')} /></a>
							<div className="profile_title">
							<h5>Modern Living..</h5>
							<span>Tidy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/room-4.jpg')} /></a>
							<div className="profile_title">
							<h5>Awesome Appliances</h5>
							<span>Messy</span>
							<span>Full-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
						  </Grid>
						  <Grid item xs={4}>
							<Paper className={classes.paper}><a href=""><img className="profile_img" src={require('./images/room-5.jpg')} /></a>
							<div className="profile_title">
							<h5>Yet Another ONe…</h5>
							<span>Tidy</span>
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


RoommateFinderResultVariationTwo = connect(mapStateToPropsN)(RoommateFinderResultVariationTwo);

export default withStyles(styles)(RoommateFinderResultVariationTwo);
