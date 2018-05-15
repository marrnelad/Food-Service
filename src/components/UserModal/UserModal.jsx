import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserModal.css';
import {logoutUser} from "../../actions/userAction";

class UserModal extends React.Component {

    logoutUser() {
        this.props.dispatch(logoutUser());
    }
    render() {
        const { isVisible} = this.props.user;
        return (
            <div className=" modal user-modal" style={isVisible ? {display: 'block'} : {display: 'none'}} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <Link to='/userInfo'>Your information</Link>
                        <Link to='/userOrders'>Orders history</Link>
                        <div className="modal-footer">
                            <a onClick={() => { this.logoutUser() }}>Log out</a>
                        </div>
                    </div>
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