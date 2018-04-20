import {connect} from 'react-redux';
import ItemMessage from '../components/ItemMessage';

const mapStateToProps = (state) => {
  return {itemMessage: state.getItemMessage.itemMessage};
};

const mapDispatchToProps = (dispatch)=> {
  return {
    getItemMessage: (itemId)=> {
      dispatch({type: 'GETITEMMESSAGE', itemId});
    },
    addComment: (itemId, itemName, nickname, sno, comment)=> {
      dispatch({type: 'ADDCOMMENT', itemId, itemName, nickname, sno, comment});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemMessage);
