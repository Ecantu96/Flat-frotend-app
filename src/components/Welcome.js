import React from "react";
import { withTheme } from '@material-ui/core/styles';
import { styles } from "../constants/styles";
import { AppContext } from '../provider/AppContext';
import { WelcomeContent } from './WelcomeContent';

export const Welcome = (props) => (
  <AppContext.Consumer>
    {(context) => (context && context.state && context.state.isLoading ? <div></div> :
      <WelcomeContent {...props}/>
    )}
  </AppContext.Consumer>
);

export default withTheme()(Welcome);
