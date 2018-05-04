import React from 'react';

import './Cart.css';

class Cart extends React.Component {
    render() {

        return (
            <aside className="cart-aside">
                <div class="list-group">

                </div>
                <div class="form-group">
                    <input className="form-control form-control-sm" type="text" placeholder="Address" id="inputSmall"/>
                </div>
                <button type="button" class="btn btn-outline-primary btn-sm btn-block">Make an order</button>
            </aside>
        );
    }
}

export default Cart;