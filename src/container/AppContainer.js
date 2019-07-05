import React, { Component } from "react";
import {connect} from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import {AppContext} from '../provider/AppContext'
import AppProvider from "../provider/AppContext";
import 'react-toastify/dist/ReactToastify.css';
import ButtonAppBar from "../components/TopBar";
import FooterBar from "../components/FooterBar";
import  '../components/login/signup/signup.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../components/main.css'
import Grid from '@material-ui/core/Grid';



class AppContainer extends Component {
		    
  render() {
	 
    const {classes, fetching , errorMessage,loggedInUser} = this.props;
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
					  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id pretium tellus. Praesent eget posuere ante. Mauris sit amet lacus sapien. Morbi bibendum tellus in venenatis dapibus. Suspendisse accumsan a ante mollis semper. Quisque sem tortor, semper malesuada interdum vitae, vehicula eget ligula. Cras in augue a turpis commodo tempor vitae ac odio. Quisque accumsan orci lorem, ac venenatis enim vulputate sed. Donec blandit efficitur ex vitae pellentesque. Etiam fringilla scelerisque ligula, imperdiet tristique sapien efficitur non. Donec a ex magna. Pellentesque imperdiet tristique felis, non pretium quam sagittis quis.
					  
					  Quisque dictum mi eget ultrices dapibus. Proin id porta nibh. Vestibulum placerat lacus eu ultrices sollicitudin. Suspendisse congue vulputate nisi, ut tristique lectus vulputate a. Nunc nec sollicitudin sem. Sed a finibus ipsum. Ut vestibulum venenatis nunc ut posuere. Morbi sed nulla facilisis, dapibus quam a, accumsan velit. Fusce a ipsum eu orci dignissim venenatis nec non nunc. Vestibulum pellentesque id ligula efficitur auctor.
					  
					  Quisque dictum mi eget ultrices dapibus. Proin id porta nibh. Vestibulum placerat lacus eu ultrices sollicitudin. Suspendisse congue vulputate nisi, ut tristique lectus vulputate a. Nunc nec sollicitudin sem. Sed a finibus ipsum. Ut vestibulum venenatis nunc ut posuere. Morbi sed nulla facilisis, dapibus quam a, accumsan velit. Fusce a ipsum eu orci dignissim venenatis nec non nunc. Vestibulum pellentesque id ligula efficitur auctor.
					  
					   Fusce a ipsum eu orci dignissim venenatis nec non nunc. Vestibulum pellentesque id ligula efficitur auctor.
					   
					   
                    </Typography>
					
				<Button className="search_btn">START MY SEARCH</Button>	

			</div>
						
						
					</div>
			
				
			</div>
			
			<div className="col-lg-6">
		<div className="loader-container">
					<div className="first_sect_color">
						<div className="home_first_sect_img">
		  			
						<img style={{ width: 'auto',  height: 'auto' }} src={require('../components/images/first_sect_img_two.png')} />
										 
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
		  			
						<img style={{ width: 'auto',  height: 'auto' }} src={require('../components/images/second_sect_img_two.png')} />
										
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
					  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id pretium tellus. Praesent eget posuere ante. Mauris sit amet lacus sapien. Morbi bibendum tellus in venenatis dapibus. Suspendisse accumsan a ante mollis semper. Quisque sem tortor, semper malesuada interdum vitae, vehicula eget ligula. Cras in augue a turpis commodo tempor vitae ac odio. Quisque accumsan orci lorem, ac venenatis enim vulputate sed. Donec blandit efficitur ex vitae pellentesque. Etiam fringilla scelerisque ligula, imperdiet tristique sapien efficitur non. Donec a ex magna. Pellentesque imperdiet tristique felis, non pretium quam sagittis quis.
					  
					  Quisque dictum mi eget ultrices dapibus. Proin id porta nibh. Vestibulum placerat lacus eu ultrices sollicitudin. Suspendisse congue vulputate nisi, ut tristique lectus vulputate a. Nunc nec sollicitudin sem. Sed a finibus ipsum. Ut vestibulum venenatis nunc ut posuere. Morbi sed nulla facilisis, dapibus quam a, accumsan velit. Fusce a ipsum eu orci dignissim venenatis nec non nunc. Vestibulum pellentesque id ligula efficitur auctor.
					  
					  Quisque dictum mi eget ultrices dapibus. Proin id porta nibh. Vestibulum placerat lacus eu ultrices sollicitudin. Suspendisse congue vulputate nisi, ut tristique lectus vulputate a. Nunc nec sollicitudin sem. Sed a finibus ipsum. Ut vestibulum venenatis nunc ut posuere. Morbi sed nulla facilisis, dapibus quam a, accumsan velit. Fusce a ipsum eu orci dignissim venenatis nec non nunc. Vestibulum pellentesque id ligula efficitur auctor.
					  
					   Fusce a ipsum eu orci dignissim venenatis nec non nunc. Vestibulum pellentesque id ligula efficitur auctor.
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
								  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id pretium tellus. Praesent eget posuere ante. Mauris sit amet lacus sapien. Morbi bibendum tellus in venenatis dapibus. Suspendisse accumsan a ante mollis semper. Quisque sem tortor, semper malesuada interdum vitae, vehicula eget ligula. Cras in augue a turpis commodo tempor vitae ac odio. Quisque accumsan orci lorem, ac venenatis enim vulputate sed. Donec blandit efficitur ex vitae pellentesque. 
								  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit ligula, hendrerit ut luctus eget, molestie at tortor. 
								  								  
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
								  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elit ligula, hendrerit ut luctus eget, molestie at tortor. Sed euismod auctor lacus vitae sollicitudin. Praesent vel ipsum vel enim maximus vestibulum vestibulum quis ex. Aenean ullamcorper elit a magna sodales tincidunt. Nulla luctus lacus quis scelerisque fermentum. Ut augue sapien, lobortis ut ante et, consectetur interdum orci. Maecenas finibus finibus dolor, id fringilla elit lobortis vitae. Vestibulum pulvinar orci non gravida tristique. In at mi venenatis, placerat mi id, aliquam sapien. Nulla condimentum vitae mauris a ultrices. Mauris mollis metus vel ligula fermentum mollis. Vivamus ornare nulla a felis lobortis rhoncus.
								</Typography>
							   <Typography variant="body1" >
								<Button className="furth_sect_btn">ABOUT @Flats</Button>	
								</Typography>								
						</div>
				</div>
				<div className="fourth_sect_bg">
				<img src={require('../components/images/bg_color_image.png')} />
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
  fetching: state.app.fetching,
  errorMessage: state.app.error
  //loggedInUser:state.app.user
});

AppContainer = connect(mapStateToProps)(AppContainer);

export default AppContainer


