import React from 'react';
import {registerUser} from "../../actions/userAction";
import { connect } from 'react-redux';

import './RegisterForm.css';

class RegisterForm extends React.Component {
    handleClick(e) {
        const username = this.refs.username;
        const phone = this.refs.phone;
        const email = this.refs.email;
        const password = this.refs.password;
        const userData = { name: username.value, phone: phone.value,email: email.value, password: password.value };
        this.props.dispatch(registerUser(userData));
        e.preventDefault();
    }
    render() {
        return (
            <form className="register-form" >
                <fieldset>
                    <legend>Sign Up</legend>
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="user-name">Name</label>
                        <input type="text" className="form-control" id="user-name" ref="username"/>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label" htmlFor="phone-number">Phone</label>
                        <input type="text" className="form-control" id="phone-number" ref="phone"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-email">Email address</label>
                        <input type="email" className="form-control" id="user-email" aria-describedby="emailHelp" placeholder="Enter email" ref="email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-password">Password</label>
                        <input type="password" className="form-control" id="user-password" placeholder="Password" ref="password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-password-confirmation">Password confirmation</label>
                        <input type="password" className="form-control" id="user-password-confirmation" placeholder="Password" ref="passwordConfirmation"/>
                    </div>
                    <button onClick={(e) => this.handleClick(e)} type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        );
    }
}
function mapStateToProps (state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(RegisterForm);