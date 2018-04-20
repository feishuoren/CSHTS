import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/showItems.css';

import {Link} from 'react-router-dom';

export default class Items extends Component {

  componentWillMount() {
    this.props.showItems();
  }

  setItemList() {
    return this.props.itemList.map((val, index) => {
      return <div key={index} className="item">
        <Link to={{
          pathname: '/getItemMessage',
          search: '?sort=name',
          hash: '#the-hash',
          state: {itemId: val._id}
        }}>
          <div className="itemPicture">
            <img src={val.itemPicture}/>
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
        </Link>
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
