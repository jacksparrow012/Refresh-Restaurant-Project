import React, { Component } from 'react';
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem"
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap"
import DishDetail from "./DishDetail";
import LoadComments from "./LoadComments";
class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,

    }
    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }
    onDishSelect = dish => {

        this.setState({ selectedDish: dish })
    }
    render() {

        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem
                    dish={item} key={item.id}
                    DishSelect={() => this.onDishSelect(item)} />

            )
        })
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        }
        return (

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {menu}
                        </div>
                        <div className="col-md-6">
                            {dishDetail}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;