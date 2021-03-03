import React from 'react';
import { Card, CardBody, CardImg, Button, CardTitle } from "reactstrap"
const MenuItem = (props) => {

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
                    <Button onClick={props.DishSelect} className="btn btn-sm" style={{ marginTop: "10px", width: "80%", textAlign: "center" }}> Click To See Details </Button>
                </CardBody>

            </Card>

        </div>
    );
};

export default MenuItem;