import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


class Header extends React.Component {
    render() {

        return (
            <header className="header">
                <NavLink exact={true} to='/' className="header__logo" >Eda</NavLink>
                <div className="header-right">
                    <button  className="header__btn-cart">
                    </button>
                    <NavLink to='/signin' className="btn btn-secondary my-2 my-sm-0">Sign in</NavLink>
                    <NavLink to='/signup' className="btn btn-secondary my-2 my-sm-0">Sign up</NavLink>
                </div>
            </header>
        );
    }
}
export default Header