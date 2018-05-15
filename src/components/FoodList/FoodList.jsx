import React from 'react';
import FoodItem from '../FoodItem/FoodItem.jsx';
import './FoodList.css';
import { connect } from 'react-redux'
import {getSuppliersFoods} from '../../actions/foodsAction';
import { PulseLoader } from 'react-spinners';

class FoodList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.dispatch(getSuppliersFoods(this.props.match.params.uuid));
    }

  render() {
      let {food, foodItems} = this.props;
       let foodItem = !food.isLoaded
          ?  <PulseLoader
               color={'#252525'}
               loading={!food.isLoaded}
           /> : foodItems.length > 0 ?
           foodItems.map((food) =>
              <FoodItem
                  title={food.title}
                  description={food.description}
                  available={food.available}
                  price={food.price}
                  photo={food.photo}
                  idSupplier={food.FoodAndSupplier.idSupplier}
                  uuid={food.uuid}
                  key={food.uuid}
              />)
          :  <h5 className="card-title">У данного поставщика ещё нет доступных продуктов</h5>;

    return (
        <div className={food.isLoaded ? "blocks" : "spinner"}>
            {foodItem}
        </div>
    );
  }
}
function mapStateToProps (state) {
    return {
        foodItems: state.foods.food,
        food: state.foods
    }
}

export default connect(mapStateToProps)(FoodList)

