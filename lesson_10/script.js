//'use strict';

class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  
  createDiv() {
    let newDiv = document.createElement('div');
    newDiv.style.cssText = `height: ${this.height};
      width: ${this.width};
      background-color: ${this.bg};
      font-size: ${this.fontSize};
      text-align: ${this.textAlign};`;
    
    newDiv.textContent = `Этот квадрат ${this.bg} цвета,
      его высота ${this.height}, а его ширина ${this.width}.
      Высота этого текста ${this.fontSize} и он расположен ${this.textAlign}`;
    document.body.appendChild(newDiv);
  }
}

const newOptions = new Options('500px', '1000px', 'green', '25px', 'center');

newOptions.createDiv();



