import React from 'react';
import {Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function RenderCard({item,isLoading,errMess}){
    if(isLoading){
        return(
            <Loading/>
        );
    }
    else if(errMess){
        return(
            <h4>{errMess}</h4>
        );
    }
    return(
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name}/>
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
                    <RenderCard item={props.dish}
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess}
                        />
                </div>
                <div className="col12 col-md m-1">
                    <RenderCard item={props.promotion}
                        isLoading={props.promotionLoading}
                        errMess={props.promotionErrMess}/>
                </div>
                <div className="col12 col-md m-1">
                    <RenderCard item={props.leader}
                        isLoading={props.leaderLoading}
                        errMess={props.leaderErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;