import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import DishdetailComponents from './DishdetailComponents';
import {DISHES} from '../shared/dishes';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish: dishId});
    }

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Ristoranet Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
        // defining onClick Function, the below function is same as function name(dishId){return this.onDishSelect(dishid);}
            onClick={(dishId)=> this.onDishSelect(dishId)}/>
            {/* Here I am retrieving the dish from the dish object
             using the dish. filter allows me to iterate over
             all the dishes in the this.state.dishes and returns 
             an array. Therefore the [0] at the end to extract the 
             dish*/}
        <DishdetailComponents  currDish={this.state.dishes.filter(
            (dish) => dish.id===this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
