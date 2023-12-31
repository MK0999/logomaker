// <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">


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
        return `<svg xmlns="http://www.w3.org/2000/svg"><g><rect x="20" y="20" width="150" height="150" fill="${this.textColor}"></rect><text x="50" y="100" font-family="Verdana" font-size="50" fill="${this.shapeColor}">${this.text}</text></g></svg>`
    }

}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="230" height="230" viewBox="0 0 64 64"><polygon fill="${this.shapeColor}"  stroke-width="3" points="30,4,4,60,60,60"/><text x="32" y="46" text-anchor="middle" fill="${this.textColor}" font-size="18">${this.text}</text></svg>`
    }
}

module.exports = {Circle, Triangle, Square}

