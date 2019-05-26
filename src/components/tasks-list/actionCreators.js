import * as actionTypes  from './actionTypes';
import servises from '../../services';
import {ROW_ON_PAGE} from '../../consts'

const getTasks = (page, sortFieldName, sortType) => dispatch => 
servises.getTasksList(page, sortFieldName, sortType).then(result => {
    if(result.status === 'ok'){
        return result.message
    } 
}, () => 
    Promise.reject({unknown: 'Unknown error. Try again later'})
).then(message => {
    
    var div = Math.trunc(message.total_task_count / ROW_ON_PAGE);
    var rem = message.total_task_count % ROW_ON_PAGE;

    const pagesCount = div + (rem ? 1 : 0);
    
    const tasks = {}, tasksList = [];
    message.tasks.forEach(task => {
        tasksList.push(task.id);
        tasks[task.id] = {... task};
    });

    dispatch({
        type: actionTypes.TASK_LIST_SET_VALUES,
        payload: {
            page,
            pagesCount,
            tasks,
            tasksList
        }
    })

});

const createTask = data => dispatch => {
    const {username, email, text} = data;
    return servises.createTask(username, email, text).then(result => {
        if(result.status === 'error'){
            return Promise.reject(result.message);
        }
    }, () => 
        Promise.reject({unknown: 'Unknown error. Try again later'})
    );
}

const editTask = id=> data => dispatch => {
    const {username, email, text, status} = data;
    const token = sessionStorage.getItem('token');
    return servises.editTask(token, id, username, email, text, status).then(result => {
        if(result.status === 'error'){
            return Promise.reject(result.message);
        }
    }, () => 
        Promise.reject({unknown: 'Unknown error. Try again later'})
    );
}

export default {
    getTasks,
    createTask,
    editTask
}