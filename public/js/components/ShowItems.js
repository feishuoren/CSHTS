import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/showItems.css';

import {Link} from 'react-router-dom';

import ItemTypeList from './ItemTypeList';

export default class Items extends Component {

  componentWillMount() {
    this.props.showItems();
  }

  render() {

    return (
      <div id="itemList">
        <SearchBox itemList={this.props.itemList} filterItemList={this.props.filterItemList}/>
        <ItemTypeList itemList={this.props.itemList} filterItemList={this.props.filterItemList}/>
        <ItemList showItemList={this.props.showItemList}/>
      </div>
    );
  }
}

class SearchBox extends Component {
  handleKeyDown(event) {
    if (event.keyCode !== 13) {
      return;
    }
    const searchContent = this.searchContent.value;
    const selectType = this.selectType.options[this.selectType.selectedIndex].value;
    const showItemList = this.filterType(this.props.itemList, selectType, searchContent);

    this.props.filterItemList(showItemList);
    setTimeout(() => {
      this.searchContent.value = null;
    }, 1000);
  }

  filterType(itemList, selectType, searchContent) {
    let showItemList;
    if (selectType === '名称') {
      showItemList = itemList.filter(ele => this.isMatch(ele.itemName, searchContent));
    }
    if (selectType === '品牌') {
      showItemList = itemList.filter(ele => this.isMatch(ele.itemBrand, searchContent));
    }

    return showItemList;
  }

  isMatch(itemContent, searchContent) {
    return itemContent.indexOf(searchContent) >= 0;
  }

  render() {
    return (
      <div id="searchBox">
        <select id="selectType" ref={(c) => this.selectType = c}>
          <option value="名称">名称</option>
          <option value="品牌">品牌</option>
        </select>
        <input id="searchContent" placeholder="请输入要搜索的内容" ref={(c) => this.searchContent = c} onKeyDown={this.handleKeyDown.bind(this)}/>
      </div>
    );
  }
}

class ItemList extends Component {
  setItemList() {
    return this.props.showItemList.map((val, index) => {
      return <div key={index} className="item">
        <Link to={`/items/getItemMessage:${val._id}`}>
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
      <div id="items">
        {itemList}
      </div>
    );
  }
}
