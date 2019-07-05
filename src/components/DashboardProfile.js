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

	state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };
	
		
	render() {
	 
    const {classes } = this.props;
    const { checked } = this.state;
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
										<Button data-toggle="tab" data-target="#page0" className="dashboard_btn btn btn-default btn-sm">My Dashboard</Button>
										<Button data-toggle="tab" data-target="#page1" className="dashboard_btn active btn btn-default btn-sm">Profile Page</Button>
										<Button data-toggle="tab" data-target="#page2" className="dashboard_btn btn btn-default btn-sm">Messages</Button>
										<Button data-toggle="tab" data-target="#page3" className="dashboard_btn btn btn-default btn-sm">Favorite Listings</Button>
										<Button data-toggle="tab" data-target="#page4" className="dashboard_btn btn btn-default btn-sm">Favorite Roommates</Button>
										</div>
										
										</Paper>
										
									  </Grid>
					</div>
						
					<div className="col-sm-10">	
						<div className="loader-container">
						
						   			    <div className="dashboard_profile_bg banner_text">
											<div className="dash_head" style={{display:"block"}}>
											  <Typography variant="title" color="inherit" noWrap>
												Profile Page
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
							<h5>Profile Picture</h5>
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
							<li><label>Name</label><a href="/">Link Goes in Here</a></li>
							<li><label>Password</label><a href="/">Link Goes in Here</a></li>
							<li><label>DOB</label><a href="/">Link Goes in Here</a></li>
							<li><label>Gender</label><a href="/">Link Goes in Here</a></li>
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
							<li><label>Facebook</label><a href="/">Link Goes in Here</a></li>
							<li><label>Twitter</label><a href="/">Link Goes in Here</a></li>
							<li><label>Instagram</label><a href="/">Link Goes in Here</a></li>
							<li><label>LinkedIN</label><a href="/">Link Goes in Here</a></li>
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
					 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat faucibus purus, sed convallis nulla luctus eu. Integer tincidunt enim ligula, id molestie velit blandit nec. Aenean convallis, sapien sed pulvinar feugiat, purus turpis tincidunt dolor, vel consectetur erat quam eget ligula. Duis at aliquam risus, 
                    </Typography>
					
					<Typography variant="body2" >
					  ut molestie dui. Donec ac felis lectus. Proin porttitor in eros eget interdum. Sed ut tempus tortor. Vivamus blandit turpis sit amet euismod convallis. Morbi dictum nibh eleifend pharetra ultrices. Aenean non augue quis risus cursus sodales nec vel lectus. Cras consequat, quam vitae efficitur commodo, ligula est tempus dolor, nec tempus dolor odio id ligula. Pellentesque justo urna, sagittis vel ante vitae, cursus iaculis ex. Sed varius eu purus vitae accumsan. Mauris sed elit tortor. Quisque tincidunt nibh eu elementum condimentum. Vestibulum et vehicula dolor.
                    </Typography>
              			
					<Typography variant="body2" >
					  ut molestie dui. Donec ac felis lectus. Proin porttitor in eros eget interdum. Sed ut tempus tortor. Vivamus blandit turpis sit amet euismod convallis. Morbi dictum nibh eleifend pharetra ultrices. Aenean non augue quis risus cursus sodales nec vel lectus. Cras consequat, quam vitae efficitur commodo, ligula est tempus dolor, nec tempus dolor odio id ligula. Pellentesque justo urna, sagittis vel ante vitae, cursus iaculis ex. Sed varius eu purus vitae accumsan. Mauris sed elit tortor. Quisque tincidunt nibh eu elementum condimentum. Vestibulum et vehicula dolor.
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
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">Quiet</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Loud</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Tidy</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Messy</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Do you drink?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">Yes</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">No</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Do you smoke?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Yes</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">No</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  
					</div>	  
					
					<div className="row">
					    
						<Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Likes to go out?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">Yes</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">No</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Work Hours</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">Full-time</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Part-time</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Student<br/> (Full-time)</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Student <br/> (Part-time)</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Bed Time</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">9-10pm</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">10-11pm</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">12-1am</Button>
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
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">Single</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">In a <br/>Relationship</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Married</Button>
							
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
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">Quiet</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Loud</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Tidy</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Messy</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Do you drink?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">Yes</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">No</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Do you smoke?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Yes</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">No</Button>
							</div>
						    </Paper>
							
						  </Grid>
						  
					</div>	  
					
					<div className="row">
					    
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Likes to go out?</h4>
							<div className="drink_grid">
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">Yes</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">No</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						  
						   <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Work Hours</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">Full-time</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Part-time</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Student <br/> (Full-time)</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Student<br/>(Part-time)</Button>
							</div> 
						    </Paper>
							
						  </Grid>
						  
						  <Grid className="abt_me_grid" item xs={3}>
							<Paper className={classes.paper}>
							<h4>Bed Time</h4>
							<div className="type_grid">
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">9-10pm</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">10-11pm</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">12-1am</Button>
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
							<Button data-toggle="tab" data-target="#page0" className="type_btn active btn btn-default btn-sm">Single</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">In a <br/>Relationship</Button>
							<Button data-toggle="tab" data-target="#page0" className="type_btn  btn btn-default btn-sm">Married</Button>
							
							</div>
						    </Paper>
							
						  </Grid>
						  
					</div>	
					
					
						  
					</div>
					
					
					</div>
					
					
					
					<div className="col-lg-3 dashboard_sidebar_profile desktop_sidebar_profile">
					
					<Grid className="profile_pic_section" item xs={1}>
							<Paper className={classes.paper}>
							<h5>Profile Picture</h5>
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
							<li><label>Name</label><a href="/">Link Goes in Here</a></li>
							<li><label>Password</label><a href="/">Link Goes in Here</a></li>
							<li><label>DOB</label><a href="/">Link Goes in Here</a></li>
							<li><label>Gender</label><a href="/">Link Goes in Here</a></li>
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
							<li><label>Facebook</label><a href="/">Link Goes in Here</a></li>
							<li><label>Twitter</label><a href="/">Link Goes in Here</a></li>
							<li><label>Instagram</label><a href="/">Link Goes in Here</a></li>
							<li><label>LinkedIN</label><a href="/">Link Goes in Here</a></li>
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


DashboardProfile = connect(mapStateToPropsN)(DashboardProfile);

export default withStyles(styles)(DashboardProfile);
