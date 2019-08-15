import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// Components
import ButtonAppBar from '../components/TopBar';
import FooterBar from "../components/FooterBar";

// Material UI

//import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export const Page = ({ children, pageTitle, history, goBack, LookingRoommate, LookingInRoommates }) =>
  <div className="page">
    <div goBack={goBack} goLookingRoommate={LookingRoommate} history>
      {pageTitle}
    </div>
    
      
        {children}
      
   
  
  </div>;

export default Page;