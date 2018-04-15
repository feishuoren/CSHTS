import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/showItems.css';

export default class Items extends Component {

  componentWillMount() {
    this.props.showItems();
  }

  setItemList() {
    return this.props.itemList.map((val, index) => {
      return <div key={index} className="item">
        <a herf="#">
          <div className="itemPicture">
            <img height='100px' src={val.itemPicture}/>
          </div>
          <div className="itemMessage">
            <div className="itemName">
              名称：{val.itemName}
            </div>
            <div className="itemBrand">
              厂牌：{val.itemBrand}
            </div>
            <div className="itemOwner">
              拥有者：{val.itemOwner}
            </div>
            <div className="itemStatus">
              状态：{val.itemStatus == true ? '出售中' : '已售出'}
            </div>
          </div>
          <div className="itemSynopsis">
            简介：{val.itemSynopsis}
          </div>
        </a>
      </div>;
    });
  }

  render() {

    const itemList = Array.isArray(this.props.itemList) && this.props.itemList.length > 0 ? this.setItemList() : '暂时没有商品，等待你来发掘';

    return (
      <div id="itemList">
        <div id="items">
          {itemList}
        </div>
      </div>
    );
  }
}
