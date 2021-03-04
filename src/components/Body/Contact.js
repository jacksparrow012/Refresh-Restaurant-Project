import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Col, Label } from "reactstrap"
class Contact extends Component {
    state = {
        firstname: "",
        lastname: "",
        telnum: "",
        email: "",
        agree: "",
        contactType: "Tel.",
        message: ""
    }
    handleInputChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
    }
    render() {
        return (
            <div className="container" >
                <div className="row row-content" style={{ textAlign: "center", marginBottom: "20px" }}>
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12">
                        <Form onSubmit={this.handleSubmit} className="formDiv">
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstname" value={this.state.firstname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastname" value={this.state.lastname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact No:</Label>
                                <Col md={10}>
                                    <Input type="number" name="telnum" value={this.state.telnum} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} />
                                            <strong>May We Contact With You</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <br />
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input onChange={this.handleInputChange} type="select" name="contactType" value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" value={this.state.message} placeholder="Write something about our service" onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" className="btn btn-info btn-sm btn-block">Submit</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
};

export default Contact;