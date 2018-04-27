import {connect} from 'react-redux';
import UpdateItemMessage from '../components/UpdateItemMessage';

const mapStateToProps = (state) => {
  return {
    itemMessage: state.updateItemMessage.itemMessage,
    imgdataUrl: state.updateItemMessage.imgdataUrl,
    result: state.updateItemMessage.result
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemMessage: (itemId) => {
      dispatch({type: 'GETITEMMESSAGE', itemId});
    },
    getImgData: (imgdataUrl) => {
      dispatch({type: 'ADDSELLITEM', imgdataUrl});
    },
    changeItemMessage: (newImgdataUrl, newItemName, newItemBrand, newContactInfo, newItemPrice, newItemSynopsis, newItemAccount, newItemOwner, ItemMessage) => {
      dispatch({
        type: 'UPDATEITEMMESSAGE',
        newImgdataUrl,
        newItemName,
        newItemBrand,
        newContactInfo,
        newItemPrice,
        newItemSynopsis,
        newItemAccount,
        newItemOwner,
        ItemMessage
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateItemMessage);
