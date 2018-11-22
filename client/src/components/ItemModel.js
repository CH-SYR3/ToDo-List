import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input 
}   from 'reactstrap';
import { connect } from 'react-redux';
// eslint-disable-next-line
import { addTask } from '../actions/itemactions';


// "Add Task" Dialog Box/Pop-Up Box/Modal.

class ItemModel extends Component {
    state = {
        modal: false,
        name: ''
    }

    // Toggle Dialog Box/Pop-Up Box/Modal
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            name: this.state.name

        }

    // Add Task Via ADD_TASK Action.
    this.props.addTask(newTask);


    // Close Dialog Box/Pop-Up Box/Modal.
    this.toggle();

    }


    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}                
                >Add Task</Button>

                {/*Toggle Dialog Box/Pop-Up Box/Modal*/}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    {/*Dialog Box/Pop-Up Box/Modal Header*/}
                    <ModalHeader toggle={this.toggle}>
                        Add To List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="task">Task</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="task"
                                    placeholder="Add To List"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                    >
                                Add Task
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    task: state.task
});

export default connect(mapStateToProps, { addTask })(ItemModel);