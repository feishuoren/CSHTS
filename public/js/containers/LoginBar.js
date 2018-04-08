import {connect} from 'react-redux';
import LoginBar from '../components/LoginBar';

const mapStateToProps = (state)=> {
  return {
    signIn: state.signIn.result
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    submitSignin: (sno, password, nickname)=> {
      dispatch({type: 'SUBMITSIGNIN', sno, password, nickname});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginBar);
