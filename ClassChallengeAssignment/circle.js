import {Shape} from './shape.js';

export class Circle extends Shape {

    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        return (3.14 * this.radius ** 2)
    }
}