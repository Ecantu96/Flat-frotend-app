import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignupProvider, { SignupContext } from '../../provider/SignupContext';


function RegisterPage(props) {
    
     
        return <SignupContext.Consumer>
              {(context) => (
            <div className="col-md-12 reg_form">
                <h3>or sign in with Facebook</h3>
                <form name="form" onSubmit={context.register}>
                    
                    <div className={'form-group' + (context.state.submitted && !context.state.user.username ? ' has-error' : '')}>
                        <label htmlFor="username"></label>
                        <input type="text" className="form-control" placeholder="Username/Email Address" name="username" value={context.state.user.username} onChange={context.handleChange} />
                        {context.state.submitted && !context.state.user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (context.state.submitted && !context.state.user.password ? ' has-error' : '')}>
                        <label htmlFor="password"></label>
                        <input type="password" className="form-control" placeholder="Password" name="password" value={context.state.user.password} onChange={context.handleChange} />
                        {context.state.submitted && !context.state.user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
					
					<div className={'form-group' + (context.state.submitted && !context.state.user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName"></label>
                        <input type="text" className="form-control" placeholder="Lots of questions that are necessary" name="firstName" value={context.state.user.firstName} onChange={(event)=>context.handleChange(event)} />
                        {context.state.submitted && !context.state.user.firstName &&
                            <div className="help-block">Lots of questions that are necessary</div>
                        }
                    </div>
                    <div className={'form-group' + (context.state.submitted && !context.state.user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName"></label>
                        <input type="text" className="form-control" placeholder="Are you interested in a roommate" name="lastName" value={context.state.user.lastName} onChange={context.handleChange} />
                        {context.state.submitted && !context.state.user.lastName &&
                            <div className="help-block">Are you interested in a roommate</div>
                        }
                    </div>
					
                    <div  className="form-group text-center">
                        <button disabled={!context.state.user.username || !context.state.user.password || !context.state.user.firstName || !context.state.user.lastName} className="btn btn-primary reg_btn">Create Account</button>
                       
                    </div>
                </form>
            </div>
                )}
		        		  
                </SignupContext.Consumer>
               
        
    }

export default RegisterPage