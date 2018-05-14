import {connect} from 'react-redux';
import PersonalBoughtOrders from '../components/PersonalBoughtOrders';

const mapStateToProps = (state) => {
  return {userBoughtOrders: state.userBoughtOrders.userBoughtOrders};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserBoughtOrders: (userSno) => {
      dispatch({type: 'GETUSERBOUGHTORDERS', userSno});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalBoughtOrders);
