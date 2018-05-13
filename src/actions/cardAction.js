import {
    ADD_TO_CART,
    REMOVE_ITEM,
    TOGGLE_CART,
    UPDATE_ITEM_QUANTITY,
} from './types';

export function addToCart(payload) {
    return {
        type: ADD_TO_CART,
        payload: payload
    }
}

export function toggleCart(payload) {
    return {
        type: TOGGLE_CART,
        payload: payload
    }
}

export function removeItem(payload) {
    return {
        type: REMOVE_ITEM,
        payload: payload
    }
}

export function updateQuantity(payload) {
    return {
        type: UPDATE_ITEM_QUANTITY,
        payload: payload
    }
}
