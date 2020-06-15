import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import DishdetailComponents from './DishdetailComponents';
import {DISHES} from '../shared/dishes';
import {Comments, COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dishes: DISHES,
      comments: COMMENTS,
      promotion: PROMOTIONS,
      leaders: LEADERS,
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
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotion.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          {/* If i want to pass props to a component */}
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
