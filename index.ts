let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let names: string = "Charles";
names = "simon";

let age:number = 37;
let sentence: string = `hello, ${names} `;

let list:number[] = [1,2,3];
let x: [string,number];
x = ['aaa',10];

enum Color{Blue,Red,Green};
let c:Color = Color.Blue;

let notSures:any = 4;
notSures = "aaa";

let someValue:any = "this is a string";
let strLength:number = (someValue as string).length;
