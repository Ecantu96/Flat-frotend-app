import React from 'react';
import {styles} from '../../../constants/styles';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ApartmentSearch extends React.Component {
    
    state = {
        chipData: [
          { key: 0, label: '1',selected:false },
          { key: 1, label: '2' ,selected:false},
          { key: 2, label: '3' ,selected:false},
          { key: 3, label: '4' ,selected:false}
         
        ],
      };
    
      handleDelete = data => () => {
       
    
        this.setState(state => {
          const chipData = [...state.chipData];
          //const chipToDelete = chipData.indexOf(data);
        //  chipToDelete.selected = !chipToDelete.selected
          chipData[chipData.indexOf(data)].selected = !chipData[chipData.indexOf(data)].selected
        //   if(chipToDelete!=-1){
        //   chipData.splice(chipToDelete, 1);
        //   }else{
        //       chipData[chipData.length-1]=chipToDelete;
        //   }
          return { chipData }
        })
      } 
    
    render(){
        const { classes } = this.props;

        return (
         <div>   
		 <div className='scnd_title'>Select how many bedrooms you want.</div>
         <Paper className={classes.root}>
        {this.state.chipData.map(data => {
         
          return (<div className={'steps_button Bedroom-'+data.selected} onClick={this.handleDelete(data)}><div className='circle'>{data.label}</div>
		  <span className='sub_titl'>{'Bedroom'}</span></div>
       
          )    
        })}
		  </Paper>
		 </div>
        ) 
    }
}
export default withStyles(styles, { withTheme: true })(ApartmentSearch);