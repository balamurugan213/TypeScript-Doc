// 1
// string
let character="darken";
// integer
let age=30;
// boolean
let correct=false;
console.log(character);
// function
const circ=(diameter: number)=>{
    return diameter * Math.PI;
}
console.log(circ(10));

// array
let names=['rock','paper','sicesssor']
names.push("fire") 
// we cannot pesh numbers to variable names as it is initialized strings
// names.push(5) 
let mix=['ken',5,]
mix.push("done")
mix.push(7)
// object
let two={
    name:'bala',
    age:21
}
// we can overwrite the value but we cannot change the type or property

//2
// explict types
let cha:string;
let money:number;
let right:boolean;

let arr:string[];//just indicate
let arrr:string[]=[];//initialize so function like push can be used

let m:string|number
m='10'
m=10

let mexed:(string|number)[]=[];
mexed.push('ide');
mexed.push(7)

// object explict type
let employee:{
    name:string,
    age:number,
    email:string
}
//3
// Dynamic)(any) type
let a:any =5;
console.log(a);
a=true;
console.log(a);
a='art';
console.log(a);

// array
let mixed:any[]=[];

// obj
let emp:{
    name:any,
    age:any,
    email:any
}
