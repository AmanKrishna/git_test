import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import DishdetailComponents from './DishdetailComponents';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

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
    const HomePage = ()=>{
      return(
        <Home/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          {/* If i want to pass props to a component */}
          <Route path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
