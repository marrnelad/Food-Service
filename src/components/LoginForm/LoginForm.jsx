import React from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import {loginUser} from "../../actions/userAction";
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        let userData = {
            email: this.refs.email.value,
            password: this.refs.password.value
        };
        this.props.dispatch(loginUser(userData));
        this.refs.password.value = '';
        e.preventDefault();
    }

    render() {
        return (
            <form className="login-form" onSubmit={(e) => {this.handleClick(e);}}>
                <p className={this.props.user.error ? "error-message error" : "error"}>{this.props.user.error}</p>
                <fieldset>
                    <legend>Вход в систему</legend>
                    <div className="form-group">
                        <label htmlFor="user-email">Email</label>
                        <input type="email" className="form-control" id="user-email" aria-describedby="emailHelp" placeholder="Введите email" ref="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-password">Пароль</label>
                        <input type="password" className="form-control"  id="user-password" placeholder="Введите пароль" ref="password" minLength="6" maxLength="30" required/>
                    </div>
                    <div className="login-form__footer">
                        <button  type="submit" className="btn btn-primary">Войти</button>
                        <Link to='/signup'>У Вас нет аккаунта?</Link>
                    </div>
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
export default connect(mapStateToProps)(LoginForm);
