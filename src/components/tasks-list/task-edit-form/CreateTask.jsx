import {connect} from 'react-redux';
import { TaskEditFormBase } from './TaskEditFormBase';
import actions from '../actionCreators';

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    onSave: actions.createTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskEditFormBase);