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
 


