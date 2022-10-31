"use strict";
exports.__esModule = true;
var message = "Hello World !";
console.log(message);
//Vatiable declarion 
// ts encourage  let and const decalration insted of var 
var a = 10;
var name = "TS example";
//redeclaring let a = 20; will give error 
//Variable type 
//TS support number, boolean, string and template string 
var flag = true; //value initilazation is optional
var sum = 100;
var personName = "Abid";
var templateString = "This is TypeScript example by ".concat(personName, "\n    Don't forget to file ITR :P \n");
console.log(templateString);
//There are null and undefined type as well but they are used as subtype so they can be assigned to any type
var b = null;
var c = undefined;
//Array in TS
var list1 = [2, 3, 5];
var list2 = [5, 7, 11];
//To mix array of different types we use tuple
var list3 = ["Joe", 22];
//Above list can hold only 2 items and only in format of string followed by number
//Emnum 
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Green"] = 1] = "Green";
    Colour[Colour["Blue"] = 2] = "Blue";
})(Colour || (Colour = {}));
var col = Colour.Green;
console.log(col);
//Anytype for dynamic type
var randomValue = 10;
randomValue = true;
randomValue = "Ross";
//Union of types for same varible
var multiType;
multiType = 20;
multiType = true;
