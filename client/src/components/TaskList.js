import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getTasks, deleteTasks} from '../actions/itemactions';
import propTypes from 'prop-types';


// Task List 

class TaskList extends Component {

    componentDidMount() {
        this.props.getTasks();
    }

    // Delete Task
    onDeleteClick = (id) => {
        this.props.deleteTasks(id);
    }

    render() {
        const { tasks } = this.props.task;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="tasks-list">
                        {tasks.map(({ _id, name}) => (
                            // CSS Transitions Take "classNames" With A s.
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button 
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                        >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

TaskList.propTypes = {
    getTasks: propTypes.func.isRequired,
    task: propTypes.object.isRequired
}

const maoStateToProps = (state) => ({
    task: state.task
});

export default connect(
    maoStateToProps, 
    { getTasks, deleteTasks }
)(TaskList);
