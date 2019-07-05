import {styles} from '../../../constants/styles';
import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SignupProvider, { SignupContext } from '../../../provider/SignupContext';
//import { LoginPage } from './LoginPage';
//import RegisterPage from '../RegisterPage';

import LookingRoommate from '../signup/LookingRoommate';
import allUser from '../../../components/allUser';
function SignupSteps(props) {
  
        const { classes, theme,...other } = props;
      // const { activeStep } = this.state;
      // const maxSteps = tutorialSteps.length
  
      return <Dialog  aria-labelledby="simple-dialog-title" {...other}>
      <SignupProvider>
      <SignupContext.Consumer>
          {(context) => (<div className={classes.StepperRoot}>
          <Paper square elevation={0} className={classes.StepperHeader}>
            <Typography className="main_title">{context.state.steps[context.state.activeStep].label}</Typography>
          </Paper>
       
          {context.GetStep()}
         
          <MobileStepper
            steps={context.state.steps.length}
            position="static" 
            activeStep={context.state.activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button className="multi_step_btn" size="small" onClick={context.handleNext} 
              disabled={context.state.activeStep === context.state.steps.length - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
				
              </Button>
			}
            backButton={
              <Button size="small" onClick={context.handleBack} disabled={context.state.activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </div>
     
     )}
        </SignupContext.Consumer>
    </SignupProvider>
    </Dialog>
    
	  
    
  }
  
  export default withStyles(styles, { withTheme: true })(SignupSteps);
