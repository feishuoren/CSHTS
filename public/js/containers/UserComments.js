import {connect} from 'react-redux';
import PersonalComments from '../components/PersonalComments';

const mapStateToProps = (state) => {
  return {userComments: state.userComments.userComments.reverse()};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserComments: (userSno) => {
      dispatch({type: 'GETUSERCOMMENTS', userSno});
    },
    deleteUserComment: (theUserNickname, theUserSno, theUserComment) => {
      dispatch({type: 'DELETEUSERCOMMENT', theUserNickname, theUserSno, theUserComment});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalComments);
