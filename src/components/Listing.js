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
import { SERVICEURL } from '../config/config.js'; 
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { authHeader } from '../_helpers';

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

class Listing extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		error: null,
		opened: false,
		loading: true,
		openedBath: false,
		openedBudget: false,
		openedArea: false,
		propertyLists: [],
		Location: [],
		Beds: 1,
		Baths: "",
		filterData: []

		};

		this.BedroomHandle = this.BedroomHandle.bind(this); 
		this.BathroomHandle = this.BathroomHandle.bind(this);
		this.AreaHandle = this.AreaHandle.bind(this);
		this.BudgetHandle = this.BudgetHandle.bind(this); 
		this.SqureFeetHandle = this.SqureFeetHandle.bind(this);

		//this.onClickData = this.onClickData.bind(this);
	}

	BedroomHandle = (e) => {
       const {opened} = this.state;
		this.setState({ 
			opened: !opened,
			openedBath: '',
			openedArea: '',
			openedBudget: '',
			openedsqureFeet: ''

		});
	
	}  
	BathroomHandle = (e) => {
		const {openedBath} = this.state;
		 this.setState({
			  openedBath: !openedBath, 
			  opened: '',
			  openedArea: '',
			  openedBudget: '',
			  openedsqureFeet: ''
			});
	 }  
	 AreaHandle = (e) => {
		const {openedArea} = this.state;
		 this.setState({ 
			 openedArea: !openedArea,
			 openedBath: '', 
			 opened: '',
			 openedBudget: '',
			 openedsqureFeet: ''			
			});
	 }
	 BudgetHandle = (e) => {
		const {openedBudget} = this.state;
		 this.setState({ 
			 openedBudget: !openedBudget,
			 openedArea: '',
			 openedBath: '', 
			 opened: '',
			 openedsqureFeet: ''
			
		});
	 }

	 SqureFeetHandle = (e) => {
		const {openedsqureFeet} = this.state;
		 this.setState({ 
			openedsqureFeet: !openedsqureFeet,
			 openedArea: '',
			 openedBath: '', 
			 opened: '',
			 openedBudget: ''
			
		});
	 }
	 
	 
	onclickBeds(data){
		
		let AuthToken = authHeader();
		var old_url = `${SERVICEURL}/filter/?Beds=${data}`
		var bearer = AuthToken.Authorization;
		fetch(old_url, {
			method: 'GET',
			headers: {
			  'Authorization': bearer,
			  'Content-Type': 'application/json'
			}
		  }).then(response => response.json()).then(property => { 
			  this.setState({
				filterData: property,
				propertyLists: '',
				loading: false
			 })
		    	//return roommates;
		})
		.catch(error => this.setState({
			loading: true,
			message: 'Something bad happened' + error
		}));
	}
	onclickBaths(data){
		let AuthToken = authHeader();
		var old_url = `${SERVICEURL}/filter/?Baths=${data}`
		var bearer = AuthToken.Authorization;
		fetch(old_url, {
			method: 'GET',
			headers: {
			  'Authorization': bearer,
			  'Content-Type': 'application/json'
			}
		  }).then(response => response.json()).then(property => { 
			  this.setState({
				filterData: property,
				propertyLists: '',
				loading: false
			 })
		    	//return roommates;
		})
		.catch(error => this.setState({
			loading: true,
			message: 'Something bad happened' + error
		}));
	}
	
	onclickArea(data){
		let AuthToken = authHeader();
		var old_url = `${SERVICEURL}/filter/?region=${data}`
		var bearer = AuthToken.Authorization;
		fetch(old_url, {
			method: 'GET',
			headers: {
			  'Authorization': bearer,
			  'Content-Type': 'application/json'
			}
		  }).then(response => response.json()).then(property => { 
			  this.setState({
				filterData: property,
				propertyLists: '',
				loading: false
			 })
		    	//return roommates;
		})
		.catch(error => this.setState({
			loading: true,
			message: 'Something bad happened' + error
		}));
    }  
	
	onclickBudget(data){
		let AuthToken = authHeader();
		var old_url = `${SERVICEURL}/filter/?rentPrice=${data}`
		var bearer = AuthToken.Authorization;
		fetch(old_url, {
			method: 'GET',
			headers: {
			  'Authorization': bearer,
			  'Content-Type': 'application/json'
			}
		  }).then(response => response.json()).then(property => { 
			  this.setState({
				filterData: property,
				propertyLists: '',
				loading: false
			 })
		    	//return roommates;
		})
		.catch(error => this.setState({
			loading: true,
			message: 'Something bad happened' + error
		}));
	}

	onclickSquareFeet(data){
		let AuthToken = authHeader();
		var old_url = `${SERVICEURL}/filter/?squareFeet=${data}`
		var bearer = AuthToken.Authorization;
		fetch(old_url, {
			method: 'GET',
			headers: {
			  'Authorization': bearer,
			  'Content-Type': 'application/json'
			}
		  }).then(response => response.json()).then(property => { 
			  this.setState({
				filterData: property,
				propertyLists: '',
				loading: false
			 })
		    	//return roommates;
		})
		.catch(error => this.setState({
			loading: true,
			message: 'Something bad happened' + error
		}));
	}
	
	ClearState(e){

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
					   loading: true,
						message: 'Something bad happened' + error
				}));
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
					   loading: true,
						message: 'Something bad happened' + error
				}));
					
	}

	
	onClickListId = (list_id, e) => {
			this.props.history.push('ListingDetailPage', { list_id: list_id });
    }

render() {
	const { propertyLists, opened, openedBath, openedArea, openedBudget, openedsqureFeet, filterData} = this.state;
	const {classes } = this.props;

	var PropertyListing = propertyLists;
	let FilterData = filterData;

	   
	if(_.find(filterData)) {
		FilterData = filterData.map((item, key) =>
		<Grid className="MuiGrid-item-143" item xs={5}  key={key}  data-id={item.id} onClick={() => this.onClickListId(item.id)}>
			<Paper className={classes.paper + ' MuiPaper-elevation2-20'}><img alt=""  src={require('./images/lsiting_room.jpg')} />
			<div className="room_finder_title">	<h5>{item.Address}</h5></div>
			<div className="profile_title">
			{/* <h5>{item.Name}</h5> */}
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
								  <ul>
									  <li>
									      <Button className="bedrooms" onClick={this.BedroomHandle}>Bedrooms </Button>
											{opened && (					
											<div className="beds flex-row">
												<div onClick={() => this.onclickBeds(1)} className="bed-div flex-col">1</div>
												<div onClick={() => this.onclickBeds(2)} className="bed-div flex-col">2</div>
												<div onClick={() => this.onclickBeds(3)} className="bed-div flex-col">3</div>
												<div onClick={() => this.onclickBeds(4)} className="bed-div flex-col">4</div>
												<div onClick={() => this.onclickBeds(5)} className="bed-div flex-col">5+</div>
												<div onClick={() => this.ClearState()} className="bed-div flex-col">Clear</div>
											</div> 
										)}
									  </li>
									  <li>
									  	<Button className="bathrooms" onClick={this.BathroomHandle}>Bathrooms</Button>
											{openedBath && (					
												<div className="bath flex-row">
													<div onClick={() => this.onclickBaths(1)} className="bed-div flex-col">1</div>
													<div onClick={() => this.onclickBaths(2)}className="bed-div flex-col">2</div>
													<div onClick={() => this.onclickBaths(3)}className="bed-div flex-col">3</div>
													<div onClick={() => this.onclickBaths(4)} className="bed-div flex-col">4</div>
													<div onClick={() => this.onclickBaths(5)} className="bed-div flex-col">5+</div>
													<div onClick={() => this.ClearState()} className="bed-div flex-col">Clear</div>
												</div> 
											)}
											
									  </li>
									     <li>
										 <Button className="area_chicago" onClick={this.AreaHandle}>Area of Chicago</Button>
											{openedArea && (					
												<div className="areas flex-row">
													<div  onClick={() => this.onclickArea('Seaview')} className="areas-div flex-col">Seaview</div>
													<div onClick={() => this.onclickArea('Lakeview')} className="areas-div flex-col">Lakeview</div>
													<div  onClick={() => this.onclickArea('Lincoln')} className="areas-div flex-col">Lincoln Park</div>
													<div  onClick={() => this.onclickArea('Wicker')} className="areas-div flex-col">Wicker Park</div>
													<div  onClick={() => this.onclickArea('River')} className="areas-div flex-col">River North</div>
													<div  onClick={() => this.onclickArea('Gold Coast')} className="areas-div flex-col">Gold Coast</div>
													<div onClick={() => this.ClearState()} className="bed-div flex-col">Clear</div>
												</div> 
											)}
										 </li>
									  <li> 
										  <Button className="budget" onClick={this.BudgetHandle}>Budget</Button>
											{openedBudget && (					
												<div  className="budgets flex-row">
													<div onClick={() => this.onclickBudget('$200')} className="budget-div flex-col">Under $500</div>
													<div onClick={() => this.onclickBudget('')} className="budget-div flex-col">$1,000 - $1500</div>
													<div onClick={() => this.onclickBudget('')} className="budget-div flex-col">$1500 - $2000</div>
													<div onClick={() => this.onclickBudget('')} className="budget-div flex-col">$2500+</div>
													<div onClick={() => this.ClearState()} className="bed-div flex-col">Clear</div>
												</div> 
											)}
											
											</li>
											<li><Button className="squre_feet" onClick={this.SqureFeetHandle}>Sq Feet</Button></li>
											{openedsqureFeet && (					
												<div  className="squareFeet flex-row">
													<div onClick={() => this.onclickSquareFeet('300')} className="budget-div flex-col">Under 500</div>
													<div onClick={() => this.onclickSquareFeet('')} className="budget-div flex-col">1,000 - 1500</div>
													<div onClick={() => this.onclickSquareFeet('')} className="budget-div flex-col">1500 - 2000</div>
													<div onClick={() => this.onclickSquareFeet('')} className="budget-div flex-col">2500+</div>
													<div onClick={() => this.ClearState()} className="bed-div flex-col">Clear</div>
												</div> 
											)}
									</ul>	
					     		    
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
			<div className="main_roomates listing_page">
				<React.Fragment>
				<div className="col-sm-12">
					<div className="col-sm-6">
					    <div className="row">

						{PropertyListing}  

						{FilterData}

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

