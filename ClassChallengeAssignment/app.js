import {Circle} from './circle.js';
import {Triangle} from './triangle.js';
import {Rectangle} from './rectangle.js';

let testCircle = new Circle("red", 5);
let testTriangle = new Triangle("blue", 10, 10);
let testRectangle = new Rectangle("green", 7, 7);

document.getElementById("cirArea").innerHTML = testCircle.getArea();
document.getElementById("triArea").innerHTML = testTriangle.getArea();
document.getElementById("recArea").innerHTML = testRectangle.getArea();