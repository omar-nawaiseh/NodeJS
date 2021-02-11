////// START //////////////////////////////////////////
//Excerciese #1 - (Node JS)
//////////////////////////////////////////////////////

// 1-  write a variable without initial value
var x;
console.log(x);

// 2-  write a variable with initial value
var x=1;
console.log(x);

// 3-  write 3 variables in same line without initial value
var x,y,z;
console.log(x,y,z);

// 4-  write 3 variables in same line with initial value
var x = 2,y = 3,z = 4;
console.log(x,y,z);

// 5-  write 3 variables with Boolean value
var x = true;
console.log(x);

// 6-  write a constant
const constx = 10;
console.log(constx);

// 7-  write an empty array without initializing its size
var arr = [];
console.log(arr);

// 8-  write an array of number from 1 to 10
var arr2 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr2);

// 9-  write an array of strings has letters from A to J
var arr3= ['A','B','C','D','E','F','G','H','I','J'];
console.log(arr3);

// 10- Write an Object has at least 3 attributes (keys) and give each one a numeric value
let user = {
    x: 20,
    y: 21,
    city: 22
  }
  console.log(user);

// 11- write an object has at least 3 attributes (keys) and give each one a string value
let user2 = {
    name: "Samer",
    age: "ninety two",
    city: 'NY'
  }
  console.log(user2);

// 12- write an object has at least 3 attributes (keys) and give each one a Boolean value
let user3 = {
    name: true,
    age: false,
    city: true
  }
  console.log(user3);

// 13- write an object has at least 3 attributes (keys) and give each one an array value
let user4 = {
    key0: [1,2],
    key1: ['A','B'],
    key2: []
  }
  console.log(user4);

// 14- write an object has at least 3 attributes (keys) and give each one an object value (object of objects)
var user5 = [
    {a: 1, b: 2}, 
    {a: 3, b: 4}, 
    {a: 5, b: 6}, 
   
 ];
  console.log(user5);

// 15- Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object
var user5 =  {A: 'A', B: 4, C: true, D: [1], E: "earth" }
  console.log(user5);

// 16- Write an array of objects
var user6 = [
     {a: 'A', b: 'B'}, 
     {a: 3, b: 4}, 
     {a: true, b: false}, 
     {a: [1], b: [2]}, 
     {a: "earth", b: "Moon"}, 
   
 ];
  console.log(user6);

// 17- write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object
laith = "BMW";
var user6 = [
    {a: [10], b: [20]}, 
    {a: [30], b: [40]}, 
    {a: [50], b: [60]}, 
    {a: [70], b: [80]}, 
    {a: [90], b: [100]}, 
    {a: laith}, 
  
];
 console.log(user6);

// 18- Write a function to sum two numbers passed in parameters
function sum(num1,num2){
    return num1+num2;
}
console.log(sum(50,50));

// 19- write a function to multiply two numbers
function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(12,12));

// 20- write a function to sum two numbers entered by user
var num1=0;
var num2=0;
function sum(num1,num2){
    return num1+num2;
}
console.log(sum(50,50));

// 21- write a function to multiply two numbers entered by user
var num1=0;
var num2=0;
function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(12,12));

// 22- Write a function to return a value
function subtract(num1,num2){
    return num1-num2;
}
console.log(subtract(550,50));

// 23- Write a function to print a value
function sum(num3,num4){
    return num3+num4;
}
// document.write(sum(10,10));
console.log(sum(350,50));

////// END /////////////////////////////////////////////