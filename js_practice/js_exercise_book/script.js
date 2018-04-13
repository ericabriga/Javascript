'use strict';

// var number = 1;
// alert(number);
// console.log(number);
// var myName= "Erica"
// document.write(myName);


/*function myFunction() {
    alert("Hello\nHow are you?");
    }

// Functions1: square
/*function square (num) {
    window.alert(num * num);
    return num * num;
}*/

/*function square2 (number) {
    Math.sqrt(number)
}*/

//functions2: sum 3 numbers
/*function sum (x, y, z) {
    window.alert(x + y + z);
    return x + y + z;
}*/

//Create a Person object
/*var Person = { Name: "Peter", Age: 34, Occupation: "Developer" };
window.alert(Person.Name);
window.alert(Person.Age);
window.alert(Person.Occupation);
window.alert("Editing Person");
Person.Name = "James";
Person.Age = 20;
Person.Occupation = "IT Consultant";
window.alert(Person.Name);
window.alert(Person.Age);
window.alert(Person.Occupation);*/

/*function increaseAge() {
	Person.Age += 1;
	window.alert(Person.Age);
}*/

//textboxes and buttons to create person and then edit it
/* function createPerson() {
    var Person = { Name: "Peter", Age: 34, Occupation: "Developer" };
/*window.alert(Person.Name);
window.alert(Person.Age);
window.alert(Person.Occupation);
window.alert("Editing Person");*/
/*Person.Name = "James";
Person.Age = 20;
Person.Occupation = "IT Consultant";*/
/*window.alert(Person.Name);
window.alert(Person.Age);
window.alert(Person.Occupation);*/
    /*console.log(Person);
}*/

//Person={};

/*function editPerson () {
    Person.Name=document.getElementById('inputName').value;
    Person.Age=document.getElementById('inputAge').value;
    Person.Occupation=document.getElementById('inputOccupation').value;
    
    console.log(Person);
}*/

//strings1: string methods
/*var Elliott = "He said \"My name is Elliott\"";
window.alert(Elliott);

var Elliott2 = Elliott.toUpperCase();
window.alert(Elliott2);*/

//strings2: string concat
/*var str1 = "Give me ";
var str2 = 5;
var res = str1.concat(str2);
window.alert(res); */

//strings3: splice (push only for elem at the end)
/*var myArray = ["dog", "cat", "tiger"];
myArray.splice(2,0,"snake");
window.alert(myArray);
myArray.splice(3,1);
window.alert(myArray); */

//conditionals1: check age between and boolean result
/*function AgeIf() {
	if (parseInt(Person.Age) < 40 && parseInt(Person.Age) > 20)
	{ return true;
    window.alert(true); }
	else {
		return false; 
        window.alert(false);
	}
}*/

//iteration1: for loop 1_10
/*for (var i = 1; i < 11; i++) {
	window.alert(i);
}*/

//iteration2: if in for loop
/*for (var i = 1; i < 11; i++) {
    if (i%2 === 0) {
        window.alert(i);
    } 
}*/

//iteration3: fizzbuzz
/*for (var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
			window.alert("FizzBuzz");
		}
		else if (i % 3 === 0) {
			window.alert("Fizz");
		}
		else if (i % 5 === 0) {
			window.alert("Buzz");
		}
        else {
            window.alert(i);
        }
            
	}*/

// additional parameters to fizzbuzz
/*function firstFizzBuzz(count, Fizz, Buzz) {
    for (var i = 1; i < count; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
			window.alert("FizzBuzz");
		}
		else if (i % 3 === 0) {
			window.alert("Fizz");
		}
		else if (i % 5 === 0) {
			window.alert("Buzz");
		}
        else {
            window.alert(i);
        }
            
	}

}
function fizzBuzz() {
	firstFizzBuzz(100, "Fizz", "Buzz");
}*/

// iteration4: add/sub to make number divisible by 3
/*function iteration4() {
    while (count !=1) {
    if (count%3 === 0) {
      count1 = count/3 
        window.alert(count + "is divisible by 3");
}
    else if (count%3 === 1) {
        window.alert(count + "is not divisible by 3, substract 1");
            count -= 1;
        window.alert(count/3);
        
    }
    
    else if (number%3 === 2) {
        number--;
        window.alert(count + "is not divisible by 3, add 1");
            count += 1;
        window.alert(count/3);

        }
}
}*/

// strings4: with match
/*var strings4 = "aaahgwl nhttttf"
var count = (strings4.match(a/g) || []).length;
console.log(count);*/


// strings4: with forLoop
/*function tripleStrings4(string) {
    var count=0
    for (var i=0; i<string.length-2; i++) {
        if (string[i]==string[i+1]&& string[i]==string[i+2]) {
            count++
        }
    }
            console.log(count);
}*/

// json1
/*function json1() {
	let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		let requestData = request.response;
		console.log(requestData.squadName);
        console.log(requestData.members[1].name);
	};
}*/

//json2
/*let requestData;
function json2() {
	let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		requestData = request.response;
		console.log(requestData);
		alert("JSON Data just Loaded");
	};
}*/

