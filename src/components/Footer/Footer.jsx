import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Footer.scss';

class Footer extends React.Component {
  render() {

    return (
      <footer className="footer navbar navbar-light bg-light">
        <span>All rights reserved, 2018</span>
      </footer>
    );
  }
}

export default Footer;