import React from 'react';
import { addToCart } from '../../actions/cartAction';
import './FoodItem.css';
import { connect } from 'react-redux';

class FoodItem extends React.Component {

    addItemToCart = (price, description, title, quantity,photo,uuid, idSupplier) => {
        const itemDetails = {
            title: title,
            quantity: quantity,
            price: price,
            description: description,
            photo: photo,
            idSupplier: idSupplier,
            uuid:uuid,
        };
        this.props.dispatch(addToCart(itemDetails));
    };

  render() {
      const { photo, title, price, description, available,uuid, idSupplier} = this.props;
      const unavailableItemImage = available ? {opacity: "1"} : {opacity: "0.2"};

      return (
      <div className="blocks__item card mb-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
            <small className="card-subtitle text-muted">{description}</small> <br/>
            <small className="card-subtitle text-muted">
                {available ? "В наличии" : "Нет в наличии"}
            </small>
        </div>
        <img className="block__img"  src={photo} style={unavailableItemImage} alt="Food item"/>
        <div className=" block-footer">
            <small className="card-subtitle text-muted food-price">{price}$</small>
          <button onClick={() => { this.addItemToCart(price, description, title, 1, photo,uuid, idSupplier) }} disabled={!available} className="btn btn-outline-primary btn-sm">Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

export default connect()(FoodItem)
