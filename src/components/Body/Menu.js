import React, { Component } from 'react';
import MenuItem from "./MenuItem"
import { Card, CardColumns, Modal, ModalBody, ModalFooter, Button } from "reactstrap"
import DishDetail from "./DishDetail";
import { connect } from "react-redux"
import { addComment, fetchDishes } from "../../redux/actionCreators";
import Loading from "./Loading"
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),
        //////**start*below this is the previous version before actionCreators[ ,/] */
        // addComment:(dishId, author, rating, comment)=>dispatch((
        //     {
        //         type: actionTypes.ADD_COMMENT,
        //         payload: {
        //             dishId: dishId,
        //             author: author,
        //             rating: rating,
        //             comment: comment
        //         }


        //     }))
        /////////////////////////**********end */
        fetchDishes: () => dispatch(fetchDishes())
    }
}
class Menu extends Component {
    state = {
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
    componentDidMount() {
        this.props.fetchDishes()
    }
    render() {
        document.title = "Menu"
        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            )
        } else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem
                        dish={item} key={item.id}
                        DishSelect={() => this.onDishSelect(item)} />

                )
            })
            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.filter(comment => {
                    return comment.dishId === this.state.selectedDish.id
                })
                dishDetail =
                    <DishDetail dish={this.state.selectedDish}
                        comments={comments}
                        addComment={this.props.addComment}
                    />
            }

            return (

                <div>
                    <div className="container">
                        <div className="row">
                            <Card>
                                <CardColumns style={{
                                    marginBottom: "50px"
                                }}>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)