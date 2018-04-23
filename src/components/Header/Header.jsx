import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Header.scss';

class Header extends React.Component {
  render() {

    return (
      <header className="app-header navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Eda</a>
        <div>
          <button className="header__btn-cart"></button>
          <a className="btn btn-secondary my-2 my-sm-0">Sign in</a>
          <a className="btn btn-secondary my-2 my-sm-0">Sign up</a>
        </div>
      </header>
    );
  }
}

export default Header;