import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col,Row,FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            // to keep track if a field has been touched
            // I will only validate an input after it has been touched
            touched: {
                firstname: false,
                lastname: false,
                email: false,
                telnum: false
            }

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }

    // to show what is typed
    // event will carry what has chageed
    handleInputChange(event){
        const target = event.target;
        // get the input value
        // first check if its coming from checkbox or another field
        const value = target.type === 'checkbox'?target.checked:target.value;
        // with target.name I get which form element has changed
        const name = target.name
        // to use the name for state update I should use forgroup name
        // which are the same as the state names
        // Eg Formgoup firstname name="firstname" which is same as the state name
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event){
        console.log("Current Staet is: " + JSON.stringify(this.state))
        event.preventDefault()
    }

    // this is called as f(feild)(event)
    // (field,event)=> will not work here
    handleBlur = (field) => (evt) => {
        this.setState({
            // ... = For all things inside touched set value of field to true
            touched: { ...this.state.touched,[field]:true}
        });
    }

    // validate form
    validate(firstname,lastname,telnum,email){
        const errors={
            firstname:'',
            lastname:'',
            email:'',
            telnum:''
        }
        if(this.state.touched.firstname && firstname.length<3)
            errors.firstname="Name should be greater than 3 alphabket";
        else if(this.state.touched.firstname && firstname.length>10)
            errors.firstname="Name should be less than 10 alphabket";

        if(this.state.touched.lastname && lastname.length<3)
            errors.lastname="Name should be greater than 3 alphabket";
        else if(this.state.touched.lastname && lastname.length>10)
            errors.lastname="Name should be less than 10 alphabket";

        const reg =/^\d+$/;
        if(this.state.touched.telnum)
        {
            if(!reg.test(telnum))
                errors.telnum="Telnum should contain only numbers";
            else if(telnum.length!=10)
                errors.telnum="Telnum should be of length 10";
        }

        if(this.state.touched.email)
        {
            if(email.split('').filter(x=>x==='@').length!=1)
                errors.email="Email must contain an @ sign";
        }
        return errors
    }

    render(){
        // everytime there is a change in the form the componenet is rendered again
        // the parts that change
        const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email)
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedbac</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        // value shown is the one in variable
                                        value={this.state.firstname}
                                        // red or green checkbox
                                        valid={errors.firstname===''}
                                        invalid={errors.firstname!==''}
                                        // detecting change
                                        onBlur={this.handleBlur('firstname')}
                                        // triggered on every keystroke
                                        onChange={this.handleInputChange}/>
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname===''}
                                        invalid={errors.lastname!==''}
                                        // to keep track of the change
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange}/>
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. Num"
                                        value={this.state.telnum}
                                        valid={errors.telnum===''}
                                        invalid={errors.telnum!==''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange}/>
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email===''}
                                        invalid={errors.email!==''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange}/>
                                        <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange}/> {' '}
                                                <strong>May we Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option>Tel.</option>    
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;