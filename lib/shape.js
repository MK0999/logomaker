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
        return `<svg xmlns="http://www.w3.org/2000/svg"><g><rect x="0" y="0" width="150" height="150" fill="${this.textColor}"></rect><text x="0" y="50" font-family="Verdana" font-size="35" fill="${this.shapeColor}">${this.text}</text></g></svg>`
    }

}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="175" height="175" viewBox="0 0 64 64"><polygon fill="${this.shapeColor}"  stroke-width="3" points="30,4,4,60,60,60"/><text x="32" y="50" text-anchor="middle" fill="${this.textColor}" font-size="30">${this.text}</text></svg>`
    }
}

module.exports = {Circle, Triangle, Square}

