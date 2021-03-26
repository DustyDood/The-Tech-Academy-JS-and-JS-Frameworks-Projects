import {Vehicle} from './vehicle.js';

export class Car extends Vehicle {
    constructor(license, model, latLong) {
        super(license, model, latLong);
        this.make = null;
        this.miles = null;
    }
    
    start() {
        super.start();
        console.log("starting car");
    }

    static getCompName() {
        super.getCompName();
        console.log("my company 2");
    }
}