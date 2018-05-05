import {connect} from 'react-redux';
import ShowItems from '../components/ShowItems';

const mapStateToProps = (state) => {
  return {
    itemList: state.showItems.itemList,
    showItemList: state.showItems.showItemList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showItems: () => {
      dispatch({type: 'SHOWITEMS'});
    },
    filterItemList: (showItemList) => {
      dispatch({type: 'FILTERITEMLIST', showItemList});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowItems);
