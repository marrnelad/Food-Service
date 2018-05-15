import React from 'react';
import { Link } from 'react-router-dom';
import './SupplierItem.css';

class SupplierItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="blocks__item card mb-3">
                <Link to={"/suppliers/" + this.props.uuid + "/food"}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <small className="card-subtitle text-muted">Address: {this.props.address} <br/> Phone: {this.props.phone}</small>
                    </div>
                    <img className="block__img"  src={this.props.photo} alt="Card image"/>
                    <div className="card-body block-footer">
                    </div>
                </Link>
            </div>

        );
    }
}

export default SupplierItem