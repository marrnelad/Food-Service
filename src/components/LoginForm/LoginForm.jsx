import React from 'react';
import { Route, Link } from 'react-router-dom';

import './LoginForm.css';

class LoginForm extends React.Component {
    render() {

        return (
            <form className="login-form">
                <fieldset>
                    <legend>Sign In</legend>
                    <div className="form-group">
                        <label htmlFor="user-email">Email address</label>
                        <input type="email" className="form-control" id="user-email" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-password">Password</label>
                        <input type="password" className="form-control" id="user-password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default LoginForm;