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

class RoommateProfile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		 Roommate_Id: this.props.location.state.Roommate_Id,
		  error: null,
		  isLoaded: false,
		  RoommateDetails: [],
		  FavRoomateMarked: [],
		  MarkActive: "active"
		};
						
	}

	componentWillMount() {

		var url = "https://nooklyn-flats-backend-apis.herokuapp.com/users/userRole";
		let AuthToken = authHeader();
		fetch(url, {
			method: 'GET',
			headers: {
			  'Authorization':  AuthToken.Authorization,
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

		const {Roommate_Id} = this.state;
		var id = Roommate_Id;
		var url = `https://nooklyn-flats-backend-apis.herokuapp.com/users/viewRoommateProfile/${id}`;
		//let AuthToken = authHeader();
		fetch(url, {
			method: 'GET',
					headers: {
					'Authorization': AuthToken.Authorization,
					'Content-Type': 'application/json'
					},
			}).then(response => response.json())
			  .then(res => { 
				this.setState({
					RoommateDetails: res
				})
				
				return res;
				
		})
		.catch(error => this.setState({
					message: 'Something bad happened' + error
		}));

	}

	backPage = () => {
		this.props.history.push('/RoommateFinderResult');
	}	


	componentDidMount(){
		let AuthToken = authHeader();
		var url = "https://nooklyn-flats-backend-apis.herokuapp.com/FavMarkedRoommate";
		fetch(url, {
			method: 'GET',
			headers: {
			  'Authorization': AuthToken.Authorization,
			  'Content-Type': 'application/json'
			}
		  }).then(response => response.json()).then(result => { 
		   
			  this.setState({
				FavRoomateMarked: result
			   
			   })
			   return result;
		})
		.catch(error => this.setState({
			isLoading: false,
			message: 'Something bad happened' + error
		}));

	}
	

	onClickMarkFavoriteRoommate = (MarkActive) => {
		this.setState({addClass: !this.state.addClass});
		console.log(MarkActive);
		if(MarkActive == "inactive"){
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
			const {RoommateDetails, FavRoomateMarked, Roommate_Id} = this.state;
			
			if(_.some(FavRoomateMarked, _.isObject)){
					var MarkActive = FavRoomateMarked.map(function(item){

						console.log(Roommate_Id);
						console.log(item.favouriteRoommate);
							if(Roommate_Id){
								var favMark = item.favouriteRoommate;
								if(favMark == true){
									return "active";
								}
								if(favMark == false){
								   return "inactive";
								}
						 }
							
				}).filter(function(item){return item;})[0];

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
				

			}
			
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
									Hey there, my name is Joe…
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
							<Paper className={classes.paper}><img alt="" style={{ width: '320px' }}  src={require('./images/Wildlike2.png')} />
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
							
							<Button data-toggle="tab" className={'profile_btn btn '+ MarkActive +' btn-default btn-sm ' + (buttonClass.join(' '))}   onClick={(event) => this.onClickMarkFavoriteRoommate(MarkActive)} >Favorite</Button>

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
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper}><a href="/"><img alt=""  src={require('./images/roommate_pr_picture.jpg')} /></a>
							
							</Paper>
							
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper}><a href="/"><img alt=""  src={require('./images/roommate_pr_picture.jpg')} /></a>
														
							</Paper>
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper}><a href="/"><img alt=""  src={require('./images/roommate_pr_picture.jpg')} /></a>
							
							</Paper>
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper}><a href="/"><img alt=""  src={require('./images/roommate_pr_picture.jpg')} /></a>
							
							</Paper>
						  </Grid>
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-4-174" item xs={4}>
							<Paper className={classes.paper}><a href="/"><img alt=""  src={require('./images/roommate_pr_picture.jpg')} /></a>
							
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
							<Paper className={classes.paper}><a href="/"><img alt="" className="profile_suggest_img"  src={require('./images/profile-3.jpg')} /></a>
							
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
