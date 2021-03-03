import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from "reactstrap"
const MenuItem = (props) => {
    console.log(props.dish)
    return (
        <div>
            <Card style={{ marginTop: "15px", border: "1px solid grey", boxShadow: "2px 2px #888888", textAlign: "center" }}>
                <CardBody>
                    <CardTitle style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        backgroundColor: "#D70F62",
                        borderRadius: "5px",
                        color: "white",
                        fontFamily: "Arial",
                    }}>{props.dish.name}</CardTitle>
                    <CardImg src={props.dish.image} alt={props.dish.name} />

                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;