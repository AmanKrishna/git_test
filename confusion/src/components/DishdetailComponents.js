import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Menu from './MenuComponents';
import {Link} from 'react-router-dom';



class CommentForm extends React.Component{
    constructor(props){
        super(props);
    }
}

function RenderDish({dish}){
    if(dish!=null)
    {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else
    {
        return(
            <div></div>
        );
    }
}

function RenderComments({comments}){
    if(comments!=null)
    {
        const commentList = comments.map((comment) => {
            return (
                <li>
                    <ul className="list-unstyled m-1">
                        <li className="m-2">{comment.comment}</li>
                        <li className="m-2">-- {comment.author}, {Date(comments.date).toString().substring(4,15)}</li>
                    </ul>
                </li>
            );
        }
        )
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentList}
                </ul>
            </div>
        );
    }
    else
    {
        return(
            <div>adasdsad</div>
        );
    }
}

const DishdetailComponents=(props)=>{
    return (
        <div className="container">
        {console.log("DishDetails")}
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.comments}/>
            </div>
        </div>
    );
}

export default DishdetailComponents;