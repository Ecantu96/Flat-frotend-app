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

        // reset login status
        //  this.props.dispatch(userActions.logout());

        this.state = {
			data: this.props.location.state.data,
			RoommateFinderResult: '',
			roomMateLists: []
        };
		
		 console.log('data===RoommateFinderResult' + JSON.stringify(this.state.data))

		
  
	}
	
	
	componentWillMount = () => {

			const { data, RoommateFinderResult } = this.state;
        const { dispatch } = this.props;
		let tempData = data;
		//tempData.questions.RoommateFinderResult = RoommateFinderResult;
	 	
		 console.log('data===RoommateFinderResult' + JSON.stringify(tempData.questions)) 
		
		 if(tempData != ""){
			setTimeout(() => dispatch(userActions.register(tempData)), 500);
		 }

		 if(tempData.username && tempData.password){
				
			setTimeout(() => dispatch(userActions.login(tempData.username, tempData.password)), 1000);
			setTimeout(() => dispatch(userActions.matchRoommate(tempData.questions)), 2000);
			
		}
		 
		localStorage.setItem('MyData', JSON.stringify(tempData));
		 
	
    }

   componentDidMount = () => {

	// let user = JSON.parse(localStorage.getItem('user'));
   
	// const initialState = user ? {loggedIn: true, user } : {};

}

  componentWillReceiveProps(nextProps) {

	var response = nextProps.message;
//	console.log(response);
	this.setState({
		roomMateLists:response
	});

		
  }
		
	render() {
	 
	const {classes, errorMessage} = this.props;
	var { roomMateLists } = this.state;
	var items = roomMateLists;
	const { registering, type, message } = this.props;

	
	  if(_.some(roomMateLists, _.isObject)){
	  	items = roomMateLists.map((item, key) =>
		<Grid className="MuiGrid-item-143" item xs={4}  key={key}>
			<Paper className={classes.paper + ' MuiPaper-elevation2-20'}><a href="/"><img alt="" className="profile_img" src={require('./images/profile-3.jpg')} /></a>
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
	
    // debugger;
	
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

					{items}
						 
						  
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
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-5-175" item xs={5}>
	                       <Paper className={classes.paper + ' MuiPaper-elevation2-20'}><a href="/"><img alt=""  className="home_img" src={require('./images/lsiting_room.jpg')} /></a>
	                        <div className="room_finder_title"><h5>Address goes here</h5></div>
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
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-5-175" item xs={5}>
							<Paper className={classes.paper + ' MuiPaper-elevation2-20'}><a href="/"><img alt=""  className="home_img" src={require('./images/lsiting_room.jpg')} /></a>
							 <div className="room_finder_title"><h5>Address goes here</h5></div>
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
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-5-175" item xs={5}>
							<Paper className={classes.paper + ' MuiPaper-elevation2-20'}><a href="/"><img alt=""  className="home_img" src={require('./images/lsiting_room.jpg')} /></a>
							 <div className="room_finder_title"><h5>Address goes here</h5></div>
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
						  <Grid className="MuiGrid-item-143 MuiGrid-grid-xs-5-175" item xs={5}>
							<Paper className={classes.paper + ' MuiPaper-elevation2-20'}><a href="/"><img alt=""  className="home_img" src={require('./images/lsiting_room.jpg')} /></a>
							 <div className="room_finder_title"><h5>Address goes here</h5></div>
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
					
										
					 <div className="view_more">
								<Button className="view_more_btn" variant="title" color="#F9790E">View More</Button>
					</div>
					
					{registering &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
					
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
    const { registering } = state.roommateMatch;
    const { type, message } = state.alert;
    return {
        registering, type, message

    };
}


export default withStyles(styles)(connect(mapStateToProps)(RoommateFinderResult));

