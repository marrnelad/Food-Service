import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App/App.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

const Routes = () => (
    <Router>
        <App>
            <Header />
            <Main />
            <Footer />
        </App>
    </Router>
);

export default Routes;