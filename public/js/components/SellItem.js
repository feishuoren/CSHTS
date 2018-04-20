import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '!style-loader!css-loader!./../../style/sellItem.css';

export default class SellItem extends Component {
  componentDidMount() {
    if (!this.getCookieUser().itemAccount) {
      window.location = '#/loginBar';
    }
  }

  getCookieUser() {
    let itemOwner;
    let itemAccount;
    let allCookies = document.cookie.split('; ');
    allCookies.forEach((val) => {
      let cookie = val.split('=');
      let cookieName = cookie[0];
      let cookieValue = cookie[1];
      if (cookieName === 'nickname') {
        itemOwner = cookieValue;
      }
      if (cookieName === 'sno') {
        itemAccount = cookieValue;
      }
    });
    return {itemOwner, itemAccount};
  }

  submitItem() {
    let imageDateUrl = this.props.imgdataUrl;
    let itemName = this.itemName.value;
    let itemBrand = this.itemBrand.value;
    let contactInfo = this.contactInfo.value;
    let itemSynopsis = this.itemSynopsis.value;
    let itemOwner = this.getCookieUser().itemOwner;
    let itemAccount = this.getCookieUser().itemAccount;

    if (this.imgFile.value === '' || this.itemName.value === ''
      || this.itemBrand.value === '' || this.itemSynopsis.value === '' || this.contactInfo.value === '') {
      this.tip.innerHTML = '信息不完整，请补充！';
      setTimeout(function () {
        this.tip.innerHTML = '';
      }, 1000);
    }
    else if (this.itemName.value.length > 10 || this.itemBrand.value > 10 || this.itemSynopsis.value > 100) {
      this.tip.innerHTML = '信息过长，请删减！';
      setTimeout(function () {
        this.tip.innerHTML = '';
      }, 1000);
    }
    else {
      this.props.updateItemMessage(imageDateUrl, itemName, itemBrand, contactInfo, itemSynopsis, itemAccount, itemOwner);
    }
  }

  setTip() {
    let result = this.props.result;
    if (this.tip) {
      if (result === 'success') {
        this.tip.innerHTML = '您已提交成功';
        setTimeout(function () {
          this.tip.innerHTML = '';
          window.location.href = '#/';
        }, 1000);
      }

      if (result === 'fail') {
        this.tip.innerHTML = '失败，请重试';
        setTimeout(function () {
          this.tip.innerHTML = '';
        }, 1000);
      }
    }

  }

  getImg() {
    let files = this.imgFile.files;

    if (files) {
      [].forEach.call(files, readAndPreview.bind(this));
    }

    function readAndPreview(file) {

      // Make sure `file.name` matches our extensions criteria
      if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener('load', ()=> {
          let image = new Image();
          image.height = 100;
          image.title = file.name;
          image.src = reader.result;
          this.preview.appendChild(image);

          let imgdataUrl = reader.result;
          this.props.getImgData(imgdataUrl);
        }, false);
      }

    }
  }

  render() {
    return (
      <div id="sellItemMes">
        <div id="addSellItem">
          <div id="sellContent" className="clearfix">
            <div id="selectPic">
              选择图片：
              <input type="file" id="imgFile" name="file" ref={(c) => this.imgFile = c} onChange={this.getImg.bind(this)}/>
              <div id="preview" ref={(c) => this.preview = c}></div>
            </div>

            <div id="itemMes">
              <div className="msgInput">
                <span>商品名</span><br />
                <input id="itemName" placeholder="请输入10字以内的商品名" ref={(c) => this.itemName = c}/>
              </div>
              <div className="msgInput">
                <span>品牌</span><br />
                <input id="itemBrand" placeholder="请输入10字以内的品牌名" ref={(c) => this.itemBrand = c}/>
              </div>
              <div className="msgInput">
                <span>联系方式</span><br />
                <input id="contactInfo" placeholder="请输入联系方式eg:QQ33333333" ref={(c) => this.contactInfo = c}/>
              </div>
            </div>

            <div id="itemSyn">
              <div className="msgInput">
                <div className="itemIntro">简介</div>
                <div>
                  <textarea placeholder="请输入100字以内的简介" rows="5" cols="23" id="itemSynopsis" ref={(c) => this.itemSynopsis = c}/>
                </div>
              </div>
            </div>
          </div>

          <div id="sellFooter">
            <div id="sellButton">
              <button type="submit" id="submit" onClick={this.submitItem.bind(this)}>提交</button>
              {this.setTip()}
              <Link to="/">
                <button id="cancel">取消</button>
              </Link>
            </div>
            <div id="tip" ref={(c) => this.tip = c}></div>
          </div>
        </div>
      </div>
    );
  }
}
