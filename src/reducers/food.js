import { GET_SUPPLIERS_FOODS } from '../actions/types';

export default function(state=[], action) {

    switch (action.type) {
        case GET_SUPPLIERS_FOODS:
            return action.payload;

        default:
            return state;
    }

}