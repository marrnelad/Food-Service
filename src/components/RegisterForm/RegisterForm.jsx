import React from 'react';
import { Route, Link } from 'react-router-dom';

import './RegisterForm.css';

class RegisterForm extends React.Component {
    render() {

        return (
            <form className="register-form">
                <fieldset>
                    <legend>Sign Up</legend>
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="user-name">Name</label>
                        <input type="text" className="form-control" id="user-name"/>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="phone-number">Phone</label>
                        <input type="text" className="form-control" id="phone-number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-email">Email address</label>
                        <input type="email" className="form-control" id="user-email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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

export default RegisterForm;