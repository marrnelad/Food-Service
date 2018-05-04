import React from 'react';

import './OrderItem.css';

class OrderItem extends React.Component {
    render() {

        return (
            <div class="cart-aside__item list-group-item list-group-item-action flex-column align-items-start active">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>10.20$</small>
                </div>
                <div className="cart-item-footer">
                    <small>Quantity</small>
                    <div className="cart-item-counter">
                        <button className="cart-item__btn cart-item__btn-less" type="button">+</button>
                        <input className="cart-item__quantity-input" value="3"/>
                        <button className="cart-item__btn cart-item__btn-more" type="button">-</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;