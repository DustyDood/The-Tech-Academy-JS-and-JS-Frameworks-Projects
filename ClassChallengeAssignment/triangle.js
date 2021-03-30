import {Shape} from './shape.js';

export class Triangle extends Shape {

    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    getArea() {
        return (0.5 * this.base * this.height);
    }

}