import React from "react";
import {connect} from "react-redux";
import { AppContext } from '../provider/AppContext';
import AppProvider from "../provider/AppContext";
import ButtonAppBar from '../components/TopBar';
import FooterBar from '../components/FooterBar';
import Map from '../components/map';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
  
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
 var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
class Neighborhoods extends React.Component {
	
	
	render() {
	
		
    const {classes, fetching , errorMessage, loggedInUser} = this.props;
    debugger;
    return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            
            <div>
             <ButtonAppBar></ButtonAppBar>    
            <div className="loader-container neighborhoods_banner">
			
			                <div className="banner_text">
			   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit" >
									Chicago
								  </Typography>
								  								   
								</div>
								
								
			                </div>
						
							
			            </div>
			
					
		
			            
			
			
            </div>
			
          )}
		  
		 
		        		  
        </AppContext.Consumer>
		
		 
			
		
		<div className="container">
			<div className="main_roomates neighborhoods">
				<React.Fragment>
				<div className="col-sm-12">
					<div className="col-sm-6">
					    <div className="row">
							 <div className="loader-container">

				
								<div className="neighborhoods_title">
				   
								   <div style={{display:"block"}}>
									  <Typography variant="title" color="inherit">
										Trending Neighborhoods
									  </Typography>
									  
									</div>
									
									
								</div>
						
							
						    </div>
					      
							
				  		  <Slider {...settings}>
								
								            <Grid item xs={5}>
													<Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
													<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
													<div className="profile_title">
													<h5>City Name</h5>
													<span>401 <br/>Apts</span>
													<span>185 <br/>Roommates</span>
													<span>197 <br/>Locations</span>
													
													</div>
													</Paper>
											</Grid>
							
							
						                <Grid item xs={5}>
													<Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
													<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
													<div className="profile_title">
													<h5>City Name</h5>
													<span>401 <br/>Apts</span>
													<span>185 <br/>Roommates</span>
													<span>197 <br/>Locations</span>
													
													</div>
													</Paper>
										</Grid>
								
								 <Grid item xs={5}>
													<Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
													<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
													<div className="profile_title">
													<h5>City Name</h5>
													<span>401 <br/>Apts</span>
													<span>185 <br/>Roommates</span>
													<span>197 <br/>Locations</span>
													
													</div>
													</Paper>
												  </Grid>
								
								<Grid item xs={5}>
								  <Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
													<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
													<div className="profile_title">
													<h5>City Name</h5>
													<span>401 <br/>Apts</span>
													<span>185 <br/>Roommates</span>
													<span>197 <br/>Locations</span>
													
													</div>
													</Paper>
									</Grid>
							
        
                            </Slider>
							
						</div>
								
						<div className="row">
						
						<div className="loader-container">

				
								<div className="neighborhoods_title">
				   
								   <div style={{display:"block"}}>
									  <Typography variant="title" align="center" color="inherit">
										All Neighborhoods
									  </Typography>
									  
									</div>
									
									
								</div>
						
							
						    </div>
					   
							
							
							
			                <Slider {...settings}>
							
            					   <Grid item xs={5}>
											<Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
											<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
											<div className="profile_title">
											<h5>City Name</h5>
											<span>401 <br/>Apts</span>
											<span>185 <br/>Roommates</span>
											<span>197 <br/>Locations</span>
											
											</div>
											</Paper>
									</Grid>
					
							
									<Grid item xs={5}>
												<Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
												<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
												<div className="profile_title">
												<h5>City Name</h5>
												<span>401 <br/> Apts</span>
												<span>185 <br/>Roommates</span>
												<span>197 <br/>Locations</span>
												
												</div>
												</Paper>
									</Grid>
								
								   <Grid item xs={5}>
										<Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
										<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
										<div className="profile_title">
										<h5>City Name</h5>
										<span>401 <br/>Apts</span>
										<span>185 <br/>Roommates</span>
										<span>197 <br/>Locations</span>
										
										</div>
										</Paper>
									  </Grid>
								
									<Grid item xs={5}>
									  <Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
														<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
														<div className="profile_title">
														<h5>City Name</h5>
														<span>401 <br/>Apts</span>
														<span>185 <br/>Roommates</span>
														<span>197 <br/>Locations</span>
														
														</div>
														</Paper>
										</Grid>
											
        
                            </Slider>
						  
						</div>
						<div className="row">
						
						<div className="loader-container">

				
								<div className="neighborhoods_title">
				   
								   <div style={{display:"block"}}>
									  <Typography variant="title" align="center" color="inherit">
										Check out these local favorites…
									  </Typography>
									  
									</div>
									
									
								</div>
						
							
						    </div>
					  
					<Slider {...settings}>
					
						<Grid item xs={5}>
							<Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
							<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
							<div className="profile_title">
							<h5>Area/Location</h5>
							<span>Business <br/>Type</span>
							<span>Rating <br/></span>
							
							</div>
							</Paper>
						 </Grid>
						<Grid item xs={5}>
							<Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
							<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
							<div className="profile_title">
							<h5>Area/Location</h5>
							<span>Business <br/>Type</span>
							<span>Rating <br/></span>
							
							</div>
							</Paper>
						</Grid>
						
						<Grid item xs={5}>
							<Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
							<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
							<div className="profile_title">
							<h5>Area/Location</h5>
							<span>Business <br/>Type</span>
							<span>Rating <br/></span>
							
							</div>
							</Paper>
						 </Grid>
						 
						 <Grid item xs={5}>
							<Paper className={classes.paper}><a href="#"><img  src={require('./images/lsiting_room.jpg')} /></a>
							<div className="room_finder_title">	<h5>Neighborhood Name</h5></div>
							<div className="profile_title">
							<h5>Area/Location</h5>
							<span>Business <br/>Type</span>
							<span>Rating<br/> </span>
							
							</div>
							</Paper>
						</Grid>
						
						
						</Slider>
						
						</div>
						
						
					<div className="next_pre">
								  
								 
								  
						
								  							
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
						  var marker = new window.google.maps.Marker({
							position: { lat: 41.0082, lng: 28.9784 },
							map: map,
							title: 'Hello Istanbul!'
						  });
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
  fetching: state.app.fetching,
  errorMessage: state.app.error
  //loggedInUser:state.app.user
});


//export default withTheme()(RoommateFinderResultVariationTwo);


Neighborhoods = connect(mapStateToPropsN)(Neighborhoods);

export default withStyles(styles)(Neighborhoods);
