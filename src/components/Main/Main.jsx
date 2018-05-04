import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm.jsx'
import RegisterForm from '../RegisterForm/RegisterForm.jsx';


class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <Switch>
                    <Route path='/signin' component={LoginForm}/>
                    <Route path='/signup' component={RegisterForm}/>
                </Switch>
            </div>
        );
    }
}

export default Main;