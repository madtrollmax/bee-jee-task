import {connect} from 'react-redux';
import { TaskEditFormBase } from './TaskEditFormBase';
import actions from '../actionCreators';

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    return {
        ...state.tasksData.tasks[id],
        user: state.user.user
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {id} = ownProps.match.params;
    return {onSave: data => dispatch(actions.editTask(id)(data))};
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskEditFormBase);