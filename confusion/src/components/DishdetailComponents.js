import React from 'react';
import {Card,CardTitle,CardImg,CardImgOverlay,CardText,CardBody} from 'reactstrap';
import Menu from './MenuComponents';


class DishdetailComponents extends React.Component {

    renderDish(dish){
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

    renderComments(dish){
        if(dish!=null)
        {
            const commentList = dish.comments.map((comments) => {
                return (
                    <li>
                        <ul className="list-unstyled m-3">
                            <li className="m-2">{comments.comment}</li>
                            <li className="m-2">-- {comments.author}, {Date(comments.date).toString().substring(4,15)}</li>
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
                <div></div>
            );
        }
    }

    render(){
        return (
            <div className="row">
                {this.renderDish(this.props.currDish)}
                {this.renderComments(this.props.currDish)}
            </div>
        );
    }
}

export default DishdetailComponents;