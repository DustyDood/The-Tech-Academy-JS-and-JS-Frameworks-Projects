import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import * as $ from 'jQuery';
import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';

let b = new Button('Click Me');
b.appendToElement($('body'));

let i = new Image('../images/drone.jpg');
i.appendToElement($('body'));

let tb = new TitleBar('Our Application');
tb.addLink('Home', '');
tb.addLink('Cars', '');
tb.addLink('Drones', '');
tb.addLink('Map', '');
tb.appendToElement($('body'));


/*
class Drone {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    constructor(id) {
        this.id = id;
        this.name = "RALPH";
    } 

    static getCompany() {
        console.log("This is in getCompany");
    }
    fly() {
        console.log('Drone ' + this.id + ' is flying.');
    }
}

Drone.maxHeight = 2000;

let drone = new Drone("A123", "Flyer");
let drone2 = new Drone("B456", "Twirl");

drone.fly();
drone2.fly();

Drone.getCompany();
*/