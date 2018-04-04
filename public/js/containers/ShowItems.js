import {connect} from 'react-redux';
import ShowItems from '../components/ShowItems';

const mapStateToProps = (state) => {
  return {itemList: state.showItems.itemList};
};

const mapDispatchToProps = (dispatch)=> {
  return {
    showItems: ()=> {
      dispatch({type: 'SHOWITEMS'});
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowItems);
