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

class FavoriteRoommates extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false,
			FavRoommates: [],
			loading: true,
		};
	}
  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  componentWillMount() {

	let AuthToken = authHeader();
	var url = `${SERVICEURL}/FavMarkedRoommateMatchResult`;
	var bearer = AuthToken.Authorization;
	fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': bearer,
				'Content-Type': 'application/json'
			}
		}).then(response => response.json()).then(res => { 
			
			this.setState({
				FavRoommates: res,
				loading: false
			})
			return res;
			
	})
	.catch(error => this.setState({
		   loading: true,
			message: 'Something bad happened' + error
	}));

						
}

onClickRoommateId = (Roommate_Id, e) => {
	this.props.history.push('RoommateProfile', { Roommate_Id: Roommate_Id });
}


	render() {
	 
    const {classes } = this.props;
	const { checked, FavRoommates } = this.state;
	var FavRoommate = FavRoommates;

	
	if(_.some(FavRoommates, _.isObject)){
		FavRoommate = FavRoommates.map((item, key) =>
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
            
            <div className="profile_header FavoriteRoommates">
				<ButtonAppBar></ButtonAppBar> 
				<div className="col-sm-12 dashboard_page">
			        <div className="col-sm-2 side_dashboard_list side_dashboard_list_desktop">
						<Grid item xs={1}>
						<Grid item xs={1}>
						    <Paper className={classes.paper}> 
										<div className="dashboard_btns">
										<Button onClick={() => {
										this.props.history.push("/Dashboard");
										}} data-toggle="tab"  className="dashboard_btn  btn btn-default btn-sm">My Dashboard</Button>
										<Button onClick={() => {
										this.props.history.push("/DashboardProfile");
										}} data-toggle="tab"  className="dashboard_btn btn btn-default btn-sm">Profile Page</Button>
										<Button onClick={() => {
										this.props.history.push("/DashboardMessage");
										}} data-toggle="tab"  className="dashboard_btn btn btn-default btn-sm">Messages</Button>
										<Button onClick={() => {
										this.props.history.push("/FavoriteListings");
										}} data-toggle="tab"  className="dashboard_btn btn btn-default btn-sm">Favorite Listings</Button>
										<Button onClick={() => {
										this.props.history.push("/FavoriteRoommates");
										}} data-toggle="tab"  className="dashboard_btn active btn btn-default btn-sm">Favorite Roommates</Button>
										</div>
										
								</Paper>
										
						</Grid>
										
									  </Grid>
					</div>
						
					<div className="col-sm-10">	
						<div className="loader-container">
						
						   			    <div className="dashboard_bg banner_text">
											<div className="dash_head" style={{display:"block"}}>
											  <Typography variant="title" color="inherit">
												Favorite Roommates
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
																	<Button data-toggle="tab" data-target="#page3" className="dashboard_btn btn btn-default btn-sm">Favorite Listings</Button>
																	<Button data-toggle="tab" data-target="#page4" className="dashboard_btn active btn btn-default btn-sm">Favorite Roommates</Button>
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
			<div className="main_roomates roommatefinder_result">
				<React.Fragment>
					<div className="row">
						  {FavRoommate}
												   
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
 // errorMessage: state.app.error
  //loggedInUser:state.app.user
});


//export default withTheme()(RoommateFinderResultVariationTwo);


FavoriteRoommates = connect(mapStateToPropsN)(FavoriteRoommates);

export default withStyles(styles)(FavoriteRoommates);
