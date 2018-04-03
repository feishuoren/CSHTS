import React, {Component} from 'react';

export default class SellItem extends Component {

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
        }, false);
      }

    }
  }

  render() {
    return (
      <div>
        选择图片：
        <input type="file" id="imgFile" name="file" ref={(c) => this.imgFile = c} onChange={this.getImg.bind(this)}/>
        <div id="preview" ref={(c) => this.preview = c}></div>
      </div>
    );
  }
}
