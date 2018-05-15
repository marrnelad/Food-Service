import React from 'react';
import {registerUser} from "../../actions/userAction";
import { connect } from 'react-redux';
import './RegisterForm.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            address: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errorMessage: ''
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            errorMessage: nextProps.user.error
        })
    }
    registerUser(e) {
        if(this.state.password === this.state.passwordConfirmation) {
            const userData = {
                name: this.state.username,
                phone: this.state.phone,
                address: this.state.address,
                email: this.state.email,
                password: this.state.password
            };
            this.props.dispatch(registerUser(userData));
        } else  {
            this.setState({

                errorMessage: `Пароли не совпадают!`
            })
        }
        e.preventDefault();
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
            errorMessage: ''
        })
    }
    render() {
        return (
            <form onSubmit={(e) => this.registerUser(e)} className="register-form" >
                <p className={this.state.errorMessage ? "error-message error" : "error"}>{this.state.errorMessage}</p>
                <fieldset>
                    <legend>Регистрация</legend>
                    <div className="form-group">
                        <label className="col-form-label">Имя</label>
                        <input type="text" className="form-control"  name="username" onChange={(e)=>{this.inputHandler(e)}} required/>
                    </div>
                    <div className="form-group">
                        <label className="col-form-label">Телефон</label>
                        <input type="tel" className="form-control" name="phone" onChange={(e)=>{this.inputHandler(e)}} required/>
                    </div>
                    <div className="form-group">
                        <label >Адрес</label>
                        <input type="text" className="form-control" name="address" onChange={(e)=>{this.inputHandler(e)}} required/>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" name="email" onChange={(e)=>{this.inputHandler(e)}} required/>
                            <small className="form-text text-muted">Мы не делимся с кем-либо информацией о вашем email.</small>
                    </div>
                    <div className="form-group">
                        <label >Пароль</label>
                        <input type="password" className="form-control" id="user-password"  name="password" onChange={(e)=>{this.inputHandler(e)}} required/>
                    </div>
                    <div className="form-group">
                        <label >Подтверждение пароля</label>
                        <input type="password" className="form-control" name="passwordConfirmation" onChange={(e)=>{this.inputHandler(e)}} required/>
                    </div>
                    <button  type="submit" className="btn btn-primary">Зарегистрироваться</button>
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
