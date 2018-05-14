import {connect} from 'react-redux';
import AffirmOrder from '../components/AffirmOrder';

const mapStateToProps = (state) => {
  return {
    result: state.affirmOrder.result,
    checkedItems: state.userShoppingCart.checkedItems
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    submitOrder: (payType, checkedItems, userSno, userName) => {
      dispatch({type: 'SBMITORDER', payType, checkedItems, userSno, userName});
    }

  };
};
export default connect(mapStateToProps, mapDispatchToprops)(AffirmOrder);
