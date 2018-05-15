import React from 'react';
import './UserInformation.css';
import { connect } from 'react-redux'

class UserInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <div className="jumbotron user-info">
                {this.props.user.isAuthenticated
                    ? <div>
                        <h1 className="display-6 user-info-header">Личные данные</h1>
                        <table className="table table-hover user-info-table">
                            <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Email</th>
                                <th scope="col">Телефон</th>
                                <th scope="col">Адрес</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{this.props.user.info.name}</td>
                                <td>{this.props.user.info.email}</td>
                                <td>{this.props.user.info.phone}</td>
                                <td>{this.props.user.info.address}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    : <h3 className="display-6 user-info-header">Для начала Вы должны войти в систему</h3>}
                    </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(UserInformation)

