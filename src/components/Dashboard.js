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
import { withTheme } from '@material-ui/core/styles';


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

class Dashboard extends React.Component {
	constructor(props){
	  super(props)
	  this.state = {
		checked: false
		
	  }
	}
	
  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };
		
	render() {

		
    const {classes, errorMessage, persons } = this.props;
	const { checked } = this.state;
	


	
    return (
	
      <AppProvider>
	  
	   	  
        <AppContext.Consumer>
		
          {(context) => ( 
            
            <div className="profile_header dasboard_header">
				<ButtonAppBar></ButtonAppBar> 
										
				<div className="col-sm-12 dashboard_page">
			        <div className="col-sm-2 side_dashboard_list side_dashboard_list_desktop">
						<Grid item xs={1}>
										<Paper className={classes.paper}> 
										<div className="dashboard_btns">
										<Button onClick={() => {
								  this.props.history.push("/Dashboard");
								}} data-toggle="tab"  className="dashboard_btn active btn btn-default btn-sm">My Dashboard</Button>
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
												Dashboard
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
																	<Button data-toggle="tab" data-target="#page0" className="dashboard_btn active btn btn-default btn-sm">My Dashboard</Button>
																	<Button data-toggle="tab" data-target="#page1" className="dashboard_btn btn btn-default btn-sm">Profile Page</Button>
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
										
										<div className="welcome_haed">	
							<Typography variant="title" color="inherit">	
							 <AppContext.Consumer>

                  {(context) => (<div>
                       {context.state.loggedInUser !== undefined ? <div style={{ textTransform: "capitalize"}}>{'' + context.state.loggedInUser.username}
                      { ' welcome to your dashboard' }</div> :
                      <div>
                       
                       </div>}</div>
                  )}
				  
                </AppContext.Consumer>
							 
							 </Typography>
							</div>
							<div className="welcome_sub_title">	
							<Typography variant="title" color="inherit">	
							 What do you need to do today?
							 </Typography>
							</div>
										
									</div>
						
							
						
										
							
						<div className="dashboard_bedroom_list">
							<div className="inner_bed">
								<button data-toggle="tab" data-target="#page0" className="btn btn-default btn-sm"><span className="number five">5</span><span className="bed_room msg_five">Messages</span></button>
								<button data-toggle="tab" data-target="#page1" className="btn btn-default btn-sm"><span className="number">10</span><span className="bed_room msg_ten">Fav Listings</span></button>
								<button data-toggle="tab" data-target="#page2" className="btn btn-default btn-sm"><span className="number seven">7</span><span className="bed_room msg_seven">Fav Roommates</span></button>
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



function mapStateToProps(state) {
    // const { user } = state.app;
    return {

        // user,

    };
}
const mapDispatchToProps = {
    // login:login.request
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Dashboard)); 

