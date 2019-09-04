import React, { useState } from "react";
import Moment from 'moment';
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

class DashboardProfile extends React.Component {

	 constructor(props) {
		super(props);
		this.state = {
			checked: false,
			ProfileView: {},
			ImInterestedView: [],
			Imtypeofperson: '',
			ImBedTime: '',
			ImDoYouDrink: '',
			ImDoYouSmoke: '',
			ImLikeGoOut: '',
			ImWorkhours: '',
			ImRelationshipStatus: ''

		};

		
			
	}

	

	componentWillMount() {
		const {loggedIn} = this.props;

		let AuthToken = authHeader();
		var { ImInterestedView  } = this.state;
		var findUrl = "https://nooklyn-flats-backend-apis.herokuapp.com/FindCurrentUserList";
		var bearer = AuthToken.Authorization;
				fetch(findUrl, {
				method: 'GET',
				headers: {
				'Authorization': bearer,
				'Content-Type': 'application/json'
				}
			}).then(response => response.json()).then(InterestedProfile => { 
				this.setState({
					ImInterestedView: InterestedProfile
													
				
				});
			
				return InterestedProfile;
			})
			.catch(error => this.setState({
				isLoading: false,
				message: 'Something bad happened' + error
			}));

	}
 

  componentDidMount() {
     
    let AuthToken = authHeader();
    var url = "https://nooklyn-flats-backend-apis.herokuapp.com/users/current";
    var bearer = AuthToken.Authorization;
    fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
        }
      }).then(response => response.json()).then(Userprofile => { 
          this.setState({
            ProfileView: Userprofile
          
           })
       //console.log(Userprofile);
        return Userprofile;
    })
    .catch(error => this.setState({
        isLoading: false,
        message: 'Something bad happened' + error
    }));
    
  }  
	
	render() {
	 
    const {classes } = this.props;
	const { checked, ProfileView, ImInterestedView } = this.state;
	var UserProfile = ProfileView;
	var user_DOB = ProfileView.DOB;
	var User_questions = ProfileView.questions;

	var ImInterestQuestion = ImInterestedView.questions;

	// Functiond defined for I m interested User
	function ImTypeofPersonQuiet() {
		if(_.find(ImInterestedView)) {

				var ImQuiet = ImInterestQuestion.typeofperson;
				if(ImQuiet == "Quiet"){
				return "active";
				}
						
	   }
	}

	function ImTypeofPersonLoud() {
		if(_.find(ImInterestedView)) {

				var ImLoud = ImInterestQuestion.typeofperson;
				
				if (ImLoud == "Loud") {
				return "active";
				}
			
		
	   }
	}
	function ImTypeofPersonTidy() {
		if(_.find(ImInterestedView)) {

			var ImTidy = ImInterestQuestion.typeofperson;
				
				if (ImTidy == "Tidy") {
					return "active";
					}
				
		
	   }
	}
	function ImTypeofPersonMessy() {
		if(_.find(ImInterestedView)) {

			var ImMessy = ImInterestQuestion.typeofperson;
				
				if (ImMessy == "Messy") {
				return "active";
				}
		
	   }
	}

	function ImDoYouDrinktrue() {
		if(_.find(ImInterestedView)) {

			var ImdoYouDrink = ImInterestQuestion.DoYouDrink;
				if(ImdoYouDrink == true){
				return "active";
				}
						
	   }
	}

	function ImDoYouDrinkfalse() {
		if(_.find(ImInterestedView)) {

			var ImdoYouDrink = ImInterestQuestion.DoYouDrink;
				if(ImdoYouDrink == false){
				return "active";
				}
						
	   }
	}

	function ImDoYouSmoketrue() {
		if(_.find(ImInterestedView)) {

			var DoYouSmoke = ImInterestQuestion.DoYouSmoke;
				if(DoYouSmoke == true){
				return "active";
				}
						
	   }
	}

	function ImDoYouSmokefalse() {
		if(_.find(ImInterestedView)) {

			var DoYouSmoke = ImInterestQuestion.DoYouSmoke;
				if(DoYouSmoke == false){
				return "active";
				}
						
	   }
	}

	function ImLikeGoOuttrue() {
		if(_.find(ImInterestedView)) {

			var LikeGoOut = ImInterestQuestion.LikeGoOut;
				if(LikeGoOut == true){
				return "active";
				}
						
	   }
	}

	function ImLikeGoOutfalse() {
		if(_.find(ImInterestedView)) {

			var LikeGoOut = ImInterestQuestion.LikeGoOut;
				if(LikeGoOut == false){
				return "active";
				}
						
	   }
	}

	function ImWorkHoursFullTime() {
		if(_.find(ImInterestedView)) {

			var Workhours = ImInterestQuestion.Workhours;
				if(Workhours == "FullTime"){
				return "active";
				}
						
	   }
	}
	function ImWorkHoursPartTime() {
		if(_.find(ImInterestedView)) {

			var Workhours = ImInterestQuestion.Workhours;
				
				if (Workhours == "PartTime") {
				return "active";
				}
			
		
	   }
	}
	function ImWorkHoursStudentFullTime() {
		if(_.find(ImInterestedView)) {

			var Workhours = ImInterestQuestion.Workhours;
				
				if (Workhours == "StudentFullTime") {
					return "active";
					}
				
		
	   }
	}
	function ImWorkHoursStudentPartTime() {
		if(_.find(ImInterestedView)) {

			var Workhours = ImInterestQuestion.Workhours;
				
				if (Workhours == "StudentPartTime") {
				return "active";
				}
		
	   }
	}

	function ImbedTime9() {
		if(_.find(ImInterestedView)) {

			var bedTime = ImInterestQuestion.BedTime;
				if(bedTime == "9-10pm"){
				return "active";
				}
						
	   }
	}
	function  ImbedTime10() {
		if(_.find(ImInterestedView)) {

			var bedTime = ImInterestQuestion.BedTime;
				
				if (bedTime == "10-11pm") {
				return "active";
				}
			
		
	   }
	}
	function  ImbedTime12() {
		if(_.find(ImInterestedView)) {

			var bedTime = ImInterestQuestion.BedTime;
				
				if (bedTime == "12-1am") {
					return "active";
					}
				
		
	   }
	}

	function ImRelationshipSingle() {
		if(_.find(ImInterestedView)) {

			var RelationshipStatus = ImInterestQuestion.RelationshipStatus;
				if(RelationshipStatus == "Single"){
				return "active";
				}
						
	   }
	}
	function ImRelationshiponRelationship() {
		if(_.find(ImInterestedView)) {

			var RelationshipStatus = ImInterestQuestion.RelationshipStatus;
				
				if (RelationshipStatus == "onRelationship") {
				return "active";
				}
			
		
	   }
	}
	function ImRelationshipMarried() {
		if(_.find(ImInterestedView)) {

			var RelationshipStatus = ImInterestQuestion.RelationshipStatus;
				
				if (RelationshipStatus == "Married") {
					return "active";
					}
				
		
	   }
	}
	

// Functions Defined For About Me
	if(_.find(ProfileView)) {
	   var User_socials = ProfileView.Socials;
	  
		if(User_socials.Facebook != ""){
            var User_Facebook = User_socials.Facebook;
		}
		if(User_socials.Twitter != ""){
			var User_Twitter = User_socials.Twitter;
		}
		if(User_socials.Instagram != ""){
			var User_Instagram = User_socials.Instagram;
		}
		if(User_socials.LinkedIN != ""){
			var User_LinkedIN = User_socials.LinkedIN;
		}
		if(ProfileView.Bio != ""){
			var bio = ProfileView.Bio;
		}
	   }
		
	 if(_.find(ProfileView)) {
	  var bedTime = User_questions.BedTime;
	   var DoYouDrink = User_questions.DoYouDrink;
	   var DoYouSmoke = User_questions.DoYouSmoke;
	   var LikeGoOut = User_questions.LikeGoOut;
	   var LookingInRoommates = User_questions.LookingInRoommates;
	   var LookingRoommate = User_questions.LookingRoommate;
	   var RelationshipStatus = User_questions.RelationshipStatus;
	   var Workhours = User_questions.Workhours;
	   var typeofperson = User_questions.typeofperson;
	}

		function TypeofPersonQuiet() {
			if(_.find(ProfileView)) {

					var typeofperson = User_questions.typeofperson;
					if(typeofperson == "Quiet"){
					return "active";
					}
							
		   }
		}
		function TypeofPersonLoud() {
			if(_.find(ProfileView)) {

					var typeofperson = User_questions.typeofperson;
					
					if (typeofperson == "Loud") {
					return "active";
					}
				
			
		   }
		}
		function TypeofPersonTidy() {
			if(_.find(ProfileView)) {

					var typeofperson = User_questions.typeofperson;
					
					if (typeofperson == "Tidy") {
						return "active";
						}
					
			
		   }
		}
		function TypeofPersonMessy() {
			if(_.find(ProfileView)) {

					var typeofperson = User_questions.typeofperson;
					
					if (typeofperson == "Messy") {
					return "active";
					}
			
		   }
		}


		function DoYouDrinktrue() {
			if(_.find(ProfileView)) {

				var doYouDrink = User_questions.DoYouDrink;
					if(doYouDrink == true){
					return "active";
					}
							
		   }
		}

		function DoYouDrinkfalse() {
			if(_.find(ProfileView)) {

				var doYouDrink = User_questions.DoYouDrink;
					if(doYouDrink == false){
					return "active";
					}
							
		   }
		}


		function DoYouSmoketrue() {
			if(_.find(ProfileView)) {

				var DoYouSmoke = User_questions.DoYouSmoke;
					if(DoYouSmoke == true){
					return "active";
					}
							
		   }
		}

		function DoYouSmokefalse() {
			if(_.find(ProfileView)) {

				var DoYouSmoke = User_questions.DoYouSmoke;
					if(DoYouSmoke == false){
					return "active";
					}
							
		   }
		}

		function LikeGoOuttrue() {
			if(_.find(ProfileView)) {

				var LikeGoOut = User_questions.LikeGoOut;
					if(LikeGoOut == true){
					return "active";
					}
							
		   }
		}

		function LikeGoOutfalse() {
			if(_.find(ProfileView)) {

				var LikeGoOut = User_questions.LikeGoOut;
					if(LikeGoOut == false){
					return "active";
					}
							
		   }
		}


		function WorkHoursFullTime() {
			if(_.find(ProfileView)) {

				var Workhours = User_questions.Workhours;
					if(Workhours == "FullTime"){
					return "active";
					}
							
		   }
		}
		function WorkHoursPartTime() {
			if(_.find(ProfileView)) {

				var Workhours = User_questions.Workhours;
					
					if (Workhours == "PartTime") {
					return "active";
					}
				
			
		   }
		}
		function WorkHoursStudentFullTime() {
			if(_.find(ProfileView)) {

				var Workhours = User_questions.Workhours;
					
					if (Workhours == "StudentFullTime") {
						return "active";
						}
					
			
		   }
		}
		function WorkHoursStudentPartTime() {
			if(_.find(ProfileView)) {

				var Workhours = User_questions.Workhours;
					
					if (Workhours == "StudentPartTime") {
					return "active";
					}
			
		   }
		}

		//iterate for Bed Time

		

		function bedTime9() {
			if(_.find(ProfileView)) {

				var bedTime = User_questions.BedTime;
					if(bedTime == "9-10pm"){
					return "active";
					}
							
		   }
		}
		function  bedTime10() {
			if(_.find(ProfileView)) {

				var bedTime = User_questions.BedTime;
					
					if (bedTime == "10-11pm") {
					return "active";
					}
				
			
		   }
		}
		function  bedTime12() {
			if(_.find(ProfileView)) {

				var bedTime = User_questions.BedTime;
					
					if (bedTime == "12-1am") {
						return "active";
						}
					
			
		   }
		}
		
		//Relationship Status

		function RelationshipSingle() {
			if(_.find(ProfileView)) {

				var RelationshipStatus = User_questions.RelationshipStatus;
					if(RelationshipStatus == "Single"){
					return "active";
					}
							
		   }
		}
		function RelationshiponRelationship() {
			if(_.find(ProfileView)) {

				var RelationshipStatus = User_questions.RelationshipStatus;
					
					if (RelationshipStatus == "onRelationship") {
					return "active";
					}
				
			
		   }
		}
		function RelationshipMarried() {
			if(_.find(ProfileView)) {

				var RelationshipStatus = User_questions.RelationshipStatus;
					
					if (RelationshipStatus == "Married") {
						return "active";
						}
					
			
		   }
		}
		
		
	Moment.locale('en');
    var dt = user_DOB;
	
	  return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            
            <div className="profile_header dasboard_header">
				<ButtonAppBar></ButtonAppBar> 
				<div className="col-12 dashboard_profile_page">
			        <div className="col-sm-2 side_dashboard_profile_list side_dashboard_list_desktop"> 
						<Grid item xs={1}>
						    <Paper className={classes.paper}> 
										<div className="dashboard_btns">
										<Button onClick={() => {
										this.props.history.push("/Dashboard");
										}} data-toggle="tab"  className="dashboard_btn  btn btn-default btn-sm">My Dashboard</Button>
										<Button onClick={() => {
										this.props.history.push("/DashboardProfile");
										}} data-toggle="tab"  className="dashboard_btn active btn btn-default btn-sm">Profile Page</Button>
										<Button onClick={() => {
										this.props.history.push("/DashboardMessage");
										}} data-toggle="tab"  className="dashboard_btn btn btn-default btn-sm">Messages</Button>
										<Button onClick={() => {
										this.props.history.push("/FavoriteListings");
										}} data-toggle="tab"  className="dashboard_btn btn btn-default btn-sm">Favorite Listings</Button>
										<Button onClick={() => {
										this.props.history.push("/FavoriteRoommates");
										}} data-toggle="tab"  className="dashboard_btn btn btn-default btn-sm">Favorite Roommates</Button>
										</div>
										
								</Paper>
										
						    </Grid>
					</div>
						
					<div className="col-sm-10">	
						<div className="loader-container">
						
						   			    <div className="dashboard_profile_bg banner_text">
											<div className="dash_head" style={{display:"block"}}>
											  <Typography variant="title" color="inherit" noWrap>
												{/* Profile Page  */}
												Welcome to {UserProfile.username}
											  </Typography>
											  
											</div>
								  
										    
										</div>
										
								<div className="togle_mobile_menu">		
								<div className={classes.root}>
												<Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
												<div className={classes.container}>
												  <Zoom in={checked}>
													<div className="col-sm-2 side_dashboard_list_mobile">
														<Grid item xs={1}>
																	<Paper elevation={4} className={classes.paper}> 
																	<div className="dashboard_btns">
																	<Button data-toggle="tab" data-target="#page0" className="dashboard_btn btn btn-default btn-sm">My Dashboard</Button>
																	<Button data-toggle="tab" data-target="#page1" className="dashboard_btn active btn btn-default btn-sm">Profile Page</Button>
																	<Button data-toggle="tab" data-target="#page2" className="dashboard_btn btn btn-default btn-sm">Messages</Button>
																	<Button data-toggle="tab" data-target="#page3" className="dashboard_btn btn btn-default btn-sm">Favorite Listings</Button>
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
						
					</div>
												
					
					<div className="col-lg-3 dashboard_sidebar_profile mobile_sidebar_profile">
					
					<Grid className="profile_pic_section" item xs={1}>
							<Paper className={classes.paper}>
							<h5>{ProfileView.username}</h5>
							<img alt="" style={{ width: '150px', height: '150px' }} className="dash_picture"  src={require('./images/profile-3.jpg')} />
							<ul className="edit_remove">
							<li><a href="/">Edit</a></li>
							<li><a href="/">Remove</a></li>
							</ul>
							</Paper>
							
				    </Grid>
					
					<Grid className="profile_dash_gallery" item xs={1}>
							<Paper className={classes.paper}>
							<h5>Update Info</h5>
							<ul className="social_media_profile">
							<li><label>Name</label><a href="/Edit-DashboardProfile">{UserProfile.username}</a></li>
							<li><label>Password</label><input  type="password" disabled class="pswd" value="......" /></li>
							<li><label>DOB</label><a href="/Edit-DashboardProfile">{Moment(dt).format('d MMM YYYY')}</a></li>
							<li><label>Gender</label><a href="/Edit-DashboardProfile">{UserProfile.gender}</a></li>
							</ul>
							</Paper>
							
				    </Grid>
					
					<Grid className="profile_cover_section" item xs={1}>
							<Paper className={classes.paper}>
							<h5>Cover Photo</h5>
							<img alt="" style={{ width: '280px', height: '150px' }}  src={require('./images/abstract-background-PUZKTEQ.jpg')} />
							<ul className="edit_remove">
							<li><a href="/">Edit</a></li>
							<li><a href="/">Remove</a></li>
							</ul>
							</Paper>
							
				    </Grid>
					<Grid className="profile_dash_gallery" item xs={1}>
							<Paper className={classes.paper}>
							<h5>Social Media</h5>
							<ul className="social_media_profile">
								<li><label>Facebook</label><a href="/Edit-DashboardProfile">{User_socials ? User_Facebook : ''}</a></li>
								<li><label>Twitter</label><a href="/Edit-DashboardProfile">{User_socials ? User_Twitter : ''}</a></li>
								<li><label>Instagram</label><a href="/Edit-DashboardProfile">{User_socials ? User_Instagram: '' }</a></li>
								<li><label>LinkedIN</label><a href="/Edit-DashboardProfile">{User_socials ? User_LinkedIN: ''}</a></li>
							</ul>
							</Paper>
							
				    </Grid>
					<Grid className="profile_dash_gallery" item xs={1}>
							<Paper className={classes.paper}>
							<h5>Photo Gallery</h5>
							<ul className="profile_galleries">
							<li><img alt="" style={{ width: '80px', height: '80px' }}  src={require('./images/roommate_pr_picture-80x80.jpg')} /></li>
							<li><img alt="" style={{ width: '80px', height: '80px' }}  src={require('./images/roommate_pr_picture-80x80.jpg')} /></li>
							<li><img alt="" style={{ width: '80px', height: '80px' }}  src={require('./images/roommate_pr_picture-80x80.jpg')} /></li>
							<li><img alt="" style={{ width: '80px', height: '80px' }}  src={require('./images/roommate_pr_picture-80x80.jpg')} /></li>
							<li><img alt="" style={{ width: '80px', height: '80px' }}  src={require('./images/roommate_pr_picture-80x80.jpg')} /></li>
							<li className="edit_gallery_btn"><a href="/Edit-DashboardProfile"><span>Edit Gallery</span></a></li>
													
							</ul>
							</Paper>
							
				    </Grid>
					</div>
					
					
					<div className="col-lg-7 dashboard_profile_description">
					<div className="dash_profile_desc" style={{display:"block"}}>
						<Typography className="dash_profile_title"  component="h2" variant="h1" gutterBottom>
							Bio
						</Typography>
						<div className="profile_desc_main">
							<Typography variant="body2" >
								{bio ? bio : ''}
							</Typography>
						</div>
					</div>
					
					<div className="dashboard_profile_grid">
					<Typography className="dash_profile_title"  component="h2" variant="h1" gutterBottom>
							About Me
						</Typography>
					<div className="row">
					    
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Type of Person</h4>
							<div className="type_grid">
						
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${TypeofPersonQuiet()} btn btn-default btn-sm`}>Quiet</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${TypeofPersonLoud()} btn btn-default btn-sm`}>Loud</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${TypeofPersonTidy()} btn btn-default btn-sm`}>Tidy</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${TypeofPersonMessy()} btn btn-default btn-sm`}>Messy</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Do you drink?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${DoYouDrinktrue()} btn btn-default btn-sm`} >Yes</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${DoYouDrinkfalse()} btn btn-default btn-sm`}>No</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Do you smoke?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${DoYouSmoketrue()} btn btn-default btn-sm`}>Yes</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${DoYouSmokefalse()} btn btn-default btn-sm`}>No</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  
					</div>	  
					
					<div className="row">
					    
						<Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Likes to go out?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${LikeGoOuttrue()} btn btn-default btn-sm`}>Yes</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${LikeGoOutfalse()} btn btn-default btn-sm`}>No</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Work Hours</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${WorkHoursFullTime()} btn btn-default btn-sm`}>Full-time</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${WorkHoursPartTime()} btn btn-default btn-sm`}>Part-time</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${WorkHoursStudentFullTime()} btn btn-default btn-sm`}>Student<br/> (Full-time)</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${WorkHoursStudentPartTime()} btn btn-default btn-sm`}>Student <br/> (Part-time)</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Bed Time</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ bedTime9()} btn btn-default btn-sm`}>9-10pm</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ bedTime10()} btn btn-default btn-sm`}>10-11pm</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ bedTime12()} btn btn-default btn-sm`}>12-1am</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">I work <br/>nights</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  
					</div>	
					
					<div className="row" style={{textAlign:"center", }}>
					    
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Relationship Status</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ RelationshipSingle()} btn btn-default btn-sm`}>Single</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ RelationshiponRelationship()} btn btn-default btn-sm`}>In a <br/>Relationship</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ RelationshipMarried()} btn btn-default btn-sm`}>Married</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						  
					</div>	
					
					
						  
					</div>
					
					<div className="dashboard_profile_grid">
					<Typography className="dash_profile_title"  component="h2" variant="h1" gutterBottom>
							I’m interested in…   
						</Typography>
					<div className="row">
					    
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Type of Person</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImTypeofPersonQuiet()} btn btn-default btn-sm`}>Quiet</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImTypeofPersonLoud()} btn btn-default btn-sm`}>Loud</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImTypeofPersonTidy()} btn btn-default btn-sm`}>Tidy</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImTypeofPersonMessy()} btn btn-default btn-sm`}>Messy</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Do you drink?</h4> 
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImDoYouDrinktrue()} btn btn-default btn-sm`}>Yes</Button>
							<Button data-toggle="tab" data-target="#page0"className={`type_btn ${ ImDoYouDrinkfalse()} btn btn-default btn-sm`}>No</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Do you smoke?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImDoYouSmoketrue()} btn btn-default btn-sm`}>Yes</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImDoYouSmokefalse()} btn btn-default btn-sm`}>No</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  
					</div>	  
					
					<div className="row">
					    
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Likes to go out?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0"  className={`type_btn ${ ImLikeGoOuttrue()} btn btn-default btn-sm`}>Yes</Button>
							<Button data-toggle="tab" data-target="#page0"  className={`type_btn ${ ImLikeGoOutfalse()} btn btn-default btn-sm`}>No</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						  
						   <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Work Hours</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImWorkHoursFullTime()} btn btn-default btn-sm`}>Full-time</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImWorkHoursPartTime()} btn btn-default btn-sm`}>Part-time</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImWorkHoursStudentFullTime()} btn btn-default btn-sm`}>Student <br/> (Full-time)</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImWorkHoursStudentPartTime()} btn btn-default btn-sm`}>Student<br/>(Part-time)</Button>
							</div> 
						    </Paper>
							
						  </Grid>
						  
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Bed Time</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0"  className={`type_btn ${ ImbedTime9()} btn btn-default btn-sm`}>9-10pm</Button>
							<Button data-toggle="tab" data-target="#page0"  className={`type_btn ${ ImbedTime10()} btn btn-default btn-sm`}>10-11pm</Button>
							<Button data-toggle="tab" data-target="#page0"  className={`type_btn ${ ImbedTime12()} btn btn-default btn-sm`}>12-1am</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn btn btn-default btn-sm">I work <br/>nights</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  
					</div>	
					
					<div className="row" style={{textAlign:"center", }}>
					    
						   <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Relationship Status</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImRelationshipSingle()} btn btn-default btn-sm`}>Single</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImRelationshiponRelationship()} btn btn-default btn-sm`}>In a <br/>Relationship</Button>
							<Button data-toggle="tab" data-target="#page0" className={`type_btn ${ ImRelationshipMarried()} btn btn-default btn-sm`}>Married</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						  
					</div>	
					
					
						  
					</div>
					
					
					</div>
					
					
					
					<div className="col-lg-3 dashboard_sidebar_profile desktop_sidebar_profile">
					
					<Grid className="profile_pic_section" item xs={1}>
							<Paper className={classes.paper}>
							<a href="/Edit-DashboardProfile"><h5> Edit Your Profile</h5></a>
							<img alt="" style={{ width: '150px', height: '150px' }} className="dash_picture"  src={require('./images/profile-3.jpg')} />
							<ul className="edit_remove">
							<li><a href="/">Edit</a></li>
							<li><a href="/">Remove</a></li>
							</ul>
							</Paper>
							
				    </Grid>
					
					<Grid className="profile_dash_gallery" item xs={1}>
							<Paper className={classes.paper}>
							<h5>Update Info</h5>
							<ul className="social_media_profile">
							<li><label>Name</label><a href="/Edit-DashboardProfile">{UserProfile.username}</a></li>
							<li><label>Password</label><input  type="password" disabled class="pswd" value="......" /></li>
							<li><label>DOB</label><a href="/Edit-DashboardProfile">{Moment(dt).format('d MMM YYYY')}</a></li>
							<li><label>Gender</label><a href="/Edit-DashboardProfile">{UserProfile.gender}</a></li>
							</ul>
							</Paper>
							
				    </Grid>
					
					<Grid className="profile_cover_section" item xs={1}>
							<Paper className={classes.paper}>
							<h5>Cover Photo</h5>
							<img alt="" style={{ width: '280px', height: '150px' }}  src={require('./images/abstract-background-PUZKTEQ.jpg')} />
							<ul className="edit_remove">
							<li><a href="/Edit-DashboardProfile">Edit</a></li>
							<li><a href="/">Remove</a></li>
							</ul>
							</Paper>
							
				    </Grid>
					<Grid className="profile_dash_gallery" item xs={1}>
							<Paper className={classes.paper}>
							<h5>Social Media</h5> 
							<ul className="social_media_profile">
							    <li><label>Facebook</label><a href="/Edit-DashboardProfile">{User_socials ? User_Facebook : ''}</a></li>
								<li><label>Twitter</label><a href="/Edit-DashboardProfile">{User_socials ? User_Twitter : ''}</a></li>
								<li><label>Instagram</label><a href="/Edit-DashboardProfile">{User_socials ? User_Instagram: '' }</a></li>
								<li><label>LinkedIN</label><a href="/Edit-DashboardProfile">{User_socials ? User_LinkedIN: ''}</a></li>
							</ul>
							</Paper>
							
				    </Grid>
					<Grid className="profile_dash_gallery" item xs={1}>
							<Paper className={classes.paper}>
							<h5>Photo Gallery</h5>
							<ul className="profile_galleries">
							<li><img alt="" style={{ width: '80px', height: '80px' }}  src={require('./images/roommate_pr_picture-80x80.jpg')} /></li>
							<li><img alt="" style={{ width: '80px', height: '80px' }}  src={require('./images/roommate_pr_picture-80x80.jpg')} /></li>
							<li><img alt="" style={{ width: '80px', height: '80px' }}  src={require('./images/roommate_pr_picture-80x80.jpg')} /></li>
							<li><img alt="" style={{ width: '80px', height: '80px' }}  src={require('./images/roommate_pr_picture-80x80.jpg')} /></li>
							<li><img alt="" style={{ width: '80px', height: '80px' }}  src={require('./images/roommate_pr_picture-80x80.jpg')} /></li>
							<li className="edit_gallery_btn"><a href="/Edit-DashboardProfile"><span>Edit Gallery</span></a></li>
													
							</ul>
							</Paper>
							
				    </Grid>
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


function mapStateToProps(state) {
	const { loggedIn, user } = state.authentication;
    
    return {
         loggedIn, user
    };
}


//export default withTheme()(RoommateFinderResultVariationTwo);


DashboardProfile = connect(mapStateToProps)(DashboardProfile);

export default withStyles(styles)(DashboardProfile);
