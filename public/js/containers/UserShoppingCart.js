import {connect} from 'react-redux';
import UserShoppingCart from '../components/UserShoppingCart';

const mapStateToProps = (state) => {
  return {userShoppingCartItems: state.userShoppingCart.userShoppingCartItems};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserShoppingCartItems: (userSno) => {
      dispatch({type: 'GETUSERSHOPPINGCART', userSno});
    },
    deleteUserShoppingCartItem: (theUser, theItem) => {
      dispatch({type: 'DELETEUSERSHOPPINGCARTITEM', theUser, theItem});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserShoppingCart);
