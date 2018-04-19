import {connect} from 'react-redux';
import PersonalMessage from '../components/PersonalMessage';

const mapStateToProps = (state) => {
  return {userMessage: state.getUserMessage.userMessage};
};

const mapDispatchToProps = (dispatch)=> {
  return {
    getUserMessage: (userSno)=> {
      dispatch({type: 'GETUSERMESSAGE', userSno});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalMessage);
