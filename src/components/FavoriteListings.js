import React from "react";
import {connect} from "react-redux";
import { AppContext } from '../provider/AppContext';
import AppProvider from "../provider/AppContext";
import ButtonAppBar from '../components/TopBar';
import FooterBar from '../components/FooterBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Zoom from '@material-ui/core/Zoom';
import { authHeader } from '../_helpers'; 
import _ from 'lodash';
  
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

class FavoriteListings extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: false,
		    FavLists: []
		};
	}

	componentDidMount() {

		let AuthToken = authHeader();
		var url = "https://nooklyn-flats-backend-apis.herokuapp.com/FindFavrouiteMarkPropertyList";
		var bearer = AuthToken.Authorization;
		fetch(url, {
				method: 'GET',
				headers: {
					'Authorization': bearer,
					'Content-Type': 'application/json'
				}
			}).then(response => response.json()).then(res => { 
				
				this.setState({
					FavLists: res
				})
				return res;
		})
		.catch(error => this.setState({
				isLoading: false,
				message: 'Something bad happened' + error
		}));

							
}
	
  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };
	
render() {
	
	const { FavLists } = this.state;
    const {classes } = this.props;
  const { checked } = this.state;

  var FavListing = FavLists;

  if(_.find(FavLists)) {
	FavListing = FavLists.map((item, key) =>
	<Grid className="MuiGrid-item-143" item xs={5}  key={key}>
		<Paper className={classes.paper + ' MuiPaper-elevation2-20'}><a href="/"><img alt=""  src={require('./images/lsiting_room.jpg')} /></a>
		<div className="room_finder_title">	<h5>{item.Address}</h5></div>
		<div className="profile_title">
		<h5>{item.Name}</h5>
			<span>{item.Beds}Beds</span>
			<span>{item.Baths}Bath</span>
			<span>{item.squareFeet}</span>
			<span>{item.region}</span>
			<span>{item.rentPrice}/mo</span>
		</div>
		</Paper>
	</Grid>
	);
}

  console.log(FavListing);

    return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            
            <div className="profile_header FavoriteListings">
				<ButtonAppBar></ButtonAppBar> 
				<div className="col-sm-12 dashboard_page">
			        <div className="col-sm-2 side_dashboard_list side_dashboard_list_desktop">
						<Grid item xs={1}>
						    <Paper className={classes.paper}> 
										<div className="dashboard_btns">
										<Button onClick={() => {
								  this.props.history.push("/Dashboard");
								}} data-toggle="tab"  className="dashboard_btn btn btn-default btn-sm">My Dashboard</Button>
										<Button onClick={() => {
								  this.props.history.push("/DashboardProfile");
								}} data-toggle="tab"  className="dashboard_btn btn btn-default btn-sm">Profile Page</Button>
										<Button onClick={() => {
								  this.props.history.push("/DashboardMessage");
								}} data-toggle="tab"  className="dashboard_btn btn btn-default btn-sm">Messages</Button>
										<Button onClick={() => {
								  this.props.history.push("/FavoriteListings");
								}} data-toggle="tab"  className="dashboard_btn active btn btn-default btn-sm">Favorite Listings</Button>
										<Button onClick={() => {
								  this.props.history.push("/FavoriteRoommates");
								}} data-toggle="tab"  className="dashboard_btn btn btn-default btn-sm">Favorite Roommates</Button>
										</div>
										
							</Paper>
										
						</Grid>
					</div>
						
					<div className="col-sm-10">	
						<div className="loader-container">
						
						   			    <div className="dashboard_bg banner_text">
											<div className="dash_head" style={{display:"block"}}>
											  <Typography variant="title" color="inherit">
												Favorite Listings
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
																	<Button data-toggle="tab" data-target="#page3" className="dashboard_btn active btn btn-default btn-sm">Favorite Listings</Button>
																	<Button data-toggle="tab" data-target="#page4" className="dashboard_btn btn btn-default btn-sm">Favorite Roommates</Button>
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
				<div className="main_roomates favorit_list_rooms">
					<React.Fragment>
					<div className="row">
						  {FavListing}						  
						  
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
  //fetching: state.app.fetching,
  //errorMessage: state.app.error
  //loggedInUser:state.app.user
});


//export default withTheme()(RoommateFinderResultVariationTwo);


FavoriteListings = connect(mapStateToPropsN)(FavoriteListings);

export default withStyles(styles)(FavoriteListings);
