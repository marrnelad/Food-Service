import React from 'react';
import FoodItem from '../FoodItem/FoodItem.jsx';
import './FoodList.css';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import getSuppliersFoods from '../../actions/foodsAction';

class FoodList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.getSuppliersFoods();

    }

    render() {
        let {foods} = this.props;
        let foodsContainer;
        foods.length > 0
            ? foodsContainer = foods.map((food, index) =>
                <FoodItem
                    title={food.title}
                    description={food.description}
                    available={food.available}
                    price={food.price}
                    photo={food.photo}
                    uuid={food.uuid}
                    key={index}
                />)
            : foodsContainer =  <h5 className="card-title">Sorry, this supplier haven't any food yet</h5>;

        return (
            <div className="blocks">
                {foodsContainer}
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        foods: state.foods,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuppliersFoods: getSuppliersFoods
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList)