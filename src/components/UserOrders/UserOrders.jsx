import React from 'react';
import './UserOrders.css';
import { connect } from 'react-redux';
import UserOrderItems from '../UserOderItems/UserOderItems'
import history from '../../history';
import {toggleOrderDateDropdown} from '../../actions/orderDateDropdownAction';
import {
    getUserOrders,
    getAllOrdersForWeek,
    getUserOrdersForToday,
    getUserOrdersForWeek,
    getAllOrders,
    getAllOrdersForToday,
} from '../../actions/orderAction';

class UserOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }
    componentDidMount() {
        if(this.props.user.isAuthenticated && this.props.user.info.role === 'admin') {
         this.props.dispatch(getAllOrders());
        }
        else if (this.props.user.isAuthenticated) {
            this.props.dispatch(getUserOrders(this.props.user.info.uuid));
        }
    }
    onInputChange (e) {
        this.setState({
            searchValue: e.target.value
        });
        e.preventDefault();
    };

    render() {
        const { isVisible} = this.props.orderDateDropdown;
        const {orders} = this.props;
        const filteredOrders = orders.filter((order) => {
            if (this.props.user.info.role === 'admin') {
                return order.orderDate.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.Food.title.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.User.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.User.phone.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.User.email.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.shippingAddress.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.User.address.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.Supplier.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.count.toString().includes(this.state.searchValue)
            } else {
                return order.orderDate.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.Food.title.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.shippingAddress.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.Food.description.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.Supplier.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) ||
                    order.count.toString().includes(this.state.searchValue)
            }
        });
        const orderItemsContainer = orders.length > 0
            ? filteredOrders.map((order) => {
            if (this.props.user.info.role === 'admin') {
                return <UserOrderItems
                    supplierName={order.Supplier.name}
                    supplierPhoto={order.Supplier.photo}
                    supplierId={order.Supplier.uuid}
                    orderDate={order.orderDate}
                    title={order.Food.title}
                    price={order.Food.price}
                    photo={order.Food.photo}
                    count={order.count}
                    shippingAddress={order.shippingAddress}
                    username={order.User.name}
                    userPhone={order.User.phone}
                    userEmail={order.User.email}
                    key={order.uuid}
                />
            }
            else {
                return <UserOrderItems
                    supplierName={order.Supplier.name}
                    supplierPhoto={order.Supplier.photo}
                    supplierId={order.Supplier.uuid}
                    orderDate={order.orderDate}
                    shippingAddress={order.shippingAddress}
                    title={order.Food.title}
                    description={order.Food.description}
                    price={order.Food.price}
                    photo={order.Food.photo}
                    count={order.count}
                    key={order.uuid}
                />
            }})
            : <th className="card-title">У Вас ещё нет заказов</th>;

        return (
            <div className="jumbotron user-info">
                <button type="button" onClick={() => {
                    history.goBack();
                }} className="close btn-delete btn-go-back" aria-label="Go back">
                    <span aria-hidden="true">&larr;</span>
                </button>
                {!this.props.user.isAuthenticated ?
                    <h3 className="display-6 user-info-header">Для начала Вы должны войти в систему</h3>
                    : this.props.user.info.role === 'admin' ?
                        <div>
                            <div className="user-orders__header">
                                <h1 className="display-6 user-info-header for-print">Заказы клиентов</h1>
                                <form>
                                    <input onChange={(e) => this.onInputChange(e)}  className="form-control form-control-sm mr-sm-2 search-input" type="search" placeholder="Поиск по заказам..."/>
                                    <button type="button" className="btn btn-outline-primary btn-sm btn-admin"
                                            onClick={() => {window.print()}}>Распечатать заказы клиентов
                                    </button>
                                </form>

                            </div>
                            <table className="table table-hover user-info-table for-print">
                                <thead>
                                <tr>
                                    <th scope="col">Поставщик</th>
                                    <th scope="col" className="supplier-separator"></th>
                                    <th scope="col">Продукт</th>
                                    <th scope="col"></th>
                                    <th scope="col">Количество</th>
                                    <th scope="col">Сумма</th>
                                    <th scope="col" className="nav-item dropdown show">
                                        <a className="nav-link dropdown-toggle" onClick = {() => {
                                            this.props.dispatch(toggleOrderDateDropdown());
                                        }}
                                           data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="true">Дата заказа</a>
                                        <div className="dropdown-menu show" style={isVisible ? {display: 'block'} : {display: 'none'}}>
                                            <a className="dropdown-item"  onClick={() => {
                                                this.props.dispatch(toggleOrderDateDropdown());
                                                this.props.dispatch(getAllOrders());
                                            }}>Все</a>
                                            <a className="dropdown-item" onClick={() => {
                                                this.props.dispatch(toggleOrderDateDropdown());
                                                this.props.dispatch(getAllOrdersForToday());
                                            }}>Сегодня</a>
                                            <a className="dropdown-item" onClick={() => {
                                                this.props.dispatch(toggleOrderDateDropdown());
                                                this.props.dispatch(getAllOrdersForWeek());
                                            }}>За последнюю неделю</a>
                                        </div>
                                    </th>
                                    <th scope="col">Имя клиента</th>
                                    <th scope="col">Телефон клиента</th>
                                    <th scope="col">Адрес доставки</th>
                                </tr>
                                </thead>
                                {orderItemsContainer}
                            </table>
                        </div>
                        : <div>
                            <div className="user-orders__header">
                                <h1 className="display-6 user-info-header">Ваши заказы</h1>
                                <form>
                                    <input onChange={(e) => this.onInputChange(e)}  className="form-control form-control-sm mr-sm-2" type="search" placeholder="Поиск по заказу"/>
                                </form>
                            </div>
                            <table className="table table-hover user-info-table">
                                <thead>
                                <tr>
                                    <th scope="col">Поставщик</th>
                                    <th scope="col" className="supplier-separator"></th>
                                    <th scope="col">Продукт</th>
                                    <th scope="col"></th>
                                    <th scope="col">Количество</th>
                                    <th scope="col">Сумма</th>
                                    <th scope="col" className="nav-item dropdown show">
                                        <a className="nav-link dropdown-toggle" onClick = {() => {
                                            this.props.dispatch(toggleOrderDateDropdown());
                                        }}
                                           data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="true">Дата заказа</a>
                                        <div className="dropdown-menu show" style={isVisible ? {display: 'block'} : {display: 'none'}}>
                                            <a className="dropdown-item"  onClick={() => {
                                                this.props.dispatch(toggleOrderDateDropdown());
                                                this.props.dispatch(getUserOrders(this.props.user.info.uuid));
                                            }}>Все</a>
                                            <a className="dropdown-item" onClick={() => {
                                                this.props.dispatch(toggleOrderDateDropdown());
                                                this.props.dispatch(getUserOrdersForToday(this.props.user.info.uuid));
                                            }}>Сегодня</a>
                                            <a className="dropdown-item" onClick={() => {
                                                this.props.dispatch(toggleOrderDateDropdown());
                                                this.props.dispatch(getUserOrdersForWeek(this.props.user.info.uuid));
                                            }}>За последнюю неделю</a>
                                        </div>
                                    </th>
                                    <th scope="col">Адрес доставки</th>

                                </tr>
                                </thead>
                                {orderItemsContainer}
                                </table>
                        </div>
                }
                </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        orders: state.order,
        user: state.user,
        orderDateDropdown: state.orderDateDropdown,
    }
}

export default connect(mapStateToProps)(UserOrders)

