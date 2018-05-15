import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm';
import SuppliersList from '../SuppliersList/SuppliersList';
import FoodList from '../FoodList/FoodList';
import Cart from '../Cart/Cart';
import UserModal from '../UserModal/UserModal'
import UserInformation from '../UserInformation/UserInformation';
import UserOrders from '../UserOrders/UserOrders';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';
import UserProfiles from '../UserProfiles/UserProfiles';
import SuppliersEditingList from '../SuppliersEditingList/SuppliersEditingList';
import FoodEditingList from '../FoodEditingList/FoodEditingList';

const Main = () => {
    return (
        <div className='main'>
            <Switch>
                <Route exact='true' path='/' component={SuppliersList} />
                <Route path='/signin' component={LoginForm} />
                <Route path='/signup' component={RegisterForm} />
                <Route path='/userInfo' component={UserInformation}/>
                <Route path='/userOrders' component={UserOrders}/>
                <Route path='/orderConfirmation' component={OrderConfirmation}/>
                <Route path='/userProfiles' component={UserProfiles}/>
                <Route path='/suppliersEditing'  component={SuppliersEditingList}/>
                <Route path={`/suppliers/:uuid/edit`} component={FoodEditingList} />
                <Route path={`/suppliers/:uuid/food`} component={FoodList} />
            </Switch>
            <Cart/>
            <UserModal/>
        </div>
    );
};

export default Main;
