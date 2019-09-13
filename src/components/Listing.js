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
		Beds: ""

		};

		this.BedroomHandle = this.BedroomHandle.bind(this); 
		this.BathroomHandle = this.BathroomHandle.bind(this);
		this.AreaHandle = this.AreaHandle.bind(this);
		this.BudgetHandle = this.BudgetHandle.bind(this);

		this.updateState = this.updateState.bind(this);
	}

	BedroomHandle = (e) => {
       const {opened} = this.state;
		this.setState({ opened: !opened });
	
	}  
	BathroomHandle = (e) => {
		const {openedBath} = this.state;
		 this.setState({ openedBath: !openedBath });
	 }  
	 AreaHandle = (e) => {
		const {openedArea} = this.state;
		 this.setState({ openedArea: !openedArea });
	 }
	 BudgetHandle = (e) => {
		const {openedBudget} = this.state;
		 this.setState({ openedBudget: !openedBudget });
	 }
	 
	 updateState = (data) => {
		let user = {
			Beds: data
		}
		var user_obj = JSON.stringify(user);
		 var user_data= user_obj.replace(/\\/g, "");
		
	     const { dispatch } = this.props;
		 dispatch(userActions.PropertyFilter(user_data));
    }

	onclickFilter(e){
		e.preventDefault();
		
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
	const { propertyLists, opened, openedBath, openedArea, openedBudget} = this.state;
	const {classes } = this.props;
	var PropertyListing = propertyLists;
			
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
												<div onClick={() => this.updateState(1)} className="bed-div flex-col">1</div>
												<div onClick={() => this.updateState(2)} className="bed-div flex-col">2</div>
												<div onClick={() => this.updateState(3)} className="bed-div flex-col">3</div>
												<div onClick={() => this.updateState(4)} className="bed-div flex-col">4</div>
												<div onClick={() => this.updateState(5)} className="bed-div flex-col">5+</div>
											</div> 
										)}
									  </li>
									  <li>
									  	<Button className="bathrooms" onClick={this.BathroomHandle}>Bathrooms</Button>
											{openedBath && (					
												<div className="bath flex-row">
													<div className="bed-div flex-col">1</div>
													<div className="bed-div flex-col">2</div>
													<div className="bed-div flex-col">3</div>
													<div className="bed-div flex-col">4</div>
													<div className="bed-div flex-col">5+</div>
												</div> 
											)}
											
									  </li>
									     <li>
										 <Button className="area_chicago" onClick={this.AreaHandle}>Area of Chicago</Button>
											{openedArea && (					
												<div className="bath flex-row">
													<div className="bed-div flex-col">Lakeview</div>
													<div className="bed-div flex-col">Lincoln Park</div>
													<div className="bed-div flex-col">Wicker Park</div>
													<div className="bed-div flex-col">River North</div>
													<div className="bed-div flex-col">Gold Coast</div>
												</div> 
											)}
										 </li>
									  <li> 
										  <Button className="budget" onClick={this.BudgetHandle}>Budget</Button>
											{openedBudget && (					
												<div className="bath flex-row">
													<div className="budget-div flex-col">Under $2,000	</div>
													<div className="budget-div flex-col">$2,000 - $2,500</div>
													<div className="budget-div flex-col">$2,500 - $3,500</div>
													<div className="budget-div flex-col">$3,500+</div>
												</div> 
											)}
											
											</li>
											<li><Button>Sq Feet</Button></li>
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
						{ (this.state.loading) ? <div className="loading-page">
						<i className="fa fa-spinner fa-spin fa-3x fa-fw"  aria-hidden="true"  /> <br /> <br />         <span>Loading...</span>
					</div> : PropertyListing }   
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

