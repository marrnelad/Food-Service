import {
    ADD_TO_CART,
    REMOVE_ITEM,
    UPDATE_CART,
    UPDATE_QUANTITY,
    OPEN_CART
} from '../actions/types';

export default function(state = [], action) {


    switch (action.type) {
        case ADD_TO_CART: {
            let { uuid } = action.payload;
            state.map(item => {
                if(item.uuid === uuid) {
                    item.quantity++;
                }

            });
            return [...state, action.payload]
        }
        case OPEN_CART: {
            return [...state]
        }

        case UPDATE_CART: {


            return state.map((item, index) => {
                if(index !== action.index) {
                    return item;
                }

                return [
                    ...state,
                    ...action.payload
                ]
            });
        }
        case UPDATE_QUANTITY: {

            const { quantity, uuid } = action.payload;
            return [...state.filter((item) => item.uuid === uuid ? item.quantity = quantity : 1)]



        }
        case REMOVE_ITEM: {


            return state.filter(({ uuid }) => uuid !== action.payload);

        }
        default:
            return state;
    }

}