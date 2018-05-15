import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './SupplierItem.css';
import {
    getSuppliersFoods
} from "../../actions/foodsAction";

class SupplierItem extends React.Component {
    render() {
        return (
            <div className="blocks__item card mb-3">
                <Link to={"/suppliers/" + this.props.uuid + "/food"}
                      onClick={() => {this.props.dispatch(getSuppliersFoods(this.props.uuid))}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <small className="card-subtitle text-muted">Адрес: {this.props.address} <br/> Телефон: {this.props.phone}
                        </small>
                    </div>
                    <img className="block__img" src={this.props.photo} alt="Card "/>
                    <div className="card-body block-footer"></div>
                </Link>
            </div>
        )
    }
}

export default connect()(SupplierItem)