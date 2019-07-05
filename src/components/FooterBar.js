import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppContainer from "../container/AppContainer";
import './css/footer.css';

//const ITEM_HEIGHT = 48;

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    maxWidth: 120,
  },
  media: {
    height: 42,
  },
  
};



class FooterBar extends React.Component {
  state = {
    //open: false,
   // selectedValue: emails[1],
   //anchorEl: null,
  };

   render() {
	 //const { anchorEl } = this.state;
    //const open = Boolean(anchorEl);
	const { classes } = this.props;
  
    return (

	 

	<div className="Footer" style={{ background: '#000', marginTop: '50px' }}>  
			<div className={classes.root}>
				
				<Toolbar className="footer_inner">
					
					<div class="left_footer">
					 <span>2019 © @Flats, LLC</span>
					</div>
					<div className="footer_menu" >
					
						<ul className={classes.menuButton} aria-label="Footer-Menu">
							   <li><Link to='/' component={ AppContainer }>HOME</Link></li>
							   <li><Link to='/'>ABOUT</Link></li>
							   <li><Link to='/' >CONTACT</Link></li>
							   <li><Link to='/' >FAQ</Link></li>
							   <li><Link to='/' >PRIVACY</Link></li>
							   <li><Link to='/' >TERMS & CONDITIONS</Link></li>
						</ul>
					</div>
				</Toolbar>
				 
			</div>
	 </div>
  
  );
 }
}

FooterBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterBar);
