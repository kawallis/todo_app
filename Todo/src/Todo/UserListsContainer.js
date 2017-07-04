import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import UserLists from '../components/UserLists';

const mapStateToProps = (state) => state;

function mapDispatchtoProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

const UserListsContainer = connect(mapStateToProps,mapDispatchtoProps)(UserLists);

export default UserListsContainer;