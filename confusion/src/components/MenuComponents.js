import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
// here Menu is a component


function RenderMenuItem({dish}){
    return(
    <Card>
        <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Link>
    </Card>
    );
}
// here is defined an arrow function instead
const Menu = (props)=>{
    const menu = props.dishes.dishes.map((dish) => {
    // this return populates the menu  variable
        return (
            // key enable identification of each item
            <div key={dish.id} className="col-12 col-md-5 m-1">
            {/* I have to use arrow function to pass argument using onClick function */}
            {/* I am using the onClick Function defined
            in the MainComponent */}
                <RenderMenuItem dish={dish}/>
            </div>
        );
    });

    if(props.dishes.isLoading){
        return(
            <div className="container">
                <div classname="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.dishes.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );
    }
        // this renders the HTML and return to App.js
    return (
        <div className="container">
        {console.log("Menu: Return")}
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

// thisijasijdkasd
export default Menu;