import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserModal.css';
import {
    logoutUser,
    toggleUserModal,
} from '../../actions/userAction';

class UserModal extends React.Component {

    render() {
        const { isVisible} = this.props.user;
        return (
            <div className=" modal user-modal" style={isVisible ? {display: 'block'} : {display: 'none'}} >
                <div className="modal-dialog">
                    {this.props.user.isAuthenticated && this.props.user.info.role === 'admin' ?
                        <div className="modal-content">
                            <Link to='/userOrders' onClick={() => {this.props.dispatch(toggleUserModal())}}>Просмотреть заказы клиентов</Link>
                            <Link to='/userProfiles' onClick={() => {this.props.dispatch(toggleUserModal())}}>Изменить данные клиента</Link>
                            <Link to='/suppliersEditing' onClick={() => {this.props.dispatch(toggleUserModal())}}>Изменить данные поставщика</Link>
                            <div className="modal-footer">
                                <a onClick={() => { this.props.dispatch(logoutUser()) }}>Выйти</a>
                            </div>
                        </div>
                        : <div className="modal-content">
                            <Link to='/userInfo' onClick={() => {this.props.dispatch(toggleUserModal())}}>Личные данные</Link>
                            <Link to='/userOrders' onClick={() => {this.props.dispatch(toggleUserModal())}}>История заказов</Link>
                            <div className="modal-footer">
                                <a onClick={() => { this.props.dispatch(logoutUser()) }}>Выйти</a>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserModal)
