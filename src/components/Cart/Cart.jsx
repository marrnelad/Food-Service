import React from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import '../CartItem/CartItem';
import CartItem from '../CartItem/CartItem';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // isOpened: true
        }
    }
    render() {
        const cartItems = this.props.cart;
        let cartItem;
        cartItems.length > 0
            ? cartItem =  cartItems.map((item) =>
                <CartItem
                    title = {item.title}
                    price = {item.price}
                    photo = {item.photo}
                    quantity = {item.quantity}
                    uuid = {item.uuid}
                />
            )
            : cartItem = <h6 className="card-title">Sorry, your cart is empty</h6>;

        return (
            <div className=" modal cart"  >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Shopping cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {cartItem}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(Cart)