import {connect} from 'react-redux';
import PersonalItems from '../components/PersonalItems';

const mapStateToProps = (state) => {
  return {userItems: state.userItems.userItems.reverse(),};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserItems: (userSno) => {
      dispatch({type: 'GETUSERITEMS', userSno});
    },
    deleteUserItem: (user_Item, user_Sno) => {
      dispatch({type: 'DELETEUSERITEM', user_Item, user_Sno});
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalItems);
