import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/showItems.css';

import {Link} from 'react-router-dom';

import ItemTypeList from './ItemTypeList';

export default class Items extends Component {

  componentWillMount() {

    this.props.showItems();
  }

  handleKeyDown(event) {
    if (event.keyCode !== 13) {
      return;
    }
    const searchContent = this.searchContent.value;
    const showItemList = this.props.itemList.filter(ele => this.isMatch(ele.itemName, searchContent));
    this.props.filterItemList(showItemList);
    setTimeout(() => {
      this.searchContent.value = null;
    }, 1000);
  }

  isMatch(itemContent, searchContent) {
    return itemContent === searchContent;
  }

  setItemList() {
    return this.props.showItemList.map((val, index) => {
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
              价格：{val.itemPrice}元
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

    const itemList = Array.isArray(this.props.showItemList) && this.props.showItemList.length > 0 ? this.setItemList() : '暂时没有商品，等待你来发掘';

    return (
      <div id="itemList">
        <input placeholder="请输入要搜索的内容" ref={(c) => this.searchContent = c} onKeyDown={this.handleKeyDown.bind(this)}/>
        <ItemTypeList itemList={this.props.itemList} filterItemList={this.props.filterItemList}/>
        <div id="items">
          {itemList}
        </div>
      </div>
    );
  }
}
