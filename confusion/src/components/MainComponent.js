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
import About from './AboutComponent'
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    console.log("Main: Contructor")
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
    console.log("Main: DishSelect")
    this.setState({selectedDish: dishId});
    }

  render(){

    const HomePage = ()=>{
      console.log("Main: HomePage")
      return(
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotion.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    // Route passes 3 props match, location and history
    // using match I can get Id
    const DishWithId = ({match}) => {
      console.log("Main: DishWithId")
      return(
        // dishId specified in the Route path
        // parseInt converts string to int in provided base, here 10
        <DishdetailComponents dish={this.state.dishes.filter((dish) => 
          dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment) => 
          comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    const AboutUs = () => {
      console.log("Main: AboutUs is called")
      return(
        <About leaders={this.state.leaders}/>
      );
    }

    return (
      <div>
        {console.log("Main: Return Render")}
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          {/* If i want to pass props to a component */}
          <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
