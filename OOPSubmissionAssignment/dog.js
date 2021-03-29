class Dog {
    constructor(breed, color, height, weight) {
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.weight = weight;
    }

    Shake() {
        return "You watch as the " + this.breed + " lifts their paw.";
    }

    Sit() {
        return "The dog sits down and stares.";
    }

    LayDown() {
        return "The dog rolls over and lays down.";
    }
}

//Create a dog named Buddy using the constructor above.
let buddy = new Dog("Golden Retriever", "Gold", "2 ft", "50");

//Show something on the webpage to show the constructor was successful.
document.getElementById("mydog").innerHTML = "\"I have a dog named Buddy! Look, he knows how to shake.\"";
document.getElementById("mydog").innerHTML += buddy.Shake();