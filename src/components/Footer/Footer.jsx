import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Footer.css';

class Footer extends React.Component {
    render() {

        return (
            <footer className="footer bg-light">
                <span>All rights reserved, 2018</span>
            </footer>
        );
    }
}

export default Footer;