import {connect} from 'react-redux';
import PersonalSellOrders from '../components/PersonalSellOrders';

const mapStateToProps = (state) => {
  return {userSellOrders: state.userSellOrders.userSellOrders};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserSellOrders: (userSno) => {
      dispatch({type: 'GETUSERSELLORDERS', userSno});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalSellOrders);
