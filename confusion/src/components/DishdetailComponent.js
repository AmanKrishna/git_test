import {React} from 'react';
import {Card,CardTitle,CardImg,CardImgOverlay,CardText,CardBody} from 'reactstrap';

class DishdetailComponent extends React.Component{
    contructor(props){
        super(props);
        this.state={
            selectedDish: this.props.currDish
        }
    }

    displayDetails(dish){
        if(selectedDish!=null)
        {
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
        else
        {
            return(
                <div></div>
            );
        }
    }

    render(){
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                {this.displayDetails(this.state.selectedDish)}
            </div>
        );
    }
}