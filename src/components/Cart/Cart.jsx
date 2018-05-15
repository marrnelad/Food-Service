import React from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import '../CartItem/CartItem';
import CartItem from '../CartItem/CartItem';
import {toggleCart} from "../../actions/cartAction";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    toggleCartVisibility() {
        this.props.dispatch(toggleCart());
    }

    render() {
        const {items, isVisible} = this.props;
        let item;
        let totalPrice = 0;
        items.length > 0
            ? item =  items.map((item) =>{
                totalPrice +=item.price*item.quantity ;
                return <CartItem
                    title = {item.title}
                    price = {item.price}
                    photo = {item.photo}
                    quantity = {item.quantity}
                    uuid = {item.uuid}
                />
            }

            )
            : item = <h6 className="card-title">Sorry, your cart is empty</h6>;
        let visibility = isVisible
            ? {display: 'block'}
            : {display: 'none'};
        return (
            <div className=" modal cart" style={visibility} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Shopping cart</h5>
                            <button onClick={() => { this.toggleCartVisibility() }} type="button" className="close" data-dismiss="modal" aria-label="Close" >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        {item}
                        <div className="modal-footer">
                            <span>Total: {totalPrice}$</span>
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
        items: state.cart.items,
        isVisible: state.cart.isVisible,
    }
}

export default connect(mapStateToProps)(Cart)