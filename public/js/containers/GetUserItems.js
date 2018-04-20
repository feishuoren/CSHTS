import {connect} from 'react-redux';
import PersonalItems from '../components/PersonalItems';

const mapStateToProps = (state) => {
  return {userItems: state.getUserItems.userItems.reverse()};
};

const mapDispatchToProps = (dispatch)=> {
  return {
    getUserItems: (userSno)=> {
      dispatch({type: 'GETUSERITEMS', userSno});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalItems);
