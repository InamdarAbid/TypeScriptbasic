"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Functions 
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 50));
//Below line will give error. Type check is done because of number type added in function 
//console.log(add(10,'50'));
//optional parameter
//Num2 is optional because of ? If we don't pass num2 it will be undefined  
function addOptional(num1, num2) {
    //check for undefined
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(addOptional(5));
console.log(addOptional(5, 40));
function displayName(person) {
    console.log(" Welcome  ".concat(person.firstName, " ").concat(person.lastName));
}
var personoObject = {
    firstName: "Ross",
    lastName: "Joey"
};
displayName(personoObject);
//Classes
var Emplyee = /** @class */ (function () {
    function Emplyee(name) {
        this.employeeName = name;
    }
    Emplyee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Emplyee;
}());
var emp1 = new Emplyee("Rachel");
//console.log(emp1.employeeName);
emp1.greet();
//Inheritance using classes
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Emplyee));
var m1 = new Manager("Ross");
m1.greet();
m1.delegateWork();
//console.log(m1.employeeName)
//Access modifiers
//public, private and protexted
//default is public so access everywhere
//privare only in class
//protected in class and in derived class
