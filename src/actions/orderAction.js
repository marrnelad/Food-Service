import axios from 'axios';
import history from '../history';
import {
    CLEAR_CART,
    GET_USER_ORDERS,
    CLEAR_ORDERS,
} from './types';

export function makeOrder(foods) {
    return dispatch => {
       foods.length && axios.post(`http://localhost:3000/api/users/${foods[0].idUser}/orders`, foods)
            .then(() =>  {
                    dispatch({
                        type:CLEAR_CART
                    });
                    history.push('/userOrders');
                })
            .catch(error =>  {
                    console.log( error);

            })
    }
}
export function getAllOrders() {
    return dispatch => {
        axios.get(`http://localhost:3000/api/admin/userOrders` )
            .then((res) => {
                dispatch({
                    type: GET_USER_ORDERS,
                    payload: res.data
                })
            })
            .catch(error =>  {
                console.log( error);

            })
    }
}
export function getAllOrdersForToday() {
    return dispatch => {
        axios.get(`http://localhost:3000/api/admin/userOrders/today`)
            .then((res) => {
                dispatch({
                    type: GET_USER_ORDERS,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);

            })
    }
}
export function getAllOrdersForWeek() {
    return dispatch => {
        axios.get(`http://localhost:3000/api/admin/userOrders/week`)
            .then((res) => {
                dispatch({
                    type: GET_USER_ORDERS,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);

            })
    }
}
export function getUserOrders(idUser) {
    return dispatch => {
        axios.get(`http://localhost:3000/api/users/${idUser}/orders` )
            .then((res) => {
                dispatch({
                    type: GET_USER_ORDERS,
                    payload: res.data
                })
            })
            .catch(error =>  {
                console.log( error);

            })
    }
}
export function getUserOrdersForToday(idUser) {
    return dispatch => {
        axios.get(`http://localhost:3000/api/users/${idUser}/orders/today` )
            .then((res) => {
                dispatch({
                    type: GET_USER_ORDERS,
                    payload: res.data
                })
            })
            .catch(error =>  {
                console.log( error);

            })
    }
}
export function getUserOrdersForWeek(idUser) {
    return dispatch => {
        axios.get(`http://localhost:3000/api/users/${idUser}/orders/week` )
            .then((res) => {
                dispatch({
                    type: GET_USER_ORDERS,
                    payload: res.data
                })
            })
            .catch(error =>  {
                console.log( error);

            })
    }
}
export function clearOrders() {
    return {
        type: CLEAR_ORDERS,
    }
}
