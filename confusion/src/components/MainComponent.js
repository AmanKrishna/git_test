import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import DishdetailComponents from './DishdetailComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import About from './AboutComponent'
import {Switch, Route, Redirect,withRouter} from 'react-router-dom';
// Connecting MainComponent to redux store
import {connect} from 'react-redux';

// getting state from the state
// the store sends the state as props
const mapStateToProps = state =>{
  return{
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotion: state.promotions
  }
}

class Main extends React.Component {
  constructor(props) {
    console.log("Main: Contructor")
    super(props);
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
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotion.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
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
        <DishdetailComponents dish={this.props.dishes.filter((dish) => 
          dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment) => 
          comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    const AboutUs = () => {
      console.log("Main: AboutUs is called")
      return(
        <About leaders={this.props.leaders}/>
      );
    }

    return (
      <div>
        {console.log("Main: Return Render")}
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          {/* If i want to pass props to a component */}
          <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>}/>
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
// conencting component to react router
// connect takes 2 optional arguments
export default withRouter(connect(mapStateToProps)(Main));
