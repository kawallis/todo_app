import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import Home from '../components/Home';

const mapStateToProps = (state) => state;

function mapDispatchtoProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

const HomeContainer = connect(mapStateToProps,mapDispatchtoProps)(Home);

export default HomeContainer;