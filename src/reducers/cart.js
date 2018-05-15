import {
    ADD_TO_CART,
    REMOVE_ITEM,
    UPDATE_ITEM_QUANTITY,
    TOGGLE_CART,
    TOGGLE_USER_MODAL,
    LOGIN_SUCCESS,
    CLEAR_CART,
} from '../actions/types';

export default function(state = {items:[], isVisible: false}, action) {

    switch (action.type) {
        case ADD_TO_CART: {
            let { uuid } = action.payload;
            let newState = Object.assign({}, state);
            newState.items.forEach((item) => {
                if(item.uuid === uuid) {
                    item.quantity += 1;
                    delete action.payload;
                }});
            action.payload === undefined ? newState.items = [...state.items] : newState.items = [...state.items, action.payload];
            newState.isVisible = true;
            return newState
        }

        case TOGGLE_CART: {
            return Object.assign({}, state, {isVisible : !state.isVisible});
        }
        case TOGGLE_USER_MODAL: {
            return Object.assign({}, state, {isVisible : false});
        }
        case LOGIN_SUCCESS: {
            return Object.assign({}, state, {isVisible : false});
        }
        case UPDATE_ITEM_QUANTITY: {
            const { quantity, uuid } = action.payload;
            return Object.assign({}, state, {items: [...state.items.filter((item) => item.uuid === uuid ? item.quantity = quantity : 1)]});
        }
        case REMOVE_ITEM: {
            return  Object.assign({}, state, {items:state.items.filter(({ uuid }) => uuid !== action.payload)});
        }
        case CLEAR_CART: {
            return  Object.assign({}, state, {items: []});
        }
        default:
            return state;
    }
}