import React from 'react';
import './CartItem.css';
import {
    removeItem,
    updateQuantity
} from '../../actions/cartAction';
import { connect } from 'react-redux';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
                break;
            }
        }
        let updatedItemParams = {quantity,uuid };
        this.props.dispatch(updateQuantity(updatedItemParams));
    };
    render() {
        const { photo, title, price,quantity,uuid } = this.props;


        return (

                <tr>
                    <th scope="row">
                        <button  onClick={() => {this.props.dispatch(removeItem(uuid))}} type="button" className="close" aria-label="Delete">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </th>
                    <td className="item-image"> <img src={photo} alt="" /></td>
                    <td>{title}</td>
                    <td>
                        <button onClick={() => { this.updateItemQuantity('decrement') }} type="button" className="btn btn-outline-secondary btn-minus">-</button>
                        <span className="item-quantity">{quantity}</span>
                        <button onClick={() => { this.updateItemQuantity('increment') }} type="button" className="btn btn-outline-secondary btn-plus">+</button>
                    </td>
                    <td>
                        {price*quantity}$
                    </td>
                </tr>
        );
    }
}


export default connect()(CartItem)