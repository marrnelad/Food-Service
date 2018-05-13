import {
    CREATE_SUPPLIER_FOOD,
    DELETE_SUPPLIER_FOOD,
    GET_SUPPLIERS_FOODS_ERROR,
    GET_SUPPLIERS_FOODS_LOADED,
    GET_SUPPLIERS_FOODS_SUCCESS,
    TOGGLE_ADD_SUPPLIER_FOOD_FIELD,
} from './types';
import axios from 'axios';

export  const getSupplierFoodHasError = (bool) => {
    return {
        type: GET_SUPPLIERS_FOODS_ERROR,
        hasError: bool
    }
};
export  const getSupplierFoodIsLoaded = (bool) => {
    return {
        type: GET_SUPPLIERS_FOODS_LOADED,
        isLoaded: bool
    }
};
export  const getSupplierFoodSuccess = (food) => {
    return {
        type:GET_SUPPLIERS_FOODS_SUCCESS,
        food
    }
};
export function getSuppliersFoods(idSupplier)  {
    return (dispatch) => {
        dispatch(getSupplierFoodIsLoaded(false));
        axios.get(`http://localhost:3000/api/suppliers/${idSupplier}/food`)
            .then((response) => {
                if (!response) {
                    throw Error(response.statusText);
                }
                setTimeout(()=> {dispatch(getSupplierFoodIsLoaded(true))}, 250);

                return response;
            })
            .then((food) => dispatch(getSupplierFoodSuccess(food.data)))
            .catch(() => dispatch(getSupplierFoodHasError(true)));
    };
}
export function createSupplierFood(foodData, idSupplier) {
    return dispatch => {
        axios.post(`http://localhost:3000/api/admin/suppliers/${idSupplier}/food`, foodData)
            .then(res => {
                dispatch({
                    type: CREATE_SUPPLIER_FOOD,
                    payload: res.data,
                });
            });
    }
}
export function updateSupplierFood(foodData) {
    return dispatch => {
        axios.put(`http://localhost:3000/api/admin/suppliers/food`, foodData)
            .then((res) => {
                dispatch({
                    type: GET_SUPPLIERS_FOODS_SUCCESS,
                    payload: res.data,
                });
            });
    }
}
export function deleteSupplierFood(idFood) {
    return dispatch => {
        axios.delete(`http://localhost:3000/api/admin/food/${idFood}`)
            .then(res => {
                dispatch({
                    type: DELETE_SUPPLIER_FOOD,
                    payload: res.data,
                });
            });
    }
}
export function toggleAddSupplierFoodField(payload) {
    return {
        type: TOGGLE_ADD_SUPPLIER_FOOD_FIELD,
        payload: payload
    }
}