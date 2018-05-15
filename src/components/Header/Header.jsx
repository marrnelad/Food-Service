import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {toggleCart} from "../../actions/cartAction";
import {toggleUserModal} from "../../actions/userAction";
import { connect } from 'react-redux';


class Header extends React.Component {

  render() {
        let numberOfItemsInCart = this.props.items.length > 0 ?  this.props.items.length : '';
    return (
      <header className="header">
        <Link exact={true} to='/' className="header__logo" >iFood</Link>
        <div className="header-right">
          <button onClick={() => {this.props.dispatch(toggleCart())}} className="header__btn-cart">
              <span className='header__num-of-items'> {numberOfItemsInCart}</span>
          </button>
            { this.props.user.isAuthenticated ?
                <button onClick={() => {this.props.dispatch(toggleUserModal())}} className="header__btn-user"></button>
                : <div>
                    <Link to='/signin' className="btn btn-secondary my-2 my-sm-0">Войти</Link>
                    <Link to='/signup' className="btn btn-secondary my-2 my-sm-0">Зарегистрироваться</Link>
                </div>
            }
        </div>
      </header>
    );
  }
}

function mapStateToProps (state) {
    return {
        items: state.cart.items,
        user: state.user
    }
}

export default connect(mapStateToProps)(Header)
