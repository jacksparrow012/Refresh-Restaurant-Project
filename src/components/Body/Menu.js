import React, { Component } from 'react';
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem"
import { Card, CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap"
import DishDetail from "./DishDetail";

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false
    }
    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }
    onDishSelect = dish => {

        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        })
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
                        <Card>
                            <CardColumns>
                                {menu}
                            </CardColumns>
                        </Card>
                        <Modal isOpen={this.state.modalOpen}>
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button className="btn btn-sm btn-block" onClick={this.toggleModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;