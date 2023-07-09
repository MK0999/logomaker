const { Circle, Triangle, Square } = require("./shape.js")

describe('Circle', () => {
    it('renders correctly', () => {
        const shapeColor = '';
        const textColor = '';
        const text= '';
        const shape = new Circle(shapeColor,textColor,"circle",text);
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text> </svg>`);
    });
});


describe('Triangle', () => {
    it('renders correctly', () => {
        const shapeColor = '';
        const textColor = '';
        const text= '';
        const shape = new Triangle(shapeColor,textColor,"Triangle",text);
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" width="230" height="230" viewBox="0 0 64 64"><polygon fill="${shapeColor}"  stroke-width="3" points="30,4,4,60,60,60"/><text x="32" y="46" text-anchor="middle" fill="${textColor}" font-size="18">${text}</text></svg>`)
    
    });
});


describe('Square', () => {
    it('renders correctly', () => {
        const shapeColor = '';
        const textColor = '';
        const text= '';
        const shape = new Square(shapeColor,textColor,"Square",text);
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg"><g><rect x="20" y="20" width="150" height="150" fill="${textColor}"></rect><text x="50" y="100" font-family="Verdana" font-size="50" fill="${shapeColor}">${text}</text></g></svg>`);
    });
});
