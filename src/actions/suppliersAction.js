import axios from 'axios';
import {
    DELETE_SUPPLIER,
    GET_SUPPLIERS_LIST,
    CREATE_SUPPLIER, TOGGLE_ADD_SUPPLIER_FIELD,
} from './types';

export function getSuppliersList() {
    return dispatch => {
        axios.get(`http://localhost:3000/api/suppliers/`)
            .then(res => {
                dispatch({
                    type: GET_SUPPLIERS_LIST,
                    payload: res.data,
                });
            });
    }
}
export function updateSupplier(supplierData) {
    return dispatch => {
        axios.put(`http://localhost:3000/api/admin/suppliers`, supplierData)
            .then(res => {
                dispatch({
                    type: GET_SUPPLIERS_LIST,
                    payload: res.data,
                });
            });
    }
}
export function createSupplier(supplierData) {
    return dispatch => {
        axios.post(`http://localhost:3000/api/admin/suppliers`, supplierData)
            .then(res => {
                dispatch({
                    type: CREATE_SUPPLIER,
                    payload: res.data,
                });
            });
    }
}
export function deleteSupplier(idSupplier) {
    return dispatch => {
        axios.delete(`http://localhost:3000/api/admin/suppliers/${idSupplier}`)
            .then(res => {
                dispatch({
                    type: DELETE_SUPPLIER,
                    payload: res.data,
                });
            });
    }
}
export function toggleAddSupplierField(payload) {
    return {
        type: TOGGLE_ADD_SUPPLIER_FIELD,
        payload: payload
    }
}
