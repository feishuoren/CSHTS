import {connect} from 'react-redux';
import SellItem from '../components/SellItem';

const mapStateToProps = (state)=> {
  return {
    imgdataUrl: state.addSellItem.imgdataUrl,
    result: state.addSellItem.result
  };
};

const mapDispatchToprops = (dispatch)=> {
  return {
    getImgData: (imgdataUrl)=> {
      dispatch({type: 'ADDSELLITEM', imgdataUrl});
    },
    updateItemMessage: (imageDateUrl, itemName, itemBrand, itemSynopsis, itemAccount, itemOwner)=> {
      dispatch({type: 'UPDATEITEMMESSAGE', imageDateUrl, itemName, itemBrand, itemSynopsis, itemAccount, itemOwner});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(SellItem);
