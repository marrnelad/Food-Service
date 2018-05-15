import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import SupplierItem from '../SupplierItem/SupplierItem.jsx';
import { getSuppliersList } from '../../actions/suppliersAction';
import './SuppliersList.css';

class SuppliersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getSuppliersList();
    }


    render() {
        let {suppliers} = this.props;
        let suppliersContainer = suppliers.map((supplier, index) =>
            <SupplierItem
                name={supplier.name}
                address={supplier.address}
                phone={supplier.phone}
                photo={supplier.photo}
                uuid={supplier.uuid}
                key={index}
            />
        );
        return (
            <div>
                <span className='blocks-title'>Choose your supplier</span>
                <div className='blocks'>
                    {suppliersContainer}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        suppliers: state.suppliers,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuppliersList: getSuppliersList,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersList);