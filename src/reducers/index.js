import { combineReducers } from 'redux';
import SuppliersReducer from './suppliers';
import SuppliersFoodsReducer from './foods';
import CartReducer from './cart';

const rootReducer = combineReducers({
    suppliers: SuppliersReducer,
    foods: SuppliersFoodsReducer,
    cart: CartReducer,

});

export default rootReducer;