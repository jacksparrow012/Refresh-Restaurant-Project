import React, { Component } from 'react';

import { Form, Input, Button } from "reactstrap"

class CommentForm extends Component {
    state = {
        author: "",
        rating: "",
        comment: ""
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            author: "",
            rating: "",
            comment: ""
        })
        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment)
    }
    render() {

        return (
            <div className="container">
                <h4>Submit Your Comment</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        required
                        onChange={this.handleInputChange} />

                    <br />
                    <Input
                        type="select" name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input type="textarea" name="comment"
                        value={this.state.comment} required
                        onChange={this.handleInputChange} />
                    <br />
                    <Button type="submit" className="btn btn-danger btn-sm btn-block mb-2" >Submit Comment</Button>
                </Form>
            </div>
        );
    }
}

export default CommentForm