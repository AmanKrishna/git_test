import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
// here Menu is a component

function RenderMenuItem({dish,onClick}){
    return(
    <Card onClick={()=>onClick(dish.id)}>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
    </Card>
    );
}
// here is defined an arrow function instead
const Menu = (props)=>{
    console.log('Menu render() was called');
    const menu = props.dishes.map((dish) => {
    // this return populates the menu  variable
        return (
            // key enable identification of each item
            <div key={dish.id} className="col-12 col-md-5 m-1">
            {/* I have to use arrow function to pass argument using onClick function */}
            {/* I am using the onClick Function defined
            in the MainComponent */}
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
        );
    });
        // this renders the HTML and return to App.js
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

// thisijasijdkasd
export default Menu;