import React from "react";
import {connect} from "react-redux";
import { AppContext } from '../provider/AppContext';
import AppProvider from "../provider/AppContext";
import ButtonAppBar from '../components/TopBar';
import FooterBar from '../components/FooterBar';
import Map from '../components/map';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
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
 var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
class Neighborhoods extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			opened: false,
			loading: true,
			openedArea: false,
			propertyLists: [],
			Location: [],
		};
	}
	
	componentWillMount() {

		var url = `${SERVICEURL}/properties`;
		fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(response => response.json()).then(res => { 
				
				this.setState({
					propertyLists: res,
					Location: res,
					loading: false
				})
				
				//return res;
		})
		.catch(error => this.setState({
				message: 'Something bad happened' + error
		}));
			
	}
	
	onClickListId = (list_id, e) => {
		this.props.history.push('ListingDetailPage', { list_id: list_id });
    }
	
	render() {
		
	
	const {propertyLists} = this.state;	
	const {classes} = this.props;
	var PropertyListing = propertyLists;
	if(_.find(propertyLists)) {
		PropertyListing = propertyLists.map((item, key) =>
		<Grid className="MuiGrid-item-143 MuiGrid-grid-xs-5-175" item xs={5}  key={key}  data-id={item.id} onClick={() => this.onClickListId(item.id)}>
			<Paper className={classes.paper + ' MuiPaper-root-16 MuiPaper-elevation2-20'}><img alt=""  src={require('./images/lsiting_room.jpg')} />
			<div className="room_finder_title">	<h5>{item.Address}</h5></div>
			<div className="profile_title">
			<h5>{item.Name}</h5>
				<span>{item.Beds}Beds</span>
				<span>{item.Baths}Bath</span>
				<span>{item.squareFeet}</span>
				<span>{item.region}</span>
				<span>{item.rentPrice}/mo</span>
			</div>
			</Paper>
		</Grid>
		);
	} 

    debugger;
    return (
	
		
	  
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
			  
            
            <div>
             <ButtonAppBar></ButtonAppBar>    
            <div className="loader-container neighborhoods_banner">
			
			                <div className="banner_text">
			   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit" >
									Chicago
								  </Typography>
								  								   
								</div>
								
								
			                </div>
						
							
			            </div>
						
            </div>
			
          )}
		  
		 
		        		  
        </AppContext.Consumer>
		
		
		<div className='sweet-loading'>
				<ClipLoader
				css={override}
				sizeUnit={"px"}
				size={150}
				color={'#123abc'}
				loading={this.state.loading}
				/>
		</div> 
		
		<div className="container">
			<div className="main_roomates neighborhoods">
				<React.Fragment>
				<div className="col-sm-12">
					<div className="col-sm-6">
					    <div className="row">
							 <div className="loader-container">

				
								<div className="neighborhoods_title">
				   
								   <div style={{display:"block"}}>
									  <Typography variant="title" color="inherit">
										Trending Neighborhoods
									  </Typography>
									  
									</div>
									
									
								</div>
						
							
						    </div>
					      
							
				  		  <Slider {...settings}>
							{PropertyListing}        
                            </Slider>
							
						</div>
								
						<div className="row">
						
						<div className="loader-container">

				
								<div className="neighborhoods_title">
				   
								   <div style={{display:"block"}}>
									  <Typography variant="title" align="center" color="inherit">
										All Neighborhoods
									  </Typography>
									  
									</div>
									
									
								</div>
						
							
						    </div>
					   
							
							
							
			                <Slider {...settings}>
							
            					{PropertyListing}									
        
                            </Slider>
						  
						</div>
						<div className="row">
						
						<div className="loader-container">

				
								<div className="neighborhoods_title">
				   
								   <div style={{display:"block"}}>
									  <Typography variant="title" align="center" color="inherit">
										Check out these local favorites…
									  </Typography>
									  
									</div>
									
									
								</div>
						
							
						    </div>
					  
					<Slider {...settings}>
					   {PropertyListing}
						</Slider>
						
						</div>
						
						
					<div className="next_pre">
								  
								 
								  
						
								  							
				    </div>
						
					</div>
					
					<div className="col-sm-6 listing_map">
					<Map
						id="myMap"
						options={{
						  center: { lat: 41.0082, lng: 28.9784 },
						  zoom: 8
						}}
						onMapLoad={map => {
						 // var marker = new window.google.maps.Marker({
						//	position: { lat: 41.0082, lng: 28.9784 },
						//	map: map,
						//	title: 'Hello Istanbul!'
						 // });
						}}
					  />
					</div>
					
										 
					 <div className="view_more">
								
					</div>
					
				</div>	
				
				
				
				
				
				
				</React.Fragment>
			</div>
			
			
			
		</div>


		<FooterBar></FooterBar>		
		
      </AppProvider>
	  
    );
  }

}

function mapStateToProps(state) {
	const { ListLoading } = state.PropertyList;
	const { type, message } = state.alert;
	return {
		ListLoading, type, message

	};
}

Neighborhoods = connect()(Neighborhoods);
export default withStyles(styles)(Neighborhoods);


