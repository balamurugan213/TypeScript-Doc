// 1
// string
var character = "darken";
// integer
var age = 30;
// boolean
var correct = false;
console.log(character);
// function
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(10));
// array
var names = ['rock', 'paper', 'sicesssor'];
names.push("fire");
// we cannot pesh numbers to variable names as it is initialized strings
// names.push(5) 
var mix = ['ken', 5,];
mix.push("done");
mix.push(7);
// object
var two = {
    name: 'bala',
    age: 21
};
// we can overwrite the value but we cannot change the type or property
//2
// explict types
var cha;
var money;
var right;
var arr; //just indicate
var arrr = []; //initialize so function like push can be used
var m;
m = '10';
m = 10;
var mexed = [];
mexed.push('ide');
mexed.push(7);
// object explict type
var employee;
//3
// Dynamic)(any) type
var a = 5;
console.log(a);
a = true;
console.log(a);
a = 'art';
console.log(a);
// array
var mixed = [];
// obj
var emp;
// declearing a type: function 
var greet;
greet = function () {
    console.log("hello");
};
// no return type
var sub = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a, b);
};
// specifying the return type
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a, b);
    return a + b;
};
add(5, 10);
var emp1 = function (employee) {
    console.log(employee.name, employee.uid);
};
// function signature(decleration)
var greets;
var calc;
greets = function (name, greetsing) {
    console.log("welcome " + name + " to " + greetsing);
};
