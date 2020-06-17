import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {/* designation exist only for leader */}
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>

        </Card>
    );
}

function Home(props){
    return(
        <div className="container" >
            <div className="row align-item-start">
                <div className="col12 col-md m-1">
                    <RenderCard item={props.dish}/>
                </div>
                <div className="col12 col-md m-1">
                    <RenderCard item={props.promotion}/>
                </div>
                <div className="col12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;