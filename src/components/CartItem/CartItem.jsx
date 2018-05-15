import React from 'react';
import './CartItem.css';
import { removeItem, updateQuantity } from '../../actions/cartAction';
import { connect } from 'react-redux';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    removeFromCart(uuid) {
        this.props.dispatch(removeItem(uuid));
    }


    updateItemQuantity = (change) => {
        let { quantity,uuid } = this.props;

        switch(change) {
            case 'increment': {
                quantity = quantity + 1;
                break;
            }
            case 'decrement': {
                quantity = quantity - 1;
            }
        }
        let updatedItemParams = {quantity,uuid };
        this.props.dispatch(updateQuantity(updatedItemParams));
    };
    render() {
        const { photo, title, price,quantity,uuid } = this.props;


        return (
            <div className="cart-item">
                <button  onClick={() => {this.removeFromCart(uuid)}} type="button" className="close" aria-label="Delete">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="item-image">
                    <img src={photo} alt="" />
                </div>
                <div className="description">
                    <span>{title}</span>
                </div>

                <div className="item-quantity">
                    <button onClick={() => { this.updateItemQuantity('decrement') }} className="minus-btn" type="button" name="button">-</button>
                    <span>{quantity}</span>
                    <button onClick={() => { this.updateItemQuantity('increment') }} className="plus-btn" type="button" name="button">+</button>

                </div>
                <div className="total-price">{price*quantity}$</div>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        // itemsInStore: state.cart
    }
}


export default connect(mapStateToProps)(CartItem)