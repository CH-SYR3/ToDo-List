//eslint-disable-next-line
import { GET_TASKS, ADD_TASKS, DELETE_TASKS, TASKS_LOADING } from './types';
import axios from 'axios';


export const getTasks = () => dispatch => {
    dispatch(setTasksLoading());
    axios.get('/api/tasks')
    .then(res =>
        dispatch({
            type: GET_TASKS,
            payload: res.data
        })
    )
};

export const addTask = (task) => dispatch => {
    axios
        .post('/api/tasks', task)
        .then(res => 
            dispatch({
                type: ADD_TASKS,
                payload: res.data
            })
        )
};


export const deleteTasks = (id) => dispatch => {
    axios.delete(`api/tasks/${id}`).then(res =>
        dispatch({
            type: DELETE_TASKS,
            payload: id
        })
    ) 
};



export const setTasksLoading = () => {
    return {
        type: TASKS_LOADING
    }
}