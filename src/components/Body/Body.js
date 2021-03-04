import React from 'react';
import Menu from "./Menu"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import { Route, Redirect, Switch } from "react-router-dom"
const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/menu" component={Menu} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    );
};

export default Body;