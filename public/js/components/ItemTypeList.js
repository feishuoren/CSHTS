import React, {Component} from 'react';

export default class ItemTypeList extends Component {

  handleClick(type) {
    if (Array.isArray(this.props.itemList) && this.props.itemList.length > 0) {
      let showItemList;
      if (type === '全部商品') {
        showItemList = this.props.itemList;
      } else {
        showItemList = this.props.itemList.filter(ele => ele.itemType === type);
      }

      this.props.filterItemList(showItemList);
    }
  }

  render() {
    const typeArr = ['全部商品', '数码家电', '闲置图书', '学习用品', '生活用品', '服装鞋包', '其它'];
    const types = typeArr.map((val, index) => {
      return <li key={index} onClick={this.handleClick.bind(this, val)}>{val}</li>;
    });

    return (
      <div id="itemTypeList">
        <ul>
          {types}
        </ul>
      </div>
    );
  }
}

