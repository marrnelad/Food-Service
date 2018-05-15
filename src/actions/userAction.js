import axios from 'axios';
import history from '../history';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import {
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SET_CURRENT_USER,
    TOGGLE_USER_MODAL,
    GET_ALL_USERS,
} from './types';
import {clearOrders} from "./orderAction";

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }

}

export function registerUser(userData) {
    return dispatch => {
        dispatch({
            type: REGISTER_REQUEST
        });
        axios.post(`http://localhost:3000/signup/`, userData)
            .then(res =>  {
                if (res) {
                    dispatch({
                        type: REGISTER_SUCCESS,
                    });
                    const token = res.data.token;
                    localStorage.setItem('token', token);
                    setAuthorizationToken(token);
                    dispatch(setCurrentUser(jwt.decode(token)));
                    history.goBack();
                }
            })
            .catch(() =>  {
                dispatch({
                    type: REGISTER_FAILURE,
                    payload: 'User with that email already exists!'
                });
            })
    }
}
export function loginUser(userData) {
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
        });
        axios.post(`http://localhost:3000/signin/`, userData)
            .then(res =>  {
                if (res) {
                    const token = res.data.token;
                    localStorage.setItem('token', token);
                    setAuthorizationToken(token);
                    dispatch(setCurrentUser(jwt.decode(token)));
                    dispatch({
                        type: LOGIN_SUCCESS,
                    });
                    history.goBack();
                }

            })
            .catch(()=>  {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: 'Incorrect username or password!'
                });
            })
    }
}
export function logoutUser() {
    return dispatch => {
        localStorage.removeItem('token');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
        dispatch(clearOrders());
        history.push('/')
    }
}
export function toggleUserModal(payload) {
    return {
        type: TOGGLE_USER_MODAL,
        payload: payload
    }
}
export function getUserProfiles() {
    return dispatch => {
        axios.get(`http://localhost:3000/api/admin/userProfiles`)
            .then(res => {
                dispatch({
                    type: GET_ALL_USERS,
                    payload: res.data,
                });
            });
    }
}
export function updateUser(userData) {
    return dispatch => {
        axios.put(`http://localhost:3000/api/admin/userProfiles`, userData)
            .then(res => {
                dispatch({
                    type: GET_ALL_USERS,
                    payload: res.data,
                });
            });
    }
}


