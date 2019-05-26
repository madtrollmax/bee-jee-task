import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


const Task = props => {
    const {task, isAdmin} = props;
    return (
        <tr>
            <td>
                {isAdmin 
                    ? <Link to={`/edit/${task.id}`}>{task.id}</Link> 
                    : task.id
                }
                
            </td>
            <td>{task.username}</td>
            <td>{task.email}</td>
            <td>{task.text}</td>
            <td>{task.status === 10 ? 'Ready' : 'Not ready'}</td>
        </tr>
    );
};

const mapStateToProps = (state, ownProps) => ({
    task: state.tasksData.tasks[ownProps.id]
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);