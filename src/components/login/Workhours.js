import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import {login} from '../../actions/user'; 
import { withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonAppBar from '../TopBar';
import FooterBar from "../FooterBar";
import AppProvider from "../../provider/AppContext";
import { AppContext } from '../../provider/AppContext';
//import Button from '@material-ui/core/Button';
import { userActions } from '../../actions';
import '../css/guest.css';

class WorkHours extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        //  this.props.dispatch(userActions.logout());

        this.state = {
            data: this.props.location.state.data,
            username: '',
            password: '',
            submitted: false,
            Workhours: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log('data===LookingInRoommates' + JSON.stringify(this.state.data))
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login({ 'payload': { username, password } })
        }
		
    }

    updateState = (data) => {
        this.setState({
            Workhours: data
        })
    }

    goToNext = () => {
        const { data, Workhours } = this.state;
        const { dispatch } = this.props;
        let tempData = data;
        tempData.questions.Workhours = Workhours;
        console.log('data===Workhours' + JSON.stringify(tempData))
        dispatch(userActions.register(tempData));
        // this.props.history.push('Workhours', { data: tempData });
		
            dispatch(userActions.login(tempData.username, tempData.password));
       
    }

    render() {
        const { user } = this.props;
        const { registering, type, message } = this.props;
        const { username, password, submitted } = this.state;

        return (


            <AppProvider>


                <Paper style={{ padding: '5px' }} elevation={1} className="lookingInroomate">
                    <AppContext.Consumer>
                        {(context) => (
                            <ButtonAppBar></ButtonAppBar>
                        )}
                    </AppContext.Consumer>

                    <div className="col-md-4 reg_form" style={{ background: '#fff', margin: '0 auto' }}>

                        <div className="main_title">Work hours</div>

                        <div className="type_list">
                            <button onClick={() => this.updateState('FullTime')} data-toggle="tab" data-target="#page0" className="btn btn-default btn-sm">Full-Time</button>
                            <button onClick={() => this.updateState('PartTime')} data-toggle="tab" data-target="#page1" className="btn btn-default btn-sm">Part-Time</button>
                            <button onClick={() => this.updateState('StudentFullTime')} data-toggle="tab" data-target="#page2" className="btn btn-default btn-sm">Student (Full-Time)</button>
                            <button onClick={() => this.updateState('StudentPartTime')} data-toggle="tab" data-target="#page3" className="btn btn-default btn-sm">Student (Part-Time)</button>
                        </div>
                        {registering &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <a href="/" className="prv_question" >Previous Question</a>
                        <button onClick={() => this.goToNext()} className="btn btn-default btn-sm">Next Question</button>
                    </div>

                </Paper>

                <FooterBar></FooterBar>

            </AppProvider>

        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    const { type, message } = state.alert;
    return {
        registering, type, message

    };
}
const mapDispatchToProps = {
    // login:login.request
};
export default withTheme()(connect(mapStateToProps)(WorkHours)); 
