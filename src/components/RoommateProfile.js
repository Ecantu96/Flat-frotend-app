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
import { SERVICEURL } from '../config/config.js';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;
  
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

	constructor(props) {
		super(props);
		this.state = {
		 Roommate_Id: this.props.location.state.Roommate_Id,
		  error: null,
		  isLoaded: false,
		  RoommateDetails: [],
		  MatchRoommate: [],
		  MarkActive: "active",
		  loading: true	
		};

							
	}

	onClickRoommateId = (Roommate_Id, e) => {
		var id = Roommate_Id;
		var url = `${SERVICEURL}/users/viewRoommateProfile/${id}`;
		let AuthToken = authHeader();
		fetch(url, {
			method: 'GET',
					headers: {
					'Authorization': AuthToken.Authorization,
					'Content-Type': 'application/json'
					},
			}).then(response => response.json())
			  .then(res => { 
					if(res[1] == undefined){
					this.setState({
						RoommateDetails: res,
						loading: false
					});
				}else{
					this.setState({
						RoommateDetails: res[0],
						favouriteRoommate_res: res[1],
						loading: false
	
					});
				}
				
				//return res;
				
		})
		.catch(error => this.setState({
			      loading: true,
					message: 'Something bad happened' + error
		}));
	}

	componentWillMount() {
		var url = `${SERVICEURL}/users/userRole`;
		let AuthToken = authHeader();
		fetch(url, {
			method: 'GET',
			headers: {
			  'Authorization':  AuthToken.Authorization,
			  'Content-Type': 'application/json'
			}
		  }).then(response => response.json()).then(result => { 
		   
			  this.setState({
				Role: result,
				loading: false
			   
			   })
			 return result;
		})
		.catch(error => this.setState({
			loading: true,
			message: 'Something bad happened' + error
		}));


		const {Roommate_Id} = this.state;
		var id = Roommate_Id;
		var url = `${SERVICEURL}/users/viewRoommateProfile/${id}`;
		//let AuthToken = authHeader();
		fetch(url, {
			method: 'GET',
					headers: {
					'Authorization': AuthToken.Authorization,
					'Content-Type': 'application/json'
					},
			}).then(response => response.json())
			  .then(res => { 
					if(res[1] == undefined){
					this.setState({
						RoommateDetails: res,
						loading: false
					});
					
				}else{
					this.setState({
						RoommateDetails: res[0],
						favouriteRoommate_res: res[1],
						loading: false
	
					});
				}
				
				//return res;
				
		})
		.catch(error => this.setState({
			         loading: true,
					message: 'Something bad happened' + error
		}));

		

	}

	backPage = () => {
		this.props.history.push('/RoommateFinderResult');
	}	


	componentDidMount(){
		let AuthToken = authHeader();
		
		var fetchRoommateURI =  `${SERVICEURL}/fetchUserinterestQuestions`;
		fetch(fetchRoommateURI, {
			method: 'GET',
			headers: {
			  'Authorization':  AuthToken.Authorization,
			  'Content-Type': 'application/json'
			}
		  }).then(response => response.json()).then(Roommate => { 
		   
			  this.setState({
				MatchRoommate: Roommate,
				loading: false
			   
			   })
			})
		.catch(error => this.setState({
			loading: true,
			message: 'Something bad happened' + error
		}));


	}

		

	

	onClickMarkFavoriteRoommate = (Mark) => {
		this.setState({addClass: !this.state.addClass});
		if(Mark == "inactive" || Mark ==  undefined){
            var MarkTrue = true;
		}else{
			var MarkTrue = false;
		}
		const {RoommateDetails, Role} = this.state;
		const { dispatch } = this.props;
		var User_id = Role.id;
		 var FavouriteRoommate_id = RoommateDetails.id;
		let user = {
			    favouriteRoommate : MarkTrue,
				Userid: User_id,
				favouriteRoommate_id: FavouriteRoommate_id
			}
			dispatch(userActions.MarkFavRoommate(user));
		
	}

	
	
		
	render() {

			let buttonClass = ["box"];
			if(this.state.addClass) { buttonClass.push('orange'); }
			const {classes, errorMessage} = this.props;
			const {RoommateDetails,favouriteRoommate_res, MatchRoommate, Roommate_Id} = this.state;
			var MatchRoommateReult = MatchRoommate;

			
			function checkafavMark(){

				if(_.find(favouriteRoommate_res)) {
					var isfavmark = favouriteRoommate_res.favouriteRoommate;
					if(isfavmark == true){
					   return "active";
					}if(isfavmark == false){
						return "inactive";
					}
					
				}
			}
			
			if(_.some(MatchRoommate, _.isObject)){
				
              MatchRoommateReult = MatchRoommate.map((items, key) =>
				<Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" items xs={4}  key={key}  xs={4} onClick={() => this.onClickRoommateId(items._id)}>
							<Paper className={classes.paper}><img alt="" src={require('./images/profile-3.jpg')} />
							
							</Paper>
							
				</Grid>
			   );
			}
			
				
			
			if(_.some(RoommateDetails, _.isObject)){
				var name = RoommateDetails.username;
				var age = RoommateDetails.DOB;
				Moment.locale('en');
				var dt = age;
				var date_db = Moment(dt).format('MM/DD/YYYY');
				var Age = Moment(date_db, "MM/DD/YYYY").month(0).from(Moment().month(0)).split(" ")[0];
				var Gender = RoommateDetails.gender;
				var bio = RoommateDetails.Bio;
				var Facebook = RoommateDetails.Socials.Facebook;
				var Twitter = RoommateDetails.Socials.Twitter;
				var Instagram = RoommateDetails.Socials.Instagram;
				var LinkedIN = RoommateDetails.Socials.LinkedIN;
				var Typeofperson = RoommateDetails.questions.typeofperson;
				var workhours = RoommateDetails.questions.Workhours;
				var bedTime = RoommateDetails.questions.BedTime;
				var ProfileImage = RoommateDetails.ProfileImage;

			}

			// console.log("RoommateDetails");	
			// console.log(RoommateDetails);
			// console.log("ProfileImage");
			// console.log(ProfileImage);

			if(_.find(RoommateDetails)) {
				var imageURIArray = [];
				   for (var key in ProfileImage) {
		   
					   imageURIArray = ProfileImage.imagePath;
		   
				   }	
			}
			
			let emtyUrl = "data:image/png;base64,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"
		
			let $imagePreview = null;
			if (imageURIArray) {
			  $imagePreview = imageURIArray;
			} else {
			  $imagePreview = emtyUrl;
			}
			console.log("imagePreview");
			console.log($imagePreview);
			
			function DoYouDrink() {
				if(_.some(RoommateDetails, _.isObject)){

					var IsDoYouDrink = RoommateDetails.questions.DoYouDrink;
						if(IsDoYouDrink == true){
						return "Drink Partner";
						}
						if(IsDoYouDrink == false){
							return "Not a Drink Partner";
						}
								
			}
			}

			function DoYouSmoke() {
				if(_.some(RoommateDetails, _.isObject)){

					var IsDoYouSmoke = RoommateDetails.questions.DoYouSmoke;
						if(IsDoYouSmoke == true){
						return "Smoke Partner";
						}
						if(IsDoYouSmoke == false){
							return "Not a Smoke Partner";
						}
								
			}
			}

    // debugger;
    return (
                                    	
      <AppProvider>
		  <div className='sweet-loading'>
				<ClipLoader
				css={override}
				sizeUnit={"px"}
				size={150}
				color={'#123abc'}
				loading={this.state.loading}
				/>
		</div> 
        <AppContext.Consumer>
          {(context) => ( 
            
            <div className="profile_header">
            <ButtonAppBar></ButtonAppBar> 
			<div className="col-sm-12 profile_full">	
			<div className="col-sm-9">	
             <div className="loader-container roommate_profile_banner">
			
							 <div className="back_btn">
								 <Button onClick={this.backPage}>Back to all Results</Button>					   
								</div>
			   
			                <div className="roommate_profile_text">
			   					   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit">
									Hey there, my name is {name}
								  </Typography>
								  								   
								</div>
								
								
			                </div>
						
							
			            </div>
			
			
			<div className="profile_description">
					<Typography variant="body1" >
					{bio}
                    </Typography>

			</div>
		</div>
			<div className="col-sm-3 side_profile">
			<Grid item xs={1} className="MuiGrid-item-143 MuiGrid-grid-xs-1-171">
							<Paper className={classes.paper}><img alt="" style={{ width: '320px' }} src={$imagePreview}   />
							<div className="profile_variants">
							<h5>{name}</h5>
							<span className="squre_box">Age: {Age}</span>
							<span className="squre_box">Gender: {Gender}</span> 
							<span className="squre_box">Age: {Age}</span>
							<span className="squre_box">Gender: {Gender}</span>
							<span className="round_box">{Typeofperson}</span>
							<span className="round_box">{workhours}</span>
							<span className="round_box">{DoYouDrink()}</span>	
							<span className="round_box">Bedtime at {bedTime}</span>
							<span className="round_box">{DoYouSmoke()}</span>
							</div>
							<div className="profile_btns">
							<Button className="profile_btn">Send Message</Button>
							
						     <Button data-toggle="tab" className={'profile_btn btn '+ checkafavMark() +' btn-default btn-sm ' + (buttonClass.join(' '))}   onClick={() => this.onClickMarkFavoriteRoommate(checkafavMark())}  >Favorite</Button>

							</div>
							<div className="pro_social_media">
							<ul>
								<li><a target="_blank" href={Facebook}>f</a></li>
								<li><a target="_blank" href={Twitter}>t</a></li>
								<li><a  target="_blank" href={LinkedIN}>L</a></li>
							</ul> 
							
							</div>
							</Paper>
							
						  </Grid>
			</div>
			
			
				
					
						
			<div className="loader-container">

		
					<div className="profile_head_title">
	   
					   <div style={{display:"block"}}>
						  <Typography variant="title" color="inherit">
							 Photos of what I’m interested in…
						  </Typography>
						  
						</div>
						
						
					</div>
				
					
				</div>
	
			
          	
			</div>		
			
			
			            
			{errorMessage && <div className="error-message">{errorMessage}</div>}
			
            </div>
			
          )}
		        		  
        </AppContext.Consumer>
		
		
		<div className="col-sm-12">
			<div className="roommateProfile">
				<React.Fragment>
				
					<div className="row">

					{MatchRoommateReult}
						 
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
								  <Typography variant="title" color="inherit" >
									 People like Joe you may be interested in…
								  </Typography>
								  
								</div>
								
								
			                </div>
						
							
			            </div>
			
		
		
		
		<div className="container">
			<div className="main_roomates">
				<React.Fragment>
					<div className="row">
						
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
							
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
														
							</Paper>
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
							</Paper>
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/roommate_pr_picture.jpg')}  /></a>
							
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

//const mapStateToPropsN = state => ({
 // fetching: state.app.fetching,
 // errorMessage: state.app.error
  //loggedInUser:state.app.user
//});


//export default withTheme()(RoommateFinderResultVariationTwo);


RoommateProfile = connect()(RoommateProfile);

export default withStyles(styles)(RoommateProfile);
