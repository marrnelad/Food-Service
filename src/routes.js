import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import App from './components/App/App.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import history from './history';
import setAuthorizationToken from "./utils/setAuthorizationToken";
import jwt from 'jsonwebtoken';
import {setCurrentUser} from "./actions/userAction";

const createStoreWithMiddleware =  composeWithDevTools(applyMiddleware(thunk))(createStore);
const store = createStoreWithMiddleware(reducers);

if(localStorage.token) {
    setAuthorizationToken(localStorage.token);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));
}
const Routes = () => (
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Header />
                <Main />
                <Footer />
            </App>
        </Router>
    </Provider>
);

export default Routes;