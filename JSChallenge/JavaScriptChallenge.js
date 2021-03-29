"use strict";
console.log("Connection Established");

//Exercise 11
function validationStation() {
    let parent = document.forms["DustyForm"];
    if (parent["firstname"].value == "") {
        alert("Please enter a name!");
    }
}



/* Exercise 10
var family = ["Dusty", "Bobby", "Django"];
let bobbyIndex = family.findIndex( (x) => x == "Bobby");
//We use an arrow function above to find the index where Bobby is!

document.getElementById("test1").innerHTML = "The name Bobby \
was found at the " + bobbyIndex + " index.";


let floatOrInt = 62.1;
if (Number.isInteger(floatOrInt)) {
    document.getElementById("test2").innerHTML = "62.1 is an integer!"
}
else {
    document.getElementById("test2").innerHTML = "62.1 is not an int..."
}


let toInfinity = 6/0;
if (!Number.isFinite(toInfinity)) {
    document.getElementById("test3").innerHTML = "For some reason, a number divided by 0 goes\
    to infinity rather than throwing an error. I guess it goes by limits?";
}
else {
    document.getElementById("test3").innerHTML = "This is a finite number!";
}

document.getElementById("test3").innerHTML += " " + (3 ** 4);
*/

/*Exercise 8
var greetings;
greetings = () => "I can call an arrow function without parameters!";
debugger;
document.getElementById("test2").innerHTML = greetings();
*/

/* Exercise 7
let x = "How are you doing?";
const y = "I can't be changed!";
//This causes an error, as y is a const! y = "Try me";

document.getElementById("test1").innerHTML = x;
document.getElementById("test2").innerHTML = y;
*/

/* Exercise 6 & 9
class person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greetings() {
        return "Hello, my name is " + this.firstName + " " + this.lastName;
    }
    
}

let Bobby = new person("Bobby", "Jones");
document.getElementById("test1").innerHTML = Bobby.greetings();

*/

/* Exercises 4 & 5
try {
    x = 3.14;
}

catch (err) {
    document.getElementById("test1").innerHTML = 
    "In strict mode, You can't use a variable without initializing it!"
    document.getElementById("test2").innerHTML = 
    "Type of error" + this.
}
*/

/* Exercise 3
try {
    throw "Boink!";
}

catch(err) {
    document.getElementById("test1").innerHTML = 
    "Hey! You found an error. " + err;
}

finally {
    document.getElementById("test3").innerHTML = "All's well that ends well!";
}
*/

/* Exercise 2
let str = document.getElementById("test1").innerHTML;
//We can use RegEx to make the search case insensitive!
let textfound = str.search(/testing/i);

if (textfound > -1) {
    document.getElementById("test2").innerHTML = "Text found at " + textfound;
}
else {
    document.getElementById("test2").innerHTML = "Text not found."
}

//We can also use RegEx for replace! Use an escape character for the ?
document.getElementById("test3").innerHTML = str.replace(/find the text testing\?/i, "replace a string? Yeap!");
*/

/*Exercise 1
document.getElementById("test1").innerHTML = 7 & 3;
document.getElementById("test2").innerHTML = 11 | 4;
document.getElementById("test3").innerHTML = 5 ^ 6;
*/