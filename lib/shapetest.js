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
        expect(shape.render()).toequal(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`);
    });
});


describe('Square', () => {
    it('renders correctly', () => {
        const shapeColor = '';
        const textColor = '';
        const text= '';
        const shape = new Square(shapeColor,textColor,text);
        expect(shape.render()).toequal(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`);
    });
});