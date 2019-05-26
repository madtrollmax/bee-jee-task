import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from './actionCreators';
import Task from './task/Task';
import { Table } from 'react-bootstrap';
import TaskHeader from './tasks-header/TasksHeader';
import { COL_ALIASES, SORT_TYPE } from '../../consts';
import Pager from './pager/Pager';
import GlobalError from '../common/global-error/GlobalError';


class TasksList extends Component {
    state = {
        sortFieldName: COL_ALIASES.ID, 
        sortType: SORT_TYPE.ASC, 
        errors: null
    }
    
    componentDidMount = () => {
        const {getTasks} = this.props;
        const {sortFieldName, sortType} = this.state;

        getTasks(1, sortFieldName, sortType).catch(errors => {this.setState({errors})});
    }
    
    onSortChange = fieldName => () => {
        const {getTasks, page} = this.props;
        let {sortFieldName, sortType} = this.state;
        
        if(fieldName === sortFieldName){
            sortType = sortType === SORT_TYPE.ASC ? SORT_TYPE.DESC : SORT_TYPE.ASC;
        } else {
            sortFieldName = fieldName;
            sortType = SORT_TYPE.ASC;
        }
        this.setState({sortFieldName, sortType});
        
        getTasks(page, sortFieldName, sortType).catch(errors => {this.setState({errors})});
    }

    onSetPage = page => () => {
        const {getTasks} = this.props;
        const {sortFieldName, sortType} = this.state;

        getTasks(page, sortFieldName, sortType).catch(errors => {this.setState({errors})});
    }


    render = () => {
        const {tasksList, user} = this.props;
        const {sortFieldName, sortType, errors} = this.state;

        const isAdmin = user === 'admin';
        return (
            <React.Fragment>
                <GlobalError errors={errors} errorField="unknown"/>
                <Table>
                    <thead>
                        <TaskHeader sortFieldName={sortFieldName} sortType={sortType} onSortChange={this.onSortChange}/>
                    </thead>
                    <tbody>
                        {tasksList.map(taskId => <Task id={taskId} isAdmin={isAdmin}/>)}
                    </tbody>
                </Table>
                <Pager onSetPage={this.onSetPage}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    tasksList: state.tasksData.tasksList,
    page: state.tasksData.page,
    user: state.user.user
});

const mapDispatchToProps = {
    getTasks: actions.getTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);