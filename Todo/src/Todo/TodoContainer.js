import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => state;

function mapDispatchtoProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

const TodoContainer = connect(mapStateToProps,mapDispatchtoProps)(TodoList);

export default TodoContainer;