import {
    GET_SUPPLIERS_LIST,
} from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case GET_SUPPLIERS_LIST: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}