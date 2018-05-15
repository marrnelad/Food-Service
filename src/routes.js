import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import App from './components/App/App.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware =  composeWithDevTools(applyMiddleware(thunk))(createStore);
const store = createStoreWithMiddleware(reducers);

const Routes = () => (
    <Provider store={store}>
        <Router>
            <App>
                <Header />
                <Main />
                <Footer />
            </App>
        </Router>
    </Provider>
);

export default Routes;