import {connect} from 'react-redux';
import PersonalComments from '../components/PersonalComments';

const mapStateToProps = (state) => {
  return {userComments: state.getUserComments.userComments.reverse()};
};

const mapDispatchToProps = (dispatch)=> {
  return {
    getUserComments: (userSno)=> {
      dispatch({type: 'GETUSERCOMMENTS', userSno});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalComments);
