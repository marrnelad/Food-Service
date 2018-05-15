import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import {toggleCart} from "../../actions/cartAction";
import { connect } from 'react-redux';

class Header extends React.Component {
    toggleCartVisibility() {
        this.props.dispatch(toggleCart());
    }


    render() {
        return (
            <header className="header">
                <NavLink exact={true} to='/' className="header__logo" >Eda</NavLink>
                <div className="header-right">
                    <button onClick={() => { this.toggleCartVisibility() }} className="header__btn-cart">
                    </button>
                    <NavLink to='/signin' className="btn btn-secondary my-2 my-sm-0">Sign in</NavLink>
                    <NavLink to='/signup' className="btn btn-secondary my-2 my-sm-0">Sign up</NavLink>
                </div>
            </header>
        );
    }
}

function mapStateToProps (state) {
    return {
        // isVisible: state.cart.isVisible,
    }
}

export default connect(mapStateToProps)(Header)