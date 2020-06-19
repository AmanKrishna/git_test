import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import DishdetailComponents from './DishdetailComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect,withRouter} from 'react-router-dom';
// Connecting MainComponent to redux store
import {connect} from 'react-redux';
import {postComment, fetchDishes,fetchComments,fetchPromos,fetchLeaders} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

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

// after adding mapDispatchToProps to connect this function
// will recieve dispatch on its own.
// The below function is creating a dispatch function
// that can be used inside a component
// In, addComment(...) is an action
// and dispatch(addComment) is a dispatch function
// acting on this action and 
// addComment: is the name of the dispatch function that
// I can use to dispatch actions to the store
const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => 
      dispatch(postComment(dishId, rating, author, comment)),
// This is a thunk
  fetchDishes: () => {dispatch(fetchDishes())},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  // the form will be named feedback
  // this dunction resets the form
  resetFeedbackForm: ()=> {dispatch(actions.reset('feedback'))}
});

class Main extends React.Component {
  constructor(props) {
    console.log("Main: Contructor")
    super(props);
  }

  // after this component is loaded into the view 
  // fetch the dishes
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
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
        dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotion.promos.filter((promo) => promo.featured)[0]}
        promotionLoading={this.props.promotion.isLoading}
        promotionErrMess={this.props.promotion.errMess}
        leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leaderLoading={this.props.leaders.isLoading}
        leaderErrMess={this.props.leaders.errMess}
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
        <DishdetailComponents 
          dish={this.props.dishes.dishes.filter((dish) => 
            dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => 
            comment.dishId === parseInt(match.params.dishId,10))}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
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
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} 
              classNames="page" timeout={300}>
              <Switch>
                <Route path="/home" component={HomePage}/>
                {/* If i want to pass props to a component I need arrow function */}
                <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>}/>
                <Route path="/menu/:dishId" component={DishWithId}/>
                <Route path="/aboutus" component={AboutUs}/>
                <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                <Redirect to="/home"/>
              </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}
// conencting component to react router
// connect takes 2 optional arguments
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
