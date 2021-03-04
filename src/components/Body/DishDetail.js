import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
import LoadComments from "./LoadComments"
import CommentForm from "./CommentForm"
const DishDetail = (props) => {
    console.log(props)
    return (
        <div>
            <Card style={{
                marginTop: "10px",
                border: "1px solid grey", boxShadow: "2px 2px #888888",

            }}>
                <CardBody>
                    <CardImg src={props.dish.image} alt={props.dish.name} />
                    <CardTitle className="commonStyle">Name:<h3>{props.dish.name}</h3></CardTitle>
                    <CardTitle className="commonStyle">Label:<h4>{props.dish.label}</h4></CardTitle>
                    <CardTitle className="commonStyle">Description:<h5>{props.dish.description}</h5></CardTitle>
                    <CardTitle className="commonStyle">Price:<h3>{props.dish.price}</h3></CardTitle>
                </CardBody>
                <h2 className="text-center">User Reviews</h2>
                <LoadComments comments={props.comments} />
                <CommentForm dishId={props.dish.id} />
            </Card>
        </div>
    );
};

export default DishDetail;