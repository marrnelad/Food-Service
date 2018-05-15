import React from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import {toggleCart} from "../../actions/cartAction";
import history from '../../history';


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
        let totalPrice = 0;
        let item = items.length > 0
            ? items.map((item) => {
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
            :  <h6 className="card-title">Ваша корзина пуста</h6>;
        return (
            <div className=" modal cart" style={isVisible ? {display: 'block'} : {display: 'none'}} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Корзина</h5>
                            <button onClick={() => {this.toggleCartVisibility()}} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <table className="table table-hover">
                            <tbody>
                            {item}
                            </tbody>
                        </table>
                        <div className="modal-footer">
                            {!!items.length && <button  onClick={() => { history.push('/orderConfirmation'); this.props.dispatch(toggleCart()) }} type="button" className="btn btn-primary">Заказать</button>}
                            <span>Сумма: {totalPrice}$</span>
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
        userInfo: state.user.info
    }
}

export default connect(mapStateToProps)(Cart)
