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
import Map from '../components/map';
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

class Listing extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		 propertyLists: []
		};
	}
	componentWillMount() {

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

	onClickListId = (list_id, e) => {
			this.props.history.push('ListingDetailPage', { list_id: list_id });
		
	 }
render() {
	const { propertyLists } = this.state;
	const {classes,  errorMessage } = this.props;
	var PropertyListing = propertyLists;
	
	
	 //console.log(PropertyListing._id);
	
	if(_.find(propertyLists)) {
		PropertyListing = propertyLists.map((item, key) =>
		<Grid className="MuiGrid-item-143" item xs={5}  key={key}  data-id={item.id} onClick={() => this.onClickListId(item.id)}>
			<Paper className={classes.paper + ' MuiPaper-elevation2-20'}><img alt=""  src={require('./images/lsiting_room.jpg')} />
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
	// var Length = propertyLists.length;
	// if(Length > 6){
	// 	return true;
	// }
   //debugger;
    return (
	
      <AppProvider>
        <AppContext.Consumer>
          {(context) => ( 
            <div>
            <ButtonAppBar></ButtonAppBar> 
             <div className="loader-container listing_banner">
			                <div className="banner_text">
			   
							   <div style={{display:"block"}}>
								  <Typography variant="title" color="inherit">
									Or, want to find a house and who is
								  </Typography>
								  <Typography variant="title" color="inherit">
									interested in them?
								  </Typography>
								   
								</div>
								
								<div className="type_of_person">
								  
								  <Button>Bedrooms</Button>
								  <Button>Bathrooms</Button>
								  <Button>Area of Chicago</Button>
								  <Button>Budget</Button>
								  <Button>Sq Feet</Button>
								
								</div>
			                </div>
						
							
			            </div>
            </div>
          )}
		        		  
        </AppContext.Consumer>
		<div className="container">
			<div className="main_roomates listing_page">
				<React.Fragment>
				<div className="col-sm-12">
					<div className="col-sm-6">
					    <div className="row">
						{ PropertyListing }   
						</div>
					
					{/* <div className="next_pre">
								  
								  <Button className="pre_page" variant="title" color="#F9790E">Previous</Button>
								  <span className="numbers active">1</span>
								  <span className="numbers">2</span>
								  <span variant="title" color="#F9790E">....</span>
								  <span className="numbers">18</span>
								  <Button className="next_page">Last</Button>
								  
						 						  							
				    </div> */}
						
					</div>
					
					<div className="col-sm-6 listing_map">
					<Map
						id="myMap"
						options={{
						  center: { lat: 41.0082, lng: 28.9784 },
						  zoom: 8
						}}
						onMapLoad={map => {
						
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

Listing = connect()(Listing);
export default withStyles(styles)(Listing);

