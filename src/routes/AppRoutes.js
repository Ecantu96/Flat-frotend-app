import React from "react";
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
//import { Link } from 'react-router-dom';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../constants/styles";
import LoginPage from "../components/login/LoginPage";
import RegisterPage from "../components/login/RegisterPage";
import RelatorsRegsiter from "../components/login/RelatorsRegsiter";
import LookingRoommate from "../components/login/LookingRoommate";
import LookingInRoommates from "../components/login/LookingInRoommates";
import TypeOfPerson from "../components/login/TypeOfPerson";  
import DoYouDrink from "../components/login/DoYouDrink";
import DoYouSmoke from "../components/login/DoYouSmoke";
import LikeGoOut from "../components/login/LikeGoOut";
import WorkHours from "../components/login/Workhours";
import BedTime from "../components/login/BedTime";
import RelationshipStatus from "../components/login/RelationshipStatus";
import RoommateFinderResultVariationTwo from "../components/RoommateFinderResultVariationTwo";
import RoommateFinderResult from "../components/RoommateFinderResult";
import Listing from "../components/Listing";
import ListingDetailsPage from "../components/ListingDetailsPage";
import RoommateProfile from "../components/RoommateProfile";
import Dashboard from "../components/Dashboard";
import DashboardProfile from "../components/DashboardProfile";
import EditDashboardProfile from "../components/Edit-DashboardProfile";
import DashboardMessage from "../components/DashboardMessage";
import FavoriteListings from "../components/FavoriteListings";
import FavoriteRoommates from "../components/FavoriteRoommates";
import Neighborhoods from "../components/Neighborhoods";
import AgentDashboard from "../components/AgentDashboard";
import AgentProfile from "../components/AgentProfile";
import AgentMessages from "../components/AgentMessages";
import AgentListings from "../components/AgentListings";
import AgentInquiries from "../components/AgentInquiries";
import AgentViewProfile from "../components/AgentViewProfile";
import allUser from "../components/allUser";
import AppContainer from "../container/AppContainer";
import history from '../_helpers/history';
//import SignupSteps from "../components/login/signup/SignupSteps";
import { ToastContainer } from 'react-toastify';

const AppRoutes = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={AppContainer} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/RelatorsRegsiter" component={RelatorsRegsiter} />
          <Route path="/LookingRoommate" component={LookingRoommate} />
          <Route path="/LookingInRoommates" component={LookingInRoommates} />
          <Route path="/TypeOfPerson" component={TypeOfPerson} />
          <Route path="/DoYouDrink" component={DoYouDrink} />
          <Route path="/DoYouSmoke" component={DoYouSmoke} />
          <Route path="/LikeGoOut" component={LikeGoOut} />
          <Route path="/WorkHours" component={WorkHours} />
          <Route path="/BedTime" component={BedTime} />
          <Route path="/RelationshipStatus" component={RelationshipStatus} />
          <Route path="/RoommateFinderResultVariationTwo" component={RoommateFinderResultVariationTwo} />
          <Route path="/RoommateFinderResult" component={RoommateFinderResult} />
          <Route path="/Listing" component={Listing} />
          <Route path="/ListingDetailPage" component={ListingDetailsPage} />
          <Route path="/RoommateProfile" component={RoommateProfile} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/DashboardProfile" component={DashboardProfile} />
          <Route path="/Edit-DashboardProfile" component={EditDashboardProfile} />
          <Route path="/DashboardMessage" component={DashboardMessage} />
          <Route path="/FavoriteListings" component={FavoriteListings} />
          <Route path="/FavoriteRoommates" component={FavoriteRoommates} />
          <Route path="/Neighborhoods" component={Neighborhoods} />
          <Route path="/AgentDashboard" component={AgentDashboard} />
          <Route path="/AgentProfile" component={AgentProfile} />
          <Route path="/AgentMessages" component={AgentMessages} />
          <Route path="/AgentListings" component={AgentListings} />
          <Route path="/AgentInquiries" component={AgentInquiries} />
          <Route path="/AgentViewProfile" component={AgentViewProfile} />
          <Route path="/allUser" component={allUser} />
        </Switch>
      </Router>
      <ToastContainer />

    </MuiThemeProvider>
  );
}

export default AppRoutes;
