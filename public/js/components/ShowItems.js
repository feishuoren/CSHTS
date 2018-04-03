import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/showItems.css';

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [
        {itemPic: 'dfs', itemName: 'dfds', itemSynopsis: '这是一个商品的介绍是一个商品的介绍是一个商品的介绍是一个商品的介绍是一个商品的介绍'},
        {itemPic: 'sds', itemName: 'fgdfs', itemSynopsis: '是一个商品的介绍是一个商品的介绍是一个商品的介绍sd是东方大厦faga'},
        {itemPic: 'fs', itemName: 'sdfs', itemSynopsis: '这是一个商品的介绍这是一个商品的介绍这是一个商品的介绍sdfagadsfa'},
        {itemPic: 'fs', itemName: 'sdfs', itemSynopsis: '这是一个商品的介绍这是一个商品的介绍这是一个商品的介绍sdfasdafasdgafga'},
        {itemPic: 'fs', itemName: 'sdfs', itemSynopsis: '这是一个商品的介绍这是一个商品的介绍这是一个商品的介绍sd十分接近faga'},
        {itemPic: 'fs', itemName: 'sdfs', itemSynopsis: '这是一个商品的介绍这是一个商品的介绍这是一个商品的介绍sd是打发ffdsgfgaga'},
        {itemPic: 'fs', itemName: 'sdfs', itemSynopsis: '这是一个商品的介绍这是一个商品的介绍这是一个商品的介绍sdf撒旦法aga'}
      ]
    };
  }

  render() {
    const itemList = this.state.itemList.map((val, index) => {
      return <div key={index} className="item">
        <a herf="#">
          <div className="itemPic">
            {val.itemPic}
          </div>
          <div className="itemName">
            {val.itemName}
          </div>
          <div className="itemSynopsis">
            {val.itemSynopsis}
          </div>
        </a>
      </div>;
    });
    return (
      <div id="itemlist">
        <div id="items">
          {itemList}
        </div>
      </div>
    );
  }
}
