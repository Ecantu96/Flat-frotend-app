import React from "react";
import {connect} from "react-redux";
import { AppContext } from '../provider/AppContext';
import AppProvider from "../provider/AppContext";
import ButtonAppBar from '../components/TopBar';
import FooterBar from '../components/FooterBar';
import Map from '../components/map';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import PropTypes from 'prop-types';
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

class RoommateProfile extends React.Component {
		
	render() {
	 
    const {classes,  errorMessage} = this.props;
    debugger;
    return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            
            <div>
                <ButtonAppBar></ButtonAppBar> 
             <div className="loader-container listing_banner">
			                <div className="banner_text">
			   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit" >
									Or, want to find a house and who is
								  </Typography>
								  <Typography variant="title" color="inherit">
									interested in them?
								  </Typography>
								   
								</div>
								
								<div className="type_of_person">
								  
								  <Button variant="title" color="#F9790E">Bedrooms</Button>
								  <Button>Bathrooms</Button>
								  <Button>Area of Chicago</Button>
								  <Button>Budget</Button>
								  <Button>Sq Feet</Button>
								
								</div>
			                </div>
						
							
			            </div>
			
					
			
			            
			{errorMessage && <div className="error-message">{errorMessage}</div>}
			
            </div>
			
          )}
		        		  
        </AppContext.Consumer>
			
		
		<div className="container">
			<div className="main_roomates listing_page">
				<React.Fragment>
				<div className="col-sm-12">
					<div className="col-sm-6">
					    <div className="row">
						  
				  		  <Grid item xs={5}>
							<Paper className={classes.paper}><a href="/"><img alt="" src={require('./images/lsiting_room.jpg')} /></a>
							<div className="room_finder_title">	<h5>Address goes here</h5></div>
							<div className="profile_title">
							<h5>Beautiful Mod Apartment</h5>
							<span>Tidy</span>
							<span>Full-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 1pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
							</Grid>
							
							<Grid item xs={5}>
							<Paper className={classes.paper}><a href="/"><img alt=""  src={require('./images/lsiting_room.jpg')} /></a>
							<div className="room_finder_title">	<h5>Address goes here</h5></div>
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
								
						<div className="row">
						
						  <Grid item xs={5}>
							<Paper className={classes.paper}><a href="/"><img alt=""  src={require('./images/lsiting_room.jpg')} /></a>
							<div className="room_finder_title">	<h5>Address goes here</h5></div>
							<div className="profile_title">
							<h5>Beautiful Mod Apartment</h5>
							<span>Tidy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
						  </Grid>
						  <Grid item xs={5}>
							<Paper className={classes.paper}><a href="/"><img alt=""  src={require('./images/lsiting_room.jpg')} /></a>
							<div className="room_finder_title">	<h5>Address goes here</h5></div>
							<div className="profile_title">
							<h5>Beautiful Mod Apartments</h5>
							<span>Messy</span>
							<span>Full-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
						  </Grid>
						</div>
						<div className="row">
					
						<Grid item xs={5}>
							<Paper className={classes.paper}><a href="/"><img alt=""  src={require('./images/lsiting_room.jpg')} /></a>
							<div className="room_finder_title">	<h5>Address goes here</h5></div>
							<div className="profile_title">
							<h5>Beautiful Mod Apartment</h5>
							<span>Tidy</span>
							<span>Part-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 11pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
						   </Grid>
						<Grid item xs={5}>
							<Paper className={classes.paper}><a href="/"><img alt=""  src={require('./images/lsiting_room.jpg')} /></a>
							<div className="room_finder_title">	<h5>Address goes here</h5></div>
							<div className="profile_title">
							<h5>Beautiful Mod Apartment</h5>
							<span>Tidy</span>
							<span>Full-time</span>
							<span>Drink Partner</span>
							<span>Bedtime at 1pm</span>
							<span>Not a Smoke Partner</span>
							</div>
							</Paper>
						</Grid>
						
						</div>
						
						
					<div className="next_pre">
								  
								  <Button className="pre_page" variant="title" color="#F9790E">Previous</Button>
								  <span className="numbers active">1</span>
								  <span className="numbers">2</span>
								  <span variant="title" color="#F9790E">....</span>
								  <span className="numbers">18</span>
								  <Button className="next_page">Last</Button>
								  
						
								  							
				    </div>
						
					</div>
					
					<div className="col-sm-6 listing_map">
					<Map
						id="myMap"
						options={{
						  center: { lat: 41.0082, lng: 28.9784 },
						  zoom: 8
						}}
						onMapLoad={map => {
						 // var marker = new window.google.maps.Marker({
						//	position: { lat: 41.0082, lng: 28.9784 },
							//map: map,
							//title: 'Hello Istanbul!'
						  //});
						}}
					  />
					</div>
					
										
					 <div className="view_more">
								
					</div>
					
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
 // fetching: state.app.fetching,
  errorMessage: state.app.error
  //loggedInUser:state.app.user
});


//export default withTheme()(RoommateFinderResultVariationTwo);


//RoommateProfile = connect(mapStateToPropsN)(RoommateProfile);

export default withStyles(styles)(RoommateProfile);
