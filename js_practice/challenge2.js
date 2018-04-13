'use strict';

square(4);
square2(16);
sum(1,3,5);
Person("Jack",32,"Fireman");
Person("Jim",45,"Teacher");

// Functions1: square
/*function square (num) {
    window.alert(num * num);
    return num * num;
}*/

/*function square2 (number) {
    Math.sqrt(number)
}*/

// Create a function that accepts 3 numbers and returns the sum of them.

//functions2: sum 3 numbers
/*function sum (x, y, z) {
    window.alert(x + y + z);
    return x + y + z;
}*/

/* Create a Person object with three values, name, age, occupation.
Output the contents of that object, then edit them, and output again. */
/*var Person = {
    name: "Jack",
    age: 32,
    occupation: "Fireman"
};

window.alert(Person,name,age,occupation);

Person.name = "Jim";
Person.age = 45;
Person.occupation = "Teacher";

window.alert(Person,name,age,occupation);*/

function Person (name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}

var jack = Person("Jack",32,"Fireman");
var jim = Person("Jim",45,"Teacher");

// Create a button that calls a function when clicked.

document.getElementById("button").onclick = click;
function click() {
    alert('hello');
};

// Create a button that increases the age of your Person object.









/*
Exception: TypeError: document.getElementById(...) is null
@Scratchpad/4:51:1
*/