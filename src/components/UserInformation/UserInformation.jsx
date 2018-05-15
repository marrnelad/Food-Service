import React from 'react';
import './UserInformation.css';
import { connect } from 'react-redux'
import {toggleUserModal} from "../../actions/userAction";

class UserInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.props.dispatch(toggleUserModal());
    }
    render() {
        let {name, email,phone} = this.props.userInfo;
        return (
            <div className="jumbotron user-info">
                <h1 className="display-6 user-info-header">User information</h1>
                <table className="table table-hover user-info-table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        userInfo: state.user.info,
    }
}

export default connect(mapStateToProps)(UserInformation)