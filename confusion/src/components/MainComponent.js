import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import DishdetailComponents from './DishdetailComponents';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent'
import Footer from './FooterComponent'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dishes: DISHES,
      selectedDish: null
    };
  }
// arrow functions dont have their own this
// while a normal function does where we have to use bind
// in the contructor
  onDishSelect(dishId){
    this.setState({selectedDish: dishId});
    }

  render(){
    console.log("asdasdas",typeof(onDishSelect));
    return (
      <div>
        <Header/>
        {/* defining onClick Function, the below function is same as function name(dishId){return this.onDishSelect(dishid);} */}    
        <Menu dishes={this.state.dishes}
            onClick={(dishId)=>this.onDishSelect(dishId)}/>
            {/* Here I am retrieving the dish from the dish object
             using the dish. filter allows me to iterate over
             all the dishes in the this.state.dishes and returns 
             an array. Therefore the [0] at the end to extract the 
             dish*/}
        <DishdetailComponents  currDish={this.state.dishes.filter(
            (dish) => dish.id===this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
