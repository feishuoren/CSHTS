import React, {Component} from 'react';

export default class ItemMessage extends Component {
  componentWillMount() {
    const itemId = this.props.location.state.itemId;
    this.props.getItemMessage(itemId);
  }

  render() {
    const itemName = this.props.itemMessage.itemName;
    const itemBrand = this.props.itemMessage.itemBrand;
    const contactInfo = this.props.itemMessage.contactInfo;
    const itemSynopsis = this.props.itemMessage.itemSynopsis;

    return (
      <div>
        <div>名称:{itemName}</div>
        <div>厂牌:{itemBrand}</div>
        <div>联系方式：{contactInfo}</div>
        <div>简介:{itemSynopsis}</div>
      </div>
    );
  }
}
