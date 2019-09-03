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
import { authHeader } from '../_helpers';
import _ from 'lodash';
import Moment from 'moment';
import { userActions } from '../actions';

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

class ListingDetailsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		list_id: this.props.location.state.list_id,
		  error: null,
		  isLoaded: false,
		  propertyDetails: [],
		  FavMarked: []
		};
				
	}

	backPage = () => {
		this.props.history.push('/Listing');
	}


	componentWillMount() {

		const {list_id, propertyDetails} = this.state;
		var id = list_id;
		var url = `https://nooklyn-flats-backend-apis.herokuapp.com/property/${id}`;
		let AuthToken = authHeader();
		fetch(url, {
			method: 'GET',
					headers: {
					'Authorization': AuthToken.Authorization,
					'Content-Type': 'application/json'
					},
			}).then(response => response.json())
			  .then(res => { 
				this.setState({
					propertyDetails: res
				})
				return res;
		})
		.catch(error => this.setState({
					message: 'Something bad happened' + error
		}));


		var url = "https://nooklyn-flats-backend-apis.herokuapp.com/users/userRole";
		var bearer = AuthToken.Authorization;
		fetch(url, {
			method: 'GET',
			headers: {
			  'Authorization': bearer,
			  'Content-Type': 'application/json'
			}
		  }).then(response => response.json()).then(result => { 
		   
			  this.setState({
				Role: result
			   
			   })
			 return result;
		})
		.catch(error => this.setState({
			isLoading: false,
			message: 'Something bad happened' + error
		}));
	}

	componentDidMount(){
		let AuthToken = authHeader();
		var url = "https://nooklyn-flats-backend-apis.herokuapp.com/FetchFavMarked";
		fetch(url, {
			method: 'GET',
			headers: {
			  'Authorization': AuthToken.Authorization,
			  'Content-Type': 'application/json'
			}
		  }).then(response => response.json()).then(result => { 
		   
			  this.setState({
				FavMarked: result
			   
			   })
			  return result;
		})
		.catch(error => this.setState({
			isLoading: false,
			message: 'Something bad happened' + error
		}));

	}
	
	onClickMarkFavorite = (mark, e) => {
		this.setState({addClass: !this.state.addClass});
		const {list_id, Role} = this.state;
		const { dispatch } = this.props;
		var user_id = Role.id;
		var lists_id = list_id;
		let user = {
				favMark : mark,
				PropertyList_id: lists_id,
				agentId: user_id
			}
			dispatch(userActions.MarkFavListing(user));
		
	}

		
	render() {
				let buttonClass = ["box"];
				if(this.state.addClass) { buttonClass.push('orange'); }
				const {classes} = this.props;
				const {propertyDetails, FavMarked, list_id} = this.state;
				
				if(_.some(FavMarked, _.isObject)){
				var MarkActive = FavMarked.map(function(item){
						if(list_id == item.PropertyList_id){
							
								var favMark = item.favMark;
								if(favMark == true){
									return "active";
								}
								if(favMark == false){
								return "inactive";
								}
						
						 }
							
				}).filter(function(item){return item;})[0];

			}
				
				if(_.find(propertyDetails)) {
					var Description = propertyDetails.Description;
					var Address = propertyDetails.Address;
					var Price = propertyDetails.rentPrice;
					var securityDeposit = propertyDetails.securityDeposit;
					var Beds = propertyDetails.Beds;
					var Baths = propertyDetails.Baths;
					const date = Date(propertyDetails.dateAvailable);
					var formattedDate = Moment(date).format("LL");
					var AgentName = propertyDetails.Name;
					
				}

				function AmenitieAC() {
					if(_.find(propertyDetails)) {
						var isAC = propertyDetails.AC;
						if(isAC == true){
							return "checked";
							}
									
				    }
				}
				function AmenitieBalconyDeck() {
					if(_.find(propertyDetails)) {
						var isBalconyDeck = propertyDetails.BalconyDeck;
							if(isBalconyDeck == true){
							return "checked";
							}
									
				    }
				}
				function AmenitieFurnished() {
					if(_.find(propertyDetails)) {
						var isFurnished = propertyDetails.Furnished;
							if(isFurnished == true){
							return "checked";
							}
									
				    }
				}
				function AmenitieHardwoodFloor() {
					if(_.find(propertyDetails)) {
						var isHardwoodFloor = propertyDetails.HardwoodFloor;
							if(isHardwoodFloor == true){
							return "checked";
							}
									
				    }
				}
				function AmenitiewheelchairAccess() {
					if(_.find(propertyDetails)) {
						var iswheelchairAccess = propertyDetails.wheelchairAccess;
							if(iswheelchairAccess == true){
							return "checked";
							}
									
				    }
				}
				function AmenitieGarageParking() {
					if(_.find(propertyDetails)) {
						var isGarageParking = propertyDetails.GarageParking;
							if(isGarageParking == true){
							return "checked";
							}
									
				    }
				}
				function AmenitieOffStreetParking() {
					if(_.find(propertyDetails)) {
						var isOffStreetParking = propertyDetails.OffStreetParking;
							if(isOffStreetParking == true){
							return "checked";
							}
									
				    }
				}
				//About Laundry
				function LaundryNone() {
					if(_.find(propertyDetails)) {
						var isNone = propertyDetails.None;
							if(isNone == true){
							return "checked";
							}
									
				    }
				}
				function LaundryInUnit() {
					if(_.find(propertyDetails)) {
						var isInUnit = propertyDetails.InUnit;
							if(isInUnit == true){
							return "checked";
							}
									
				    }
				}
				function LaundrySharedInBuilding() {
					if(_.find(propertyDetails)) {
						var isSharedInBuilding = propertyDetails.SharedInBuilding;
							if(isSharedInBuilding == true){
							return "checked";
							}
									
				    }
				}
				//About Pets
				function PetsNoPetsAllowed() {
					if(_.find(propertyDetails)) {
						var isNoPetsAllowed = propertyDetails.NoPetsAllowed;
							if(isNoPetsAllowed == true){
							return "checked";
							}
									
				    }
				}
				function PetsisCatsok() {
					if(_.find(propertyDetails)) {
						var isCatsok = propertyDetails.Catsok;
							if(isCatsok == true){
							return "checked";
							}
									
				    }
				}
				function PetsSmallDogsOk() {
					if(_.find(propertyDetails)) {
						var isSmallDogsOk = propertyDetails.SmallDogsOk;
							if(isSmallDogsOk == true){
							return "checked";
							}
									
				    }
				}
				function PetsLargeDogsOk() {
					if(_.find(propertyDetails)) {
						var isLargeDogsOk = propertyDetails.LargeDogsOk;
							if(isLargeDogsOk == true){
							return "checked";
							}
									
				    }
				}


				

    return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            
    <div className="profile_header">
            <ButtonAppBar></ButtonAppBar> 
			<div className="col-sm-12 profile_full">

						<div className="loader-container roommate_profile_banner">
									
													 <div className="back_btn">
														 <Button onClick={this.backPage}>Back to all Results</Button>					   
													  </div>
														
													<div className="roommate_profile_text">
														   
													   <div style={{display:"block"}}>
														  																						   
														</div>
														
														
													</div>
													
						</div>	

			<div className="col-sm-12">
				<div className="row">
					<div className="listProfileTopImg">
						<React.Fragment>
								<ul>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
										<li><a href="/"><img alt="" width="100px" height="100px"  src={require('./images/roommate_pr_picture.jpg')} /></a></li>
								</ul>
								
						</React.Fragment>
					 </div>
				</div>
			</div>
		   
			<div className="col-sm-9">	
			
			<div style={{
			  border: '1px solid rgba(0, 0, 0, 0.12)',
			  height: '100%',
			  width: '92%',
			 margin: '10px auto'
			 }}>
			</div>
			
            <div className="profile_description">
					<Typography variant="body1" >
					     {Description}
                    </Typography>
					

			</div>
			
			        <div className="profile_head_title">
	   
					   <div style={{display:"block", float: "left", width: "50%"}}>
						  <Typography variant="title" color="inherit">
							 Amenities
						  </Typography>
			 				<ul style={{ float: "left", width: "50%"  }}>
								<li><span>A/C </span> <input type="checkbox" checked={AmenitieAC()} value="AC" /></li>

								<li><span>Balcony/Deck</span> <input type="checkbox" checked={AmenitieBalconyDeck()} value="BalconyDeck" /></li>

								<li><span>Furnished</span> <input type="checkbox" checked={AmenitieFurnished()} value="Furnished" /></li>

								<li><span>Hardwood Floor</span > <input type="checkbox" checked={AmenitieHardwoodFloor()} value="HardwoodFloor" /></li>

								<li><span>Wheelchair Access</span> <input type="checkbox" checked={AmenitiewheelchairAccess()} value="wheelchairAccess" /></li>

								<li><span>Garage Parking</span> <input type="checkbox" checked={AmenitieGarageParking()} value="GarageParking" /></li>

								<li><span>Off-Street Parking</span> <input type="checkbox" checked={AmenitieOffStreetParking()} value="OffStreetParking" /></li>
																 
							</ul>

						</div>
						<div style={{display:"block", float:"right"}}>
							<Typography variant="title" color="inherit">
							 Laundry
						  </Typography> 
			 				<ul>

									<li><span>None</span> <input type="checkbox" checked={LaundryNone()} value="LaundryNone" /></li>

									<li><span>In Unit</span> <input type="checkbox" checked={LaundryInUnit()} value="GarageParking" /></li>

									<li><span>Shared/In-Building</span> <input type="checkbox" checked={LaundrySharedInBuilding()} value="OffStreetParking" /></li>

							</ul>
							<Typography variant="title" color="inherit">
							  Pets
						    </Typography> 
							<ul>

									<li><span>No Pets Allowed</span> <input type="checkbox" checked={PetsNoPetsAllowed()} value="PetsNoPetsAllowed" /></li>
									<li><span>Cats ok</span> <input type="checkbox" checked={PetsisCatsok()} value="PetsisCatsok" /></li>
									<li><span>Small Dogs ok</span> <input type="checkbox" checked={PetsSmallDogsOk()} value="PetsSmallDogsOk" /></li>
									<li><span>None</span> <input type="checkbox" checked={LaundryNone()} value="LaundryNone" /></li>
									<li><span>Large Dogs ok</span> <input type="checkbox" checked={PetsLargeDogsOk()} value="PetsLargeDogsOk" /></li>

							</ul>


						</div>
						
						
					</div>
		</div>
			<div className="col-sm-3 side_profile">
			<Grid className="MuiGrid-item-143 MuiGrid-grid-xs-1-171" item xs={1}>
							<Paper className={classes.paper + "MuiPaper-root-16 MuiPaper-elevation2-20 MuiPaper-rounded-17 Connect-ListingDetailsPage--paper-2"}>
							<div className="profile_variants">
									<h5>Property Address</h5>
									<h6 className="list_address">{Address}</h6>
									<span className="squre_box">{Price}</span>
									<span className="squre_box">{securityDeposit}</span> 
									<span className="squre_box">{Beds}</span>
									<span className="squre_box">{Baths}</span>
									<span className="squre_box">List Amenities</span>
									<span className="squre_box">Laundry</span>
									<span className="squre_box">Petsm</span>
									<span className="squre_box">{formattedDate}</span>
									
									<div className="clear">
									<Button className="schedule_btn">Schedule Showing</Button>
									</div>
									
									<div className="profile_part">
									<img alt="" style={{ width: '100px', height: '100px' }} className="dash_picture"  src={require('./images/profile-3.jpg')} />
									<div className="agent_name">
										<h5>{AgentName}</h5>
										<h6>Company</h6>
									</div>
									
									<p>Nam consequat suscipit dui, et porttitor purus tempus a. Praesent lorem est, tincidunt quis dignissim non, finibus non elit. Curabitur mollis semper cursus. In fringilla ante eget ipsum ultricies, a tempor mauris posuere. Donec pharetra ligula id mi scelerisque commodo. Pellentesque lorem velit, eleifend at mattis eget, ali</p>
									</div>
							
							</div>
											
							
							<div className="profile_btns">
								<Button className="profile_btn">Send Message</Button>
								<Button data-toggle="tab" className={'profile_btn btn '+ MarkActive +' btn-default btn-sm ' + (buttonClass.join(' '))}   onClick={() => this.onClickMarkFavorite('true')} >Favorite</Button>
							</div>
							<div className="pro_social_media">
							<ul>
								<li><a href="/">f</a></li>
								<li><a href="/">t</a></li>
								<li><a href="/">L</a></li>
							</ul> 
							
							</div>
							</Paper>
							
						  </Grid>
			</div>
		</div>		
		
		<div className="loader-container">
			                <div className="check_home_title">
		
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit" >
									 People interested in this property….
								  </Typography>
								  
								</div>
								
								
			                </div>
						
							
        </div>
			
		<div className="container">
			<div className="main_roomates">
				<React.Fragment>
					<div className="row">
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper + "MuiPaper-root-16 MuiPaper-elevation2-20 MuiPaper-rounded-17 Connect-ListingDetailsPage--paper-2"}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
							
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper + "MuiPaper-root-16 MuiPaper-elevation2-20 MuiPaper-rounded-17 Connect-ListingDetailsPage--paper-2"}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
														
							</Paper>
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper + "MuiPaper-root-16 MuiPaper-elevation2-20 MuiPaper-rounded-17 Connect-ListingDetailsPage--paper-2"}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper + "MuiPaper-root-16 MuiPaper-elevation2-20 MuiPaper-rounded-17 Connect-ListingDetailsPage--paper-2"}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper + "MuiPaper-root-16 MuiPaper-elevation2-20 MuiPaper-rounded-17 Connect-ListingDetailsPage--paper-2"}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
						   </Grid>
						   
						   
						  
					</div>
										
					 <div className="view_more">
								
					</div>
					
					
				</React.Fragment>
			</div>
			
		</div>
				
	
	     
		 
		<div className="row">
			<div className="loader-container ListingDetailPage_banner">
										
							
							<div className="listing_details_text banner_text">
								   
							   <div style={{display:"block"}}>
										
								<Typography variant="title" color="inherit" >
									Check out XYZ
								  </Typography>
								  <Typography variant="title" color="inherit">
									 Neighborhood…
								  </Typography>
								   									
								</div>
								
								<Button>Go Now!</Button>
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
ListingDetailsPage = connect()(ListingDetailsPage);

export default withStyles(styles)(ListingDetailsPage);

