

//Refresher, there are multiples ways to define an object, but the odin project says object literal is best

//object literal is executed faster

var obj = {} //object literal

// bdouble dash is added between the curly brace cause it'll go red and the code won't run without it. Also, because Objects isn't defined

// var objj = new Objects {}; //constructor

const myObject = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function(){
        //do stuff!
    }
}

//the two ways to get information out of an object is by dot notation and by bracket notation. Depending upon the circumstance, both have their uses. dot notation cannot be used if a property has a space within it. myObject."obnixous property" won't work

const variable = 'property';

console.log(myObject.variable); //will give undefined because it's looking for a property named variable in our object. When I click it, it doesn't even point to the variable above.

console.log(myObject[variable]);  // is the same as typing myObject['property'] and returns 'Value!'



//If I need a specific type of object that will likely be duplicated, such as a player in a game, inventory items, etc. Making a constructor makes more sense. For review, it's this.



function Player(name, marker){ //notice how Player has an uppercase first. Code talk for "Constructor"
    this.name = name;
    this.marker = marker;
}

//Once the constructor is called, you the function / constructor with the keyword new.

const playerSteve = new Player('steve', 'X'); //This is creating a new variable named playerSteve, and assigning it the property name of 'steve', with another property named 'marker' for X, using the constructor "Player"

console.log(playerSteve.name); // 'steve'
console.log(playerSteve.marker); // 'X'


//now, just like with objects being created using the Object literal method, functions can also be added to objects and called upon

function AnotherPlayer(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(this.name)
    };
}

const player1 = new AnotherPlayer('Joe', 'X');
const player2 = new AnotherPlayer('Jane', 'Y');

player1.sayName(); //logs 'Joe'
player2.sayName(); //logs 'Jane'


//PRACTICE 

/**
 
Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book. 

**/

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title}, ${author}, ${pages}, ${read}` //back ticks are called template literals
    };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');

console.log(theHobbit.info());


//Alright, and unto protoypes I go.

//Every Object in javascript has a prototype

//to actually see a prototype in action, we'll start with my own prototype that was recently made. The player1



Object.getPrototypeOf(player1) === Player.prototype; //returns true (in the example but I dunno how to console.log this)


//All objects have a prototype, and the prototype of an object contains a prototype... SOOO



//So I literally copied and pasted the code below and it didn't work... Dunno what to say about tha tone


 
Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
 };
 /**
 player1.sayHello(); // logs "Hello, I'm a player!"
 player2.sayHello(); // logs "Hello, I'm a player!"
 
 **/

//The purpose of the code above was to show that you can add a function to the prototype of an object, and the children of the object will inherit whatever you gave it. In that example, it was a function named sayHello, that the children player1, and player2, that I made can call upon. That's how it was supposed to be.



console.log(player1.valueOf());

//note, every prototype object inherits from Object.prototype by default

//an objects Object.getPrototypeOf() value can only be one unique prototype object

//the Object.getPrototypeOf() get's or views the prototype of an object

//Object.setPrototypeOf() "sets" or mutates it


//with the prototype method - it can save a lot of memory because you just have to type it out once, and every time it is called upon uniquely within an "instance", it goes down the prototype chain 

//the period that you see attached to a method is called a member access operator. it is allowing access to a method that it is attached to. 

//The this keyword won't point directly to the prototype object it is in, rather to the object that first invokes the "this" keyword

function Dog (name, breed, color){ //this is a constructor function
    this.name = name;
    this.breed = breed;
    this.color = color;
}

const dog1 = new Dog( //notice how this is not a curly brace. earlier in the practice it was all within the same line

    "Daisy",
    "Labrador",
    "black"
)

const dog2 = new Dog(
    "Jack",
    "Labrador",
    "white"
)


Dog.prototype.bark = function (){ //when dog1 or dog2 is called upon with .bark() attached, it will say "Woof" in the console. HOWEVER, even though it is attached to the Dog prototype, if I type in Dog.bark() in the console, I get an uncaught error
    return 'Woof'
}


class Cat{ //this is refered to as "syntactical sugar". It does the same thing as the prototype, but makes it easier to extend with (supposedly)
    constructor(name, breed, color){
        this.name = name
        this.breed = breed
        this.color = color
    }
    meow(){
        return "meow!"
    }
}

class tabby extends Cat {
    constructor(name){
        super(name)
    } 
    smallMeow(){
        return "small meow!"
    }
}

const myPet = new tabby ("ChiChi") //So "myPet" has access to both the tabby.prototype and the cat.prototype, and automitcally the object.prototype since cat.prototype is an object

//"myPet" has access to both the "small meow!" and the "meow!" method within the class tabby and class cat, because the tabby class is a prototype / extension of the cat class and javascript goes down the prototype line to find the requested methods.

