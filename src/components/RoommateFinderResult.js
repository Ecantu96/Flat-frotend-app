import React from "react";
import _ from 'lodash';
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
import { userActions } from '../actions';
import Page from "../components/Page.jsx";
import { authHeader } from '../_helpers';
  
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
	
	constructor(props) {
        super(props);
        this.state = {
			data: '',
			registering: false,
			roomMateLists: [],
			ProfileQuestion: [],
			propertyLists: [],
			viewAllRoommates: [],		
		};
	}
	
	componentWillMount = () => {

		
		
		let AuthToken = authHeader();
					var url = "https://nooklyn-flats-backend-apis.herokuapp.com/users/viewAllRoommates";
					var bearer = AuthToken.Authorization;
					fetch(url, {
						method: 'GET',
						headers: {
						  'Authorization': bearer,
						  'Content-Type': 'application/json'
						}
					  }).then(response => response.json()).then(roommates => { 
						  this.setState({
							viewAllRoommates: roommates
						  
						   })
					    	return roommates;
					})
					.catch(error => this.setState({
						isLoading: false,
						message: 'Something bad happened' + error
					}));


      	const { history } = this.props;
		if(this.props.location.state !== undefined){
			//Getting the user data from previous screens property
			var recievedData = this.props.location.state.data;
			//Setting that data in this components state
			
			this.setState({
				data: recievedData
			});
			const {loggedIn} = this.props;
			const { dispatch } = this.props;
			let tempData = recievedData;
			if(!loggedIn){
				setTimeout(() => dispatch(userActions.register(tempData)), 200);
			}
			localStorage.setItem('userCompleteProfile', JSON.stringify(tempData));
	    	}else{
					
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
							ProfileQuestion: Userprofile
						  
						   })
						console.log("Userprofile");
					   console.log(Userprofile);
						return Userprofile;
					})
					.catch(error => this.setState({
						isLoading: false,
						message: 'Something bad happened' + error
					}));
				
				const {loggedIn} = this.props;
				const { dispatch } = this.props;
				const {ProfileQuestion} = this.state;
				
				setTimeout(() => dispatch(userActions.matchRoommate(ProfileQuestion.questions)), 1500);
		    }
    }

   	componentDidMount = () => {

		const { dispatch } = this.props;
		const {loggedIn} = this.props;
		let tempData = this.state.data;
		
		if(tempData.username && tempData.password){
			setTimeout(() => dispatch(userActions.login(tempData.username, tempData.password)), 1000);
			
				setTimeout(() => dispatch(userActions.matchRoommate(tempData.questions)), 2500);
			
		}
		setTimeout(() => this.setState({ loading: false }), 3000);

		var url = "https://nooklyn-flats-backend-apis.herokuapp.com/properties";
				fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					}).then(response => response.json()).then(res => { 
						
						this.setState({
							propertyLists: res
						})
						
						return res;
				})
				.catch(error => this.setState({
						message: 'Something bad happened' + error
				}));
	}

	componentWillReceiveProps(nextProps) {
		const {data} = this.state;
		var response = nextProps.message;
		var loggedIn = nextProps.loggedIn;
			this.setState({
				roomMateLists:response,
				loggedIn: nextProps.loggedIn
			});
	}

	onClickRoommateId = (Roommate_Id, e) => {
		this.props.history.push('RoommateProfile', { Roommate_Id: Roommate_Id });
	}
	
	onClickListId = (list_id, e) => {
		this.props.history.push('ListingDetailPage', { list_id: list_id });
	
    }

		
	render() {
		
		const {classes, errorMessage} = this.props;
		var { roomMateLists, propertyLists, viewAllRoommates } = this.state;
		var items = roomMateLists;
		const { registering} = this.props;
		var PropertyListing = propertyLists;
		var defaultroommates = viewAllRoommates;

		if(_.some(viewAllRoommates, _.isObject)){
			defaultroommates = viewAllRoommates.map((item, key) =>
			<Grid className="MuiGrid-item-143" item xs={4}  key={key} data-id={item._id} onClick={() => this.onClickRoommateId(item._id)}>
				<Paper className={classes.paper + ' MuiPaper-elevation2-20'}><img alt="" className="profile_img" src={require('./images/profile-3.jpg')} />
				<div className="room_finder_title">	<h5>{item.username}</h5></div>
				<div className="profile_title">
				<span>{item.questions.LookingRoommate}</span>
				<span>{item.questions.LookingInRoommates}</span>
				<span>{item.questions.typeofperson}</span>
				<span>{item.questions.BedTime}</span>
				<span>{item.questions.RelationshipStatus}</span>
				<span>{item.questions.Workhours}</span>
				</div>
				</Paper>
			</Grid>
			);
      	}

		if(_.find(propertyLists)) {
			PropertyListing = propertyLists.map((list, key) =>
			<Grid className=" MuiGrid-item-143 MuiGrid-grid-xs-5-175" list xs={5}  key={key}  data-id={list.id} onClick={() => this.onClickListId(list.id)}>
				<Paper className={classes.paper + ' MuiPaper-elevation2-20'}><img alt=""  src={require('./images/lsiting_room.jpg')} />
				<div className="room_finder_title">	<h5>{list.Address}</h5></div>
				<div className="profile_title">
				<h5>{list.Name}</h5>
					<span>{list.Beds}Beds</span>
					<span>{list.Baths}Bath</span>
					<span>{list.squareFeet}</span>
					<span>{list.region}</span>
					<span>{list.rentPrice}/mo</span>
				</div>
				</Paper>
			</Grid>
			);
		}
      
		if(_.some(roomMateLists, _.isObject)){
			items = roomMateLists.map((item, key) =>
			<Grid className="MuiGrid-item-143" item xs={4}  key={key} data-id={item._id} onClick={() => this.onClickRoommateId(item._id)}>
				<Paper className={classes.paper + ' MuiPaper-elevation2-20'}><img alt="" className="profile_img" src={require('./images/profile-3.jpg')} />
				<div className="room_finder_title">	<h5>{item.username}</h5></div>
				<div className="profile_title">
				<span>{item.questions.LookingRoommate}</span>
				<span>{item.questions.LookingInRoommates}</span>
				<span>{item.questions.typeofperson}</span>
				<span>{item.questions.BedTime}</span>
				<span>{item.questions.RelationshipStatus}</span>
				<span>{item.questions.Workhours}</span>
				</div>
				</Paper>
			</Grid>
			);
      	}

	
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
					{defaultroommates} {items}
				</div>
				
				{registering &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
					{/* <div className="next_pre">
						<Button className="pre_page" variant="title" color="#F9790E">Previous</Button>
						<span className="numbers active">1</span>
						<span className="numbers">2</span>
						<span className="numbers">3</span>
						<span className="numbers">4</span>
						<span variant="title" color="#F9790E">....</span>
						<span className="numbers">18</span>
						<Button className="next_page">Last</Button>
					</div> */}
				
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
						 {PropertyListing}
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
  //fetching: state.app.fetching,
  errorMessage: state.app.error
  //loggedInUser:state.app.user
});

function mapStateToProps(state) {
	const { loggedIn, loggingIn, user } = state.authentication;
    const { registering } = state.roommateMatch;
    const { type, message } = state.alert;
    return {
        registering, loggedIn, user, type, message
    };
}
export default withStyles(styles)(connect(mapStateToProps)(RoommateFinderResult));

