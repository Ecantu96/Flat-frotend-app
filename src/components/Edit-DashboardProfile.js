import React, { useState } from "react";
import Moment from 'moment';
import {connect} from "react-redux";
import { AppContext } from '../provider/AppContext';
import AppProvider from "../provider/AppContext";
import { userActions } from '../actions';
import ButtonAppBar from './TopBar';
import FooterBar from './FooterBar';
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
import { SERVICEURL } from '../config/config.js';
  
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

class EditDashboardProfile extends React.Component {

	 constructor(props) {
		super(props);
		this.state = {
			checked: false,
			username: '',
            password: '',
            gender: '',
			DOB: '',
			Bio: '',
			submitted: false,
			Interestsubmitted: false,
			ProfileView: {},
			Facebook: '',
			Socials:{
				Facebook: '',
				Twitter: '',
				Instagram: '',
				LinkedIN: '',
			},
			typeofperson: 'Quiet',
			DoYouDrink: 'true',
			DoYouSmoke: 'true',
			LikeGoOut: 'true',
			Workhours: 'FullTime',
			BedTime: '9-10pm',
			RelationshipStatus: 'Single',
			file: null
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

		this.ontypeofperson = this.ontypeofperson.bind(this);
		this.onDoYouDrink = this.onDoYouDrink.bind(this);
		this.onDoYouSmoke = this.onDoYouSmoke.bind(this);
		this.onLikeGoOut = this.onLikeGoOut.bind(this);
		this.onWorkhours = this.onWorkhours.bind(this);
		this.onBedTime = this.onBedTime.bind(this);
		this.onRelationshipStatus = this.onRelationshipStatus.bind(this);

		this.handleClickSubmit = this.handleClickSubmit.bind(this);
	}

	onChange(e) {
		const {files} = e.target;
		this.setState({
		       file: files[0]
	      }
		);
						
	  }

	onFormSubmit(e){
		e.preventDefault();
		const {file} = this.state;
		console.log(file);
		const { dispatch } = this.props;
		var imageName = file.name;
		var imageType = file.type;
		var imagePath = file.webkitRelativePath;
		let ProfileImage = {
			imageName, imageType, imagePath
		}
		console.log("ProfileImage Object");
		console.log(ProfileImage);

		 dispatch(userActions.ProfileImageUploadAndUpdate(ProfileImage));
    }
   


	ontypeofperson(e) {
		const target = e.target;
		    this.setState({typeofperson: e.currentTarget.value });
	 }

	 onDoYouDrink(e) {
		const target = e.target;
		    this.setState({DoYouDrink: e.currentTarget.value });
	 }

	 onDoYouSmoke(e) {
		const target = e.target;
		    this.setState({DoYouSmoke: e.currentTarget.value });
	 }
	 
	 onLikeGoOut(e) {
		 const target = e.target;
		    this.setState({LikeGoOut: e.currentTarget.value });
	 }

	 onWorkhours(e) {
		 const target = e.target;
		    this.setState({Workhours: e.currentTarget.value });
	 }

	 onBedTime(e) {
		 const target = e.target;
		    this.setState({BedTime: e.currentTarget.value });
	 }
	
	 onRelationshipStatus(e) {
		 const target = e.target;
		    this.setState({RelationshipStatus: e.currentTarget.value });
	 }


	
		
	handleClickSubmit(e) {
		e.preventDefault();
		this.setState({ Interestsubmitted: true });
		//console.log("typeofperson");
		const { typeofperson, DoYouDrink, DoYouSmoke, LikeGoOut, Workhours, BedTime, RelationshipStatus} = this.state;
			const { dispatch } = this.props;
		
		let questions = {
			questions: {
				typeofperson: typeofperson,
				DoYouDrink: DoYouDrink,
				DoYouSmoke: DoYouSmoke,
				LikeGoOut: LikeGoOut,
				Workhours: Workhours,
				BedTime: BedTime,
				RelationshipStatus: RelationshipStatus


			}
		};
	   //console.log(questions);
	  
		setTimeout(() =>  dispatch(userActions.SaveUpdateUserInterest(questions)), 100);

		setTimeout(() => this.props.history.push("/DashboardProfile"), 1000);

	}

 handleChange(e) {
	   // alert(e.target);
	   const { name, value } = e.target;
	   this.setState({ [name]: value });
	          
	}
	
 handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password, gender, Bio, DOB,  Facebook, Twitter, Instagram, LinkedIN} = this.state;
     	const { dispatch } = this.props;
     	let Socials = {
			Facebook:Facebook,
			Twitter:Twitter,
			Instagram:Instagram,
			LinkedIN:LinkedIN
     	};

      	let user = {
            username, password, gender, DOB, Bio, Socials
    	}

          //console.log(user) ;
         setTimeout(() =>  dispatch(userActions.userupdate(user)), 100);

         setTimeout(() => this.props.history.push("/DashboardProfile"), 1000);
  }


  componentWillMount() {
     
	let AuthToken = authHeader();
	var url = `${SERVICEURL}/users/current`;
     var bearer = AuthToken.Authorization;
    fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
        }
      }).then(response => response.json()).then(Userprofile => { 
          this.setState({
            ProfileView: Userprofile,
                username:Userprofile.username,
                Bio:Userprofile.Bio,
            	gender: Userprofile.gender,
            	DOB: Userprofile.DOB,
            	gender: Userprofile.gender,
            	Facebook: Userprofile.Socials.Facebook,
            	Twitter: Userprofile.Socials.Twitter,
            	Instagram: Userprofile.Socials.Instagram,
            	LinkedIN: Userprofile.Socials.LinkedIN
            	            	 
          
           });
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
    const { updating, type, message } = this.props;
	const { checked, ProfileView, data, Quiet, Loud, Tidy, Messy, InterstedUpdating, Interestsubmitted, FullTime, PartTime, StudentFullTime, StudentPartTime, Single, onRelationship, Married, Yes, No  } = this.state;
	const { username, password, Bio, submitted, gender, DOB, questions, Facebook, Socials, Twitter, Instagram, LinkedIN  } = this.state;

	Moment.locale('en');
    var dt = DOB;
	
	var UserProfile = ProfileView;
	var user_DOB = ProfileView.DOB;
	var User_questions = ProfileView.questions;

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
										<div className="dashboard_btns hide">
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
														<Grid  item xs={1}>
																	<Paper elevation={4} className={classes.paper}> 
																	<div className="dashboard_btns hide">
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
									<form action="/profile" method="post" enctype="multipart/form-data">
										<input type="file" name="avatar" />
									</form>
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
										<li>
										<label>Name</label>
										
										<input 
										type="text" 
										className="form-control" 
										placeholder="Please enter your name"
										name="username" 
										value={this.state.username} 
										onChange={this.handleChange} 
										/>

									
										</li>
										<li>
										      <label>Password</label>
											  
											  <input type="password" className="form-control" placeholder="......" name="password" value={password} onChange={this.handleChange} />
										</li>
										<li>
										   <label>DOB</label>
										   										   
										    <input type="text" className="form-control" placeholder="Please enter your DOB" name="DOB" value={DOB}
                                            onChange={this.handleChange} />
										   
										 </li>
										<li>
										
										    <label>Gender</label>
											
											 <select name="gender" onChange={this.handleChange} value={this.state.gender}>
												<option value="Male">Male</option>
												<option value="Female">Female</option>
											</select>
										   
										   </li>
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
										<li>
										    <label>Facebook</label>
										    <input type="text" className="form-control" placeholder="Please Enter the Facebook Link" name="Facebook" value={this.state.Facebook} onChange={this.handleChange} />

										 </li>
										<li><label>Twitter</label>

										 <input type="text" className="form-control" placeholder="Please Enter the Twitter Link" name="Twitter" value={this.state.Twitter} onChange={this.handleChange} />
										</li>
										<li><label>Instagram</label>
											<input type="text" className="form-control" placeholder="Please Enter the Instagram Link" name="Instagram" value={this.state.Instagram} onChange={this.handleChange} />
										</li>
										<li><label>LinkedIN</label>
										<input type="text" className="form-control" placeholder="Please Enter the LinkedIN Link" name="LinkedIN" value={this.state.LinkedIN} onChange={this.handleChange} />
										</li>
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
									<li className="edit_gallery_btn"><a href="/"><span>Edit Gallery</span></a></li>
															
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
								<input type="text-area" className="form-control" placeholder="Please Enter your Bio" name="Bio" value={this.state.Bio} onChange={this.handleChange} />
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
				 <form name="form" >	
					<div className="dashboard_profile_grid">
					<Typography className="dash_profile_title"  component="h2" variant="h1" gutterBottom>
							I’m interested in…
						</Typography>
					<div className="row">
					    
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Type of Person</h4>
							<div className="type_grid">

							    <label>
								Quiet
								<input  
									type="radio" 
									id="Quiet"  
									name="typeofperson" 
									value={'Quiet'}
									onChange={this.ontypeofperson.bind(this)} 
									checked={this.state.typeofperson === 'Quiet'}
									/>
								</label>
								
								<label>
								Loud
								<input  
									type="radio" 
									id="Loud" 
									name="typeofperson"    
									value={'Loud'}
									onChange={this.ontypeofperson.bind(this)} 
									checked={this.state.typeofperson === 'Loud'}
								/>
								</label>

								<label>
								Tidy
								<input type="radio" 
									id="Tidy"
									name="typeofperson"
									value={'Tidy'}
									onChange={this.ontypeofperson.bind(this)} 
									checked={this.state.typeofperson === 'Tidy'}
								/>
								</label>

								<label>
								Messy
								<input
									type="radio"
									id="Messy"
									name="typeofperson"
									value={'Messy'}
									onChange={this.ontypeofperson.bind(this)} 
									checked={this.state.typeofperson === 'Messy'} 
								/>
								</label> 
							</div>
						    </Paper>
							
						  </Grid>
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Do you drink?</h4>
							<div className="drink_grid">

							<label>
							  Yes
								<input 
									    type="radio" 
									    name="DoYouDrink"
										value={'true'}
									    onChange={this.onDoYouDrink.bind(this)} 
									    checked={this.state.DoYouDrink === 'true'}   
									/>
							</label> 
							<label>
							No
								<input
								    type="radio"
								    name="DoYouDrink"
									value={'false'}
									onChange={this.onDoYouDrink.bind(this)} 
									checked={this.state.DoYouDrink === 'false'}   
								/>
							</label> 

																			
							</div>
						    </Paper>
							
						  </Grid>
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Do you smoke?</h4> 
							<div className="drink_grid">

							<label>
								Yes
								<input
								  type="radio"
								  name="DoYouSmoke"
								  value={'true'}
									onChange={this.onDoYouSmoke.bind(this)} 
									checked={this.state.DoYouSmoke === 'true'}
								/>
							</label> 
							<label>
								No
								<input 
								 type="radio" 
								  name="DoYouSmoke"
								  value={'false'}
									onChange={this.onDoYouSmoke.bind(this)} 
									checked={this.state.DoYouSmoke === 'false'}
								 />
							</label> 

							
							</div>
						    </Paper>
							
						  </Grid>
						  
					</div>	  
					
					<div className="row">
					    
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Likes to go out?</h4>
							<div className="drink_grid">

							<label>
								Yes
								<input
								  type="radio" 
								  name="LikeGoOut" 
								  value={'true'}
								  onChange={this.onLikeGoOut.bind(this)} 
								  checked={this.state.LikeGoOut === 'true'}
								/>
							</label> 
							<label>
								No
								<input  
								type="radio"  
								name="LikeGoOut" 
								value={'false'}
								  onChange={this.onLikeGoOut.bind(this)} 
								  checked={this.state.LikeGoOut === 'false'}
							/>
							</label> 


														
							</div>
						    </Paper>
							
						  </Grid>
						  
						   <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Work Hours</h4>
							<div className="type_grid">

							<label>
							Full-time 
								<input 
									type="radio"
									id="FullTime" 
									name="Workhours" 
									value={'FullTime'}
									onChange={this.onWorkhours.bind(this)} 
									checked={this.state.Workhours === 'FullTime'} 
								/>
							</label>
							
							
							<label>
							Part-time
								<input
								  type="radio"
								  id="PartTime" 
								  name="Workhours"
								  value={'PartTime'}
								  onChange={this.onWorkhours.bind(this)} 
								  checked={this.state.Workhours === 'PartTime'} 
								/>
							</label>

							<label>
							Student <br /> (Full-Time)
								<input 
								  type="radio"
								  id="StudentFullTime"
								  name="Workhours"
								  value={'StudentFullTime'}
								  onChange={this.onWorkhours.bind(this)} 
								  checked={this.state.Workhours === 'StudentFullTime'} 
								/>
							</label>

							<label>
							Student <br /> (Part-Time)
								<input 
								   type="radio" 
								   id="StudentPartTime"
								   name="Workhours" 
								   value={'StudentPartTime'}
								  onChange={this.onWorkhours.bind(this)} 
								  checked={this.state.Workhours === 'StudentPartTime'}  
								/>
							</label>
							
							</div> 
						    </Paper>
							
						  </Grid>
						  
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Bed Time</h4>
							<div className="type_grid">

							<label>
							9-10pm
								<input 
								  type="radio" 
								  id="9-10pm"  
								  name="BedTime" 
								  value={'9-10pm'}
								  onChange={this.onBedTime.bind(this)} 
								  checked={this.state.BedTime === '9-10pm'}  
								/>
							</label>

							
							<label>
							10-11pm
								<input 
								   type="radio" 
								   id="10-11pm"  
								   name="BedTime" 
								   value={'10-11pm'}
								   onChange={this.onBedTime.bind(this)} 
								   checked={this.state.BedTime === '10-11pm'}  
								/>
							</label>

							<label>
							12-1am
								<input
								   type="radio" 
								   id="12-1am"  
								   name="BedTime" 
								   value={'12-1am'}
								   onChange={this.onBedTime.bind(this)} 
								   checked={this.state.BedTime === '12-1am'}  
								/>
							</label>

					    </div>
						    </Paper>
							
						  </Grid>
						  
					</div>	
					
				    <div className="row" style={{textAlign:"center", }}>
					    
						   <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Relationship Status</h4>
							<div className="type_grid">

							<label>
								Single
									<input 
										type="radio" 
										id="Single"  
										name="RelationshipStatus" 
										value={'Single'}
										onChange={this.onRelationshipStatus.bind(this)} 
										checked={this.state.RelationshipStatus === 'Single'}  
									/>
								</label>

								<label>
								In a <br/>Relationship
									<input  type="radio"
									   id="onRelationship"  
									   name="RelationshipStatus" 
									   value={'onRelationship'}
										onChange={this.onRelationshipStatus.bind(this)} 
										checked={this.state.RelationshipStatus === 'onRelationship'}    
									/>
								</label>

								<label>
								Married
									<input 
										type="radio" 
										id="Married"  
										name="RelationshipStatus" 
										value={'Married'}
										onChange={this.onRelationshipStatus.bind(this)} 
										checked={this.state.RelationshipStatus === 'Married'}    
									/>
								</label>


												
							</div>
						    </Paper>
							
						  </Grid>
						  
					    </div>	
					
					
						  
					</div>
					
					<div className="form-group text-center">
                                <button  onClick={this.handleClickSubmit} className="btn btn-primary reg_btn">Update</button>
                                
                                {InterstedUpdating &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }

                                <div>
                                    {Interestsubmitted && type=='alert-danger' &&
                                        <div className="help-block">{message}</div>
                                    }
                                </div>
                            </div>
                </form>	
					
					
					</div>
					
					
					
					
					<div className="col-lg-3 dashboard_sidebar_profile desktop_sidebar_profile">

					
					
					    <form name="form" onSubmit={this.handleSubmit}>	
							
							<Grid className="profile_pic_section" item xs={1}>
									<Paper className={classes.paper}>
									<h5>{ProfileView.username}</h5>
									<img alt="" style={{ width: '150px', height: '150px' }} className="dash_picture"  src={require('./images/profile-3.jpg')} />
									<ul className="edit_remove">
									
									

									
									<li><a href="/">Remove</a></li>
									</ul>
									</Paper>
									
							</Grid>
							
							<Grid className="profile_dash_gallery" item xs={1}>
									<Paper className={classes.paper}>
									<h5>Update Info</h5>


									<ul className="social_media_profile">
										<li>
										<label>Name</label>
										
										<input 
										type="text" 
										className="form-control" 
										placeholder="Please enter your name"
										name="username" 
										value={this.state.username} 
										onChange={this.handleChange} 
										/>

									
										</li>
										<li>
										      <label>Password</label>
											  
											  <input type="password" className="form-control" placeholder="......" name="password" value={password} onChange={this.handleChange} />
										</li>
										<li>
										   <label>DOB Nk</label>
										   										   
										    <input type="text" className="form-control" placeholder="Please enter your DOB" name="DOB" value={dt}
                                            onChange={this.handleChange} />
										   
										 </li>
										<li>
										
										    <label>Gender</label>
											 <select name="gender" onChange={this.handleChange} value={this.state.gender}>
												<option value="">Select Option</option>
											   <option value="Male">Male</option>
											   <option value="Female">Female</option>
										   </select>
										   
										   </li>
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
										<li>
										    <label>Facebook</label>
										    <input type="text" className="form-control" placeholder="Please Enter the Facebook Link" name="Facebook" value={this.state.Facebook} onChange={this.handleChange} />

										 </li>
										<li><label>Twitter</label>

										 <input type="text" className="form-control" placeholder="Please Enter the Twitter Link" name="Twitter" value={this.state.Twitter} onChange={this.handleChange} />
										</li>
										<li><label>Instagram</label>
											<input type="text" className="form-control" placeholder="Please Enter the Instagram Link" name="Instagram" value={this.state.Instagram} onChange={this.handleChange} />
										</li>
										<li><label>LinkedIN</label>
										<input type="text" className="form-control" placeholder="Please Enter the LinkedIN Link" name="LinkedIN" value={this.state.LinkedIN} onChange={this.handleChange} />
										</li>
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
									<li className="edit_gallery_btn"><a href="/"><span>Edit Gallery</span></a></li>
															
									</ul>
									</Paper>
									
							</Grid>
							
							
						<div className="form-group text-center">
                                <button className="btn btn-primary reg_btn">Update</button>
                                
                                {updating &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }

                                <div>
                                    {submitted && type=='alert-danger' &&
                                        <div className="help-block">{message}</div>
                                    }
                                </div>
                            </div>
                        </form>		
					</div>
					
					<form onSubmit={this.onFormSubmit} action="" className="update_profile" method="post" enctype="multipart/form-data">
									
						<input type="file" webkitRelativePath name="avatar" accept=".gif,.jpg,.jpeg,.png" onChange= {this.onChange}  />
						<button type="submit">Upload</button>
					  </form>		 	
					
					
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
    const { updating, InterstedUpdating } = state.authentication;
    const { type, message } = state.alert;
    return {
        updating, InterstedUpdating, type, message
    };
}



EditDashboardProfile = connect(mapStateToProps)(EditDashboardProfile);

export default withStyles(styles)(EditDashboardProfile);
