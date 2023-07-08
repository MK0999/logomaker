// <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

//   <circle cx="150" cy="100" r="80" fill="green"/>

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg> -->

class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render() {
        return "";
    }

}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`
    }

}


class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="30" height="30" stroke="${this.shapeColor}" fill="${this.textColor}" stroke-width="5"/>${this.text}</svg>`
    }

}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(){
        return `<svg height="500" width="500"><polygon points="250,60 100,400 400,400" style="fill:${this.shapeColor};stroke:${this.textColor};stroke-width:1" class="triangle" />${this.text}</svg>`
    }
}

module.exports = {Circle, Triangle, Square}

