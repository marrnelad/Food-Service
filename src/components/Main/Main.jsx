import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm.jsx'
import RegisterForm from '../RegisterForm/RegisterForm.jsx';
import SuppliersList from '../SuppliersList/SuppliersList.jsx';
import FoodList from '../FoodList/FoodList.jsx';
import Cart from '../Cart/Cart.jsx';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='main'>
                <Cart/>
                <Switch>
                    <Route exact={true} path='/' component={SuppliersList} />
                    <Route path='/signin' component={LoginForm} />
                    <Route path='/signup' component={RegisterForm} />
                    <Route path={window.location.pathname} component={FoodList} />
                </Switch>
            </div>
        );
    }
}

export default Main;