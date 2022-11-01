export {}
let message = "Hello World !";
console.log(message);

//Vatiable declarion 
// ts encourage  let and const decalration insted of var 

let a = 10;
const name  = "TS example";

//redeclaring let a = 20; will give error 

//Variable type 
//TS support number, boolean, string and template string 

let flag:boolean = true;//value initilazation is optional
let sum:number = 100;
let personName:string = "Abid";

let templateString: string = `This is TypeScript example by ${personName}
    Don't forget to file ITR :P 
`;

console.log(templateString);

//There are null and undefined type as well but they are used as subtype so they can be assigned to any type
let b:number = null;
let c:string = undefined;

//Array in TS
let list1:number[] = [2,3,5];
let list2:Array<number> = [5,7,11];

//To mix array of different types we use tuple
let list3:[string,number] = ["Joe",22];
//Above list can hold only 2 items and only in format of string followed by number

//Emnum 
enum Colour {Red,Green,Blue}

let col:Colour = Colour.Green
console.log(col); 

//Anytype for dynamic type
let randomValue:any = 10;
randomValue = true;
randomValue = "Ross";

//Union of types for same varible
let multiType: number|boolean; 
multiType= 20;
multiType = true;
 

//Functions 
function add(num1:number,num2:number){
    return num1+num2;
}

console.log(add(10,50));
//Below line will give error. Type check is done because of number type added in function 
//console.log(add(10,'50'));

//optional parameter
//Num2 is optional because of ? If we don't pass num2 it will be undefined  
function addOptional(num1:number,num2? :number ){
    //check for undefined
    if(num2){
        return num1+num2;
    }
    else{
        return num1;
    }
}

console.log(addOptional(5));
console.log(addOptional(5,40));

//Interface
interface Person
{
    firstName:string,
    lastName:string
}

function displayName(person:Person){
    console.log(` Welcome  ${person.firstName} ${person.lastName}`);
}

let personoObject = {
    firstName : "Ross",
    lastName : "Joey"
}

displayName(personoObject);

//Classes
class Emplyee{
    employeeName :string;

    constructor(name:string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1  =  new Emplyee("Rachel");
console.log(emp1.employeeName);
emp1.greet();

//Inheritance using classes
class Manager extends Emplyee{
    constructor(managerName:string){
        super(managerName);
    }

    delegateWork(){
        console.log("Manager delegating task");
    }

}

let m1 = new Manager("Ross")
m1.greet();
m1.delegateWork();
console.log(m1.employeeName)

//Access modifiers
//public, private and protexted
//default is public so access everywhere
//privare only in class
//protected in class and in derived class



