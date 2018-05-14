import {connect} from 'react-redux';
import UserShoppingCart from '../components/UserShoppingCart';

const mapStateToProps = (state) => {
  return {
    userShoppingCartItems: state.userShoppingCart.userShoppingCartItems,
    checkedItems: state.userShoppingCart.checkedItems,
    totalPrice: state.userShoppingCart.totalPrice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserShoppingCartItems: (userSno) => {
      dispatch({type: 'GETUSERSHOPPINGCART', userSno});
    },
    deleteUserShoppingCartItem: (theUser, theItem) => {
      dispatch({type: 'DELETEUSERSHOPPINGCARTITEM', theUser, theItem});
    },
    changeCheckedItems: (checkedItems, totalPrice) => {
      dispatch({type: 'CHANGECHECKEDITEMS', checkedItems, totalPrice});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserShoppingCart);
