const { Circle, Triangle, Square } = require("./lib/shape.js")

describe('Circle', () => {
    it('renders correctly', () => {
        const shapeColor = '';
        const textColor = '';
        const text= '';
        const shape = new Circle(shapeColor,textColor,text);
        expect(shape.render()).toequal(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`);
    });
});


describe('Triangle', () => {
    it('renders correctly', () => {
        const shapeColor = '';
        const textColor = '';
        const text= '';
        const shape = new Triangle(shapeColor,textColor,text);
        expect(shape.render()).toequal(`<svg xmlns="http://www.w3.org/2000/svg" width="175" height="175" viewBox="0 0 64 64"><polygon fill="${this.shapeColor}"  stroke-width="3" points="30,4,4,60,60,60"/><text x="32" y="50" text-anchor="middle" fill="${this.textColor}" font-size="30">${this.text}</text></svg>`)
    
    });
});


describe('Square', () => {
    it('renders correctly', () => {
        const shapeColor = '';
        const textColor = '';
        const text= '';
        const shape = new Square(shapeColor,textColor,text);
        expect(shape.render()).toequal(`<svg xmlns="http://www.w3.org/2000/svg"><g><rect x="0" y="0" width="100" height="100" fill="${this.textColor}"></rect><text x="0" y="50" font-family="Verdana" font-size="35" fill="${this.shapeColor}">${this.text}</text></g></svg>`);
    });
});
