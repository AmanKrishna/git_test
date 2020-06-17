import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,Jumbotron,
    Modal, ModalHeader, ModalBody, Col,Row,Label,Button,
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import Menu from './MenuComponents';
import {Link} from 'react-router-dom';
import {Control, LocalForm,Error, Errors} from 'react-redux-form';

const required = (val) => !isNaN(Number(val));
// need to do val and !val as initially they are null
const minLength = (len) => (val) => (val) && (val.length >=len);
const maxLength = (len) => (val) => !(val) || (val.length <=len);

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        }
    }

    toggleModal= ()=>
    {
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    handleSubmit(values){
        console.log("Current Staet is: ",values.rating,values.author,values.comment);
        // alert("Current state is: "+JSON.stringify(values));
        this.toggleModal();
        this.props.addComment(this.props.dishId,values.rating,values.author,values.comment);
    }

    render(){
        return(
            <div className="Jumbotron">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}><span class="fa fa-pencil"></span> Submit Comment</Button>
                    </NavItem>
                </Nav>
                {/* building form in the modal */}
                <Modal 
                    isOpen={this.state.isModalOpen} 
                    toggle={this.toggleModal}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody className="ml-3 mr-1">
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select className="form-control"
                                    model=".rating" name="rating" defaultValue="5"
                                    validators={{
                                        required
                                    }}>
                                        <option>1</option>    
                                        <option>2</option>
                                        <option>3</option>    
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>
                                <Errors 
                                    className="text-danger"
                                    model=".rating"
                                    // check only when this is touched
                                    show="touched"
                                    messages={{
                                        required: "Required"
                                    }}
                                ></Errors>
                            </Row>
                            <Row class="form-group">
                                <Label htmlFor="username">Name</Label>
                                <Control.text className="form-control"
                                    model=".author" id="author" name="author"
                                    validators={{
                                        minLength: minLength(3),maxLength: maxLength(15)
                                    }}
                                    />
                                <Errors 
                                    className="text-danger"
                                    model=".author"
                                    // check only when this is touched
                                    show="touched"
                                    messages={{
                                        // required: "Required",
                                        minLength: 'Must be greater than 2 character',
                                        maxLength: 'Must be 15 character or less'
                                    }}
                                ></Errors>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea className="form-control"
                                    model=".comment" id="comment" name="comment" 
                                    rows="5"/>
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" color="primary">Send Feedback</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
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

function RenderComments({comments, addComment, dishId}){
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
                <CommentForm dishId={dishId}
                    addComment={addComment}/>
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
                <RenderComments comments={props.comments} 
                    addComment={props.addComment}
                    dishId={props.dish.id}/>
            </div>
        </div>
    );
}

export default DishdetailComponents;