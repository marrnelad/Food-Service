import { combineReducers } from 'redux';
import SuppliersReducer from './suppliers';
import SuppliersFoodsReducer from './foods';
import CartReducer from './cart';
import UserReducer from './user';
import OrderReducer from './order'
import OrderDateDropdownReducer from './orderDateDropdown';

const rootReducer = combineReducers({
    supplier: SuppliersReducer,
    foods: SuppliersFoodsReducer,
    cart: CartReducer,
    user: UserReducer,
    order: OrderReducer,
    orderDateDropdown: OrderDateDropdownReducer,
});

export default rootReducer;