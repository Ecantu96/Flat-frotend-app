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
import '../css/guest.css';

class RelationshipStatus extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        //  this.props.dispatch(userActions.logout());

        this.state = {
            data: this.props.location.state.data,
            username: '',
            password: '',
            submitted: false,
            RelationshipStatus: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // alert(JSON.stringify(this.props.location.state))
       
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    goToNext = () => {
        const { data, RelationshipStatus } = this.state;
        let tempData = data;
        tempData.questions.RelationshipStatus = RelationshipStatus;
        this.props.history.push('/DoYouDrink', { data: tempData });
    }
    // goToBack = () => {
    //     this.props.history.pop();
    // }

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
            RelationshipStatus: data
        })
    }

    render() {
        const { user } = this.props;

        const { username, password, submitted } = this.state;

        return (


            <AppProvider>


                <Paper style={{ padding: '5px' }} elevation={1} className="lookingInroomate">
                    <AppContext.Consumer>
                        {(context) => (
                            <ButtonAppBar></ButtonAppBar>
                        )}
                    </AppContext.Consumer>

                    <div className="col-md-offset-4 col-md-4 reg_form" style={{ background: '#fff' }}>

                        <div className="main_title">Relationship Status</div>

                        <div className="type_list">
                            <button onClick={() => this.updateState('Single')} data-toggle="tab" data-target="#page0" className="btn btn-default btn-sm">Single</button>
                            <button onClick={() => this.updateState('onRelationship')} data-toggle="tab" data-target="#page1" className="btn btn-default btn-sm">On a Relationship</button>
                            <button onClick={() => this.updateState('Married')} data-toggle="tab" data-target="#page2" className="btn btn-default btn-sm">Married</button>
                        </div>
                        <a href="/BedTime" className="prv_question" >Previous Question</a>
                        {/* <button onClick={() => this.goToBack()} className="btn btn-default btn-sm">Prev Question</button> */}
                        <button onClick={() => this.goToNext()} className="btn btn-default btn-sm">Next Question</button>
                    </div>

                </Paper>

                <FooterBar></FooterBar>

            </AppProvider>

        );
    }
}

function mapStateToProps(state) {
    // const { user } = state.app;
    return {

        // user,

    };
}
const mapDispatchToProps = {
    // login:login.request
};
export default withTheme()(connect(mapStateToProps, mapDispatchToProps)(RelationshipStatus)); 
