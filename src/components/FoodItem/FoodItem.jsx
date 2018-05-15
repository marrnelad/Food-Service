import React from 'react';
import { addToCart } from '../../actions/cartAction';
import './FoodItem.css';
import { connect } from 'react-redux';

class FoodItem extends React.Component {
    constructor(props) {
        super(props);
    }

    _addToCart = (price, description, title, quantity,photo,uuid) => {
        const itemDetails = {
            title: title,
            quantity: quantity,
            price: price,
            description: description,
            photo: photo,
            uuid:uuid,
        };
        // this.setState({
        //     quantity: 1
        // });

        this.props.dispatch(addToCart(itemDetails));
    };

    render() {
        const { photo, title, price, description, available,uuid } = this.props;

        return (
            <div className="blocks__item card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <small className="card-subtitle text-muted">{description}</small> <br/>
                    <small className="card-subtitle text-muted">{available ?
                        "In stock"
                        : "Out of stock"}
                    </small>
                </div>
                <img className="block__img"  src={photo} alt="Food item"/>
                <div className="card-body block-footer">
                    <small className="card-subtitle text-muted food-price">{price}$</small>
                    <button onClick={() => { this._addToCart(price, description, title, 1, photo,uuid) }} disabled={!available} className="btn btn-outline-primary btn-sm">Add to cart</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        // catalog: state.cart
    }
}

export default connect(mapStateToProps)(FoodItem)