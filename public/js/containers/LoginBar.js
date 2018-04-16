import {connect} from 'react-redux';
import LoginBar from '../components/LoginBar';

const mapStateToProps = (state)=> {
  return {
    signIn: state.signIn.result,
    isMatch: state.logIn.isMatch,
    userMes: state.logIn.userMes
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    submitSignin: (sno, password, nickname)=> {
      dispatch({type: 'SUBMITSIGNIN', sno, password, nickname});
    },
    submitLogin: (inputSno, inputPassword)=> {
      dispatch({type: 'SUBMITLOGIN', inputSno, inputPassword});
    },
    fixLoginFlag: ()=> {
      dispatch({type: 'FIXLOGINFLAG'});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginBar);
