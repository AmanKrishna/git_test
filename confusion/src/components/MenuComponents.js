import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishdetailComponent from './components/DishdetailComponent';
// here Menu is a component
class Menu extends Component
{
    // contructor for the componenet
    constructor(props)
    {
      // super initiates parent constructor first
      // thus allowing children to access its methods
        super(props);
        this.state = {
            selectedDish: null
        }
        console.log('Menu Contructor was called');
    }

    componentDidMount(){
        console.log('Menu Didmount was called');
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if(dish!=null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    // Every component must have a render function to render the
    // the component
    render()
    {
        console.log('Menu render() was called');
        const menu = this.props.dishes.map((dish) => {
            // this return populates the menu  variable
            return (
                // key enable identification of each item
                <div key={dish.id} className="col-12 col-md-5 m-1">
                {/* I have to use arrow function to pass argument using onClick function */}
                    <Card onClick={()=> this.onDishSelect(dish)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            {/* <p>{dish.description}</p> */}
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        // this renders the HTML and return to App.js
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* I only added this to include the onClick functionality */}
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                    {/* <DishdetailComponent currDish={this.state.dish}/> */}
                </div>
            </div>
        );
    }
}

// thisijasijdkasd
export default Menu;