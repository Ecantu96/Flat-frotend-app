import React, { Component } from "react";
import {connect} from "react-redux";
//import CircularProgress from '@material-ui/core/CircularProgress';
import {AppContext} from '../provider/AppContext'
import AppProvider from "../provider/AppContext";
import 'react-toastify/dist/ReactToastify.css';
import ButtonAppBar from "../components/TopBar";
import FooterBar from "../components/FooterBar";
import  '../components/login/signup/signup.css';
import Button from '@material-ui/core/Button';
//import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../components/main.css'
import Grid from '@material-ui/core/Grid';



class AppContainer extends Component {
		    
  render() {
	 
   // const { errorMessage} = this.props;
    debugger;
    return (
      <AppProvider>
        <AppContext.Consumer>        
          {(context) => (
            
            <div>
            <div className="loader-container bg_banner">
			
						<ButtonAppBar></ButtonAppBar>
			                <div className="banner_text_home">
			   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit" noWrap>
									
								  </Typography>
								  <Typography variant="title" color="inherit" noWrap>
									
								  </Typography>
								   <Typography variant="title" color="inherit" noWrap>
									
								  </Typography>
								</div>
								
								<div className="start_searct_title">
								START YOUR SEARCH!
								</div>
			                </div>
						
							
			            </div>
			
					
			
			
            </div>
			
          )}
		        		  
        </AppContext.Consumer>
		
		<div className="type_bedroom_list home">
			<div className="inner_bed">
			<button data-toggle="tab" data-target="#page0" className="btn btn-default btn-sm"><div className="numbers"><span className="number">1</span></div><span className="bed_room">Bedroom</span></button>
			<button data-toggle="tab" data-target="#page1" className="btn btn-default btn-sm"><div className="numbers"><span className="number">2</span></div><span className="bed_room">Bedroom</span></button>
			<button data-toggle="tab" data-target="#page2" className="btn btn-default btn-sm"><div className="numbers"><span className="number">3</span></div><span className="bed_room">Bedroom</span></button>
			<button data-toggle="tab" data-target="#page3" className="btn btn-default btn-sm"><div className="numbers"><span className="number">4</span></div><span className="bed_room">Bedroom</span></button>
			</div>
		</div>
		
		<div style={{ padding: 20, marginTop: 10, clear: 'both' }}>
	    <Grid container spacing={40}>
		<div className="col-lg-12 home_first_section">
		
			<div className="col-lg-6">
			<div className="loader-container">
			
					<Typography className="get_started_title" variant="title" color="inherit" noWrap>
					GET STARTED
					</Typography>
					
						<div className="home_head_title">
		   
						   <div style={{display:"block"}}>
							  <Typography variant="title" color="inherit" noWrap>
								FIND A ROOM.
							  </Typography>
							  <Typography variant="title" color="inherit" noWrap>
								FIND A ROOMMATE.
							  </Typography>
							         
							</div>
												
						</div>
						
				<div className="home_description">
					
					<Typography variant="body1" >
					  @Flats is a fun and easy way to search for apartments near you! With the easy to navigate apartment searcher, you can find a room that best fits your budget and needs. The apartment searcher allows you to search neighborhoods around Chicago to find a room that supports your lifestyle. While exploring Chicagoland neighborhoods, the apartment searcher lets you look at restaurants, bars, coffee shops, and places to go so you can select an apartment close to the locations that matter to you.
					   
					   
                    </Typography>
					
				<Button className="search_btn">START MY SEARCH</Button>	

			</div>
						
						
					</div>
			
				
			</div>
			
			<div className="col-lg-6">
		<div className="loader-container">
					<div className="first_sect_color">
						<div className="home_first_sect_img">
		  			
						<img style={{ width: 'auto',  height: 'auto' }} alt="" src={require('../components/images/first_sect_img_two.png')} />
										 
						</div>
					</div>					
						
					</div>
			
			</div>
			
			
	    </div>
		
		</Grid>
		</div>
		
		<div style={{ padding: 20, clear: 'both' }}>
	    <Grid container spacing={40}>
		<div className="col-lg-12 home_second_section">
		
			<div className="col-lg-6">
			 <div className="loader-container">
					<div className="second_sect_color">
						<div className="home_second_sect_img">
		  			
						<img style={{ width: 'auto',  height: 'auto' }} alt="" src={require('../components/images/second_sect_img_two.png')} />
										
						</div>
					</div>					
						
					</div>
			
			
			</div>
			
			<div className="col-lg-6">
			 <div className="loader-container">
			
					<Typography className="get_started_title" variant="title" color="inherit" noWrap>
					OUR PROCESS
					</Typography>
					
						<div className="home_head_title">
		   
						   <div style={{display:"block"}}>
							  <Typography variant="title" color="inherit" noWrap>
								AN ALL IN ONE SOLUTION 
							  </Typography>
							  <Typography variant="title" color="inherit" >
								FOR THE ROOMMATE SEEKER
							  </Typography>
							  
							</div>
												
						</div>
						
				<div className="home_description">
					
					<Typography variant="body1" >
					  Are you looking for a new apartment in the Chicagoland area, but don’t have a roommate to share it with? Have no fear because @Flats has an all in one solution that helps you not only find the perfect room, but eases the process of seeking a roommate. When you create an account with @Flats, you complete a survey that shows you apartments that fit your requirements and are matched with potential roommate who you can chat with through our site. This process will make sure you find a roommate who shares in your lifestyle and is seeking an apartment with the same requirements as you. With this fun and easy process, you’ll wonder why you ever considered using any other roommate matching site.
                    </Typography>
					
				<Button className="search_btn">FAQS????</Button>	

			</div>
						
						
					</div>
			
		
			</div>
		</div>	
		</Grid>
		</div>
		
		<div style={{ padding: 20, clear: 'both' }}>
	    <Grid container spacing={40}>
		<div className="row classic_room">
		    <div className="col-lg-12 home_third_section">
		
		<div className="loader-container">
			                <div className="banner_third_section">
			   
							   <div style={{display:"block"}}>
							   
								    <div className="home_looking_list">
									ARE YOU LOOKING TO LIST PROPERTIES?
									</div>
								  
							   </div>
								
								
			                </div>
						
						<div className="inner_home_looking_list">
						
							<div className="col-lg-5">
							<ul className="rent_list">
								<li><span>FREE TO LIST!</span></li>
								<li><span>USERS LOOKING TO RENT!</span></li>
								<li><span>USERS LOOKING TO RENT!</span></li>
								<li><span>USERS LOOKING TO RENT!</span></li>
								
							</ul>
							</div>
							<div className="list_property_desc">
							<div className="col-lg-7">
								<Typography variant="body1" >
								  Are you a property owner or manager looking to list properties in the Chicagoland area? @Flats is a free, easy, and fast way to advertise and list your properties that helps you fill your vacant properties. With our site, you can list as many properties as you want while avoiding the hefty fees that other sites and services typically charge. @Flats has plenty of users looking to rent apartments in the greater Chicago area, which will help your property have a quick turn-around time from posting it on the @Flats site.
								  								  
								</Typography>
								
								<Button className="search_btn">LIST PROPERTIES!</Button>
							</div>
						    </div>
			            </div>
			
				</div>	
		
		    
			</div>
		</div>
		
		</Grid>
		</div>
				
			<div style={{ padding: 25, margin: 0, clear: 'both'  }}>
			   <Grid container spacing={80}>
			  <div className="col-lg-12 home_fourth_section">
				<div className="col-lg-6 forth_sect_left">
						<div className="home_inner_fourth_box" style={{display:"block",  backgroundColor: '#EFEFEF'}}>
							  <Typography variant="title" align="center"  center color="inherit">
								ABOUT
							  </Typography>  
								<Typography variant="body1" >
								  @Flats was established in 2019 with the sole purpose of creating a service that makes roommate, neighborhood, and apartment searching fast, easy, and secure. What separates @Flats from other apartment listing sites is the way that it serves as a centralized site for users to find their perfect apartment and roommate in the exact area of Chicago that best fits their individual needs. The apartment hunting process is simplified through @Flats as users can navigate through Chicago neighborhoods, locate nearby restaurants and bars, and find a roommate who shares in their lifestyle.
								</Typography>
							   <Typography variant="body1" >
								<Button className="furth_sect_btn">ABOUT @Flats</Button>	
								</Typography>								
						</div>
				</div>
				<div className="fourth_sect_bg">
				<img alt="" src={require('../components/images/bg_color_image.png')} />
				</div>
				<div className="col-lg-6 forth_sect_right">
				
						<div className="home_inner_fourth_box" style={{display:"block",  backgroundColor: '#EFEFEF'}}>
							  <Typography variant="title" align="center" center color="inherit">
								FAQs
							  </Typography>
								<Typography variant="body1" >
								 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit ligula, hendrerit ut luctus eget, molestie at tortor. Sed euismod auctor lacus vitae sollicitudin. Praesent vel ipsum vel enim maximus vestibulum vestibulum quis ex. Aenean ullamcorper elit a magna sodales tincidunt. Nulla luctus lacus quis scelerisque fermentum. Ut augue sapien, lobortis ut ante et, consectetur interdum orci. Maecenas finibus finibus dolor, id fringilla elit lobortis vitae. Vestibulum pulvinar orci non gravida tristique. In at mi venenatis, placerat mi id, aliquam sapien. Nulla condimentum vitae mauris a ultrices. Mauris mollis metus vel ligula fermentum mollis. Vivamus ornare nulla a felis lobortis rhoncus.
								 </Typography> 	
								 
								<Typography variant="body1" >
									<Button className="furth_sect_btn">FAQs</Button>
								</Typography>
								
											  
						</div>
				
				</div>
			  </div>
			
			   </Grid>
			</div>
		
		<FooterBar></FooterBar>
				 
      </AppProvider>
	  
	 
    );
  }
}

const mapStateToProps = state => ({
  //fetching: state.app.fetching,
  //errorMessage: state.app.error
  //loggedInUser:state.app.user
});

AppContainer = connect(mapStateToProps)(AppContainer);

export default AppContainer


