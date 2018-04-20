import {connect} from 'react-redux';
import ItemMessage from '../components/ItemMessage';

const mapStateToProps = (state) => {
  return {itemMessage: state.getItemMessage.itemMessage};
};

const mapDispatchToProps = (dispatch)=> {
  return {
    getItemMessage: (itemId)=> {
      dispatch({type: 'GETITEMMESSAGE', itemId});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemMessage);
