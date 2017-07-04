import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import SignUp from '../components/SignUp';

const mapStateToProps = (state) => state;

function mapDispatchtoProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

const SignUpContainer = connect(mapStateToProps,mapDispatchtoProps)(SignUp);

export default SignUpContainer;