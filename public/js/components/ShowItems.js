import React, {Component} from 'react';
import '!style-loader!css-loader!./../../style/showItems.css';

export default class Items extends Component {

  componentWillMount() {
    this.props.showItems();
  }

  render() {
    const itemList = this.props.itemList.map((val, index) => {
      return <div key={index} className="item">
        <a herf="#">
          <div className="itemPicture">
            {val.itemPicture}
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
