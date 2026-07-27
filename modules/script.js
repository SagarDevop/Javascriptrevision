// var a = 10;
// console.log(a);
// var a = 20;
// console.log(a);

// var me same variable intialization and re-initialization me error nhi hoti

// scope

// temporal dead zone

// Data types

// 1. Primitive data types
// aisi sarii value jinko copy karne pr tumhe ek real copy milegi
// string, number, boolean, null, undefined, symbol, bigint

// let a = 10;
// let b = a; // copy of a

// a = a + 10; // a = 20

// now b will still be 10 because it was a copy of the original value of a





// 2. Reference data types
// inko copy krne pr real copy nahi milegi but apko refrence milega parents ka 
// object, array, function
//  {}      []      ()

// let a = [1, 2, 3];
// let b = a; // reference of a


// here if a changes then b will also change because they both point to the same reference in memory
// if we  change b then a will also change because they both point to the same reference in memory

// let a = {
//     name : "harshit",
// }

// let b = a; // reference of a

// b.name = "harshit kumar"; // changing the name property of b

// // now if we log a.name it will also be "harshit kumar" because both a and b point to the same object in memory

// Dynamic typing -> js mein variable ka type change ho sakta hai at runtime 
// for exmaple

// let a = 10; // a is a number
// a = "harshit"; // now a is a string
// a = true; // now a is a boolean
// a =[1, 2, 3]; // now a is an array

// type coercion -> js mein variable ka type change ho sakta hai at runtime but it will be converted to the type of the other variable in the operation

// let a = 10; // a is a number
// let b = "20"; // b is a string
// let c = a + b; // c is a string (type coercion) + concatenation

// truthy and falsy values

// falsy values -> false, 0, "", null, undefined, NaN
// rest all values are truthy values

//------------------------------------------->

//  OPERATORS

// let a = 10;

// typeof a; 
// console.log(typeof a); // number

// let a = [1, 2, 3];

// typeof a;
// console.log(typeof a);

// here is conflict because a is an array but typeof operator will return object 

// this is typeof operator which will return the type of the variable

// instanceof operator -> it will check if the variable is an instance of a particular class or not

// instanceof work with reference data types only because primitive data types are not objects

// ------------------------------------->

// CONTROL FLOW

// function checkNumber(num){
//     if(num > 0) return "Positive";
//     if(num < 0) return "Negative";
//     return "Zero";
// }

// console.log(checkNumber(10)); // Positive
// console.log(checkNumber(-10));
// console.log(checkNumber(0)); // Zero

// function evenOrOdd(num){
//     if(num % 2 === 0) return "Even";
//     return "Odd";
// }

// console.log(evenOrOdd(10)); // Even
// console.log(evenOrOdd(11)); // Odd

// function largestoftwo(num1, num2){
//     if(num1 > num2) return num1;
//     return num2;
// }
// console.log(largestoftwo(10, 20)); // 20

// function largestofthree(num1, num2, num3){
//     if(num1 > num2 && num1 > num3) return num1;
//     if(num2 > num1 && num2 > num3) return num2;
//     return num3;
// }

// console.log(largestofthree(10, 20, 30)); // 30

// function eligibleToVote(age){
//     if(age>= 18) return "Eligible to vote";
//     return "Not eligible to vote";
// }

// console.log(eligibleToVote(20)); // Eligible to vote
// console.log(eligibleToVote(15)); // Not eligible to vote

// function checkGrade(marks){
//     if(marks> 100 || marks< 0) return "Invalid marks";
//     if(marks>= 90) return "A";
//     if(marks>= 80) return "B";
//     if(marks>= 70) return "C";
//     if(marks>= 60) return "D";
//     return "F";
// }

// console.log(checkGrade(92323)); // A

// function leapyear(year){
//     if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) return "Leap year";
//     return "Not a leap year";

// }

// function calculater(num1, num2, operator){
//     switch(operator){
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2; 
//         case "/":
//             return num1 / num2;
// }
// }

// console.log(calculater(10, 20, "+")); // 30

// let a = Number(prompt("Enter a number: "));

// switch(a){
//     case 1:
//         console.log("pizaa");
//         break;
//     case 2:
//         console.log("Burger");
//         break;
//     case 3:
//         console.log("momos");
//         break;
//     case 4:
//         console.log("pasta");
//         break;
//     default:
//         console.log("Invalid choice");

// }

//------------------------------------->

// LOOPS

// FOR LOOP

// for(start; end; increment/decrement){

// }
// for(let i = 1; i<=100; i++){
//   console.log(i);
// }

// WHIlE LOOP

// start
// while(end condition){
//     // code to be executed
//     change(increment/decrement)
// }

// let i = 1;
// while(i<=100){
//     console.log(i);
//     i++;
// }

// do while loop

// start
// do{
//     // code to be executed
//     change(increment/decrement)
// }while(end condition)

// do wala code ik bar to chalega phir condition check hogi

// let i = 12;
// do {
//     console.log(i);
//     i++;
// }
// while(i<=10);
// 12 to print hoga hi 

// Break and continue

// for(let i = 1; i<=10; i++){
//     console.log(i);
//     if(i === 5){
//         break; // loop will break when i is 5
//     }
// }
// here 5 will also be printed because break will be executed after printing 5


//  practise by sherian 

// for(i=1; i<=10; i++){
//     console.log(i);

// }

// let i = 10;

// while(i>=1){
//     console.log(i);
//     i--;
// }

// for( i=1; i<=20; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// let i = 1;

// while(i<=15){
//     if (i%2 !== 0){
//         console.log(i);
//     }
//     i++;
// }

// let c = 5;
// for(i=1; i<=10; i++){
// console.log(`${c} X ${i} = ${c*i}`);
// }
// sum of first 100 natural numbers
// let sum = 0;
// for(i=1; i<=100; i++){
//     sum = sum + i;
// }
//   console.log(sum);

// for(i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }

// let i = 1;
// let n = Number(prompt("Enter a number: "));

// while(i<=n){
//     if(i%2 === 0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
//     i++;
// }

// let count = 0;
// for(i=1; i<=100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         count++;
//     }
// }
// console.log(`Count of numbers divisible by 3 and 5 between 1 and 100 is ${count}`);

// for(i=1; i<=20; i++){
//     if(i%3 === 0){
//         continue; // skip the rest of the loop and go to the next iteration
//     }
//     console.log(i);
// }

// -------------------------------------->

// FUNCTIONS

// way of making a function 

//1

// function declaration

// function functionName(parameters){
//     code to be executed
// }

// calling a function

// functionName(arguments);

// function hello(){
//     console.log("hello world");
// }

// hello();

// 2
// function expression 

// here varibale name is a function name 

// let variableName = function(parameters){
//     // code to be executed
// }

// let fnc = function(){
//     console.log("hello world");
// }
// fnc();

// 3
// fat arrow function

// let fnc = () => {
//     console.log("hello world");
// }
// fnc();

// function with parameters

// now we can send parameters in function as much parameters we want to send we can

// function functionName(parameters){
//     code to be executed
// }
// functionName(parameters)

// function run(animal){
//     console.log(`${animal} is running`);
// }

// run("Dog");
// run("Cat");


// function add(a, b){
//     console.log(`sum of ${a} and ${b} is ${a+b} `)
// }

// add(4,5)

// default parameters ----------->

// ok so default parameter work when on calling function we not provide 
// arguments so we can give default parameter 
// as you se v1 = 1     and  v2 = 2 is default parameters

// function add (v1 = 1, v2 = 2){
//     console.log(v1 + v2)

// }
// add();

// rest parameter ---------->

//jab arguments bahut sare ho to tumein utne hi parameters 
// banane padenge, issey bachne ke liye hum rest ka use krte hai 
// agr ... function ke parameter space mein laga to wo rest operator hai 

// function adcd(...val){
//     console.log(val);
// }

// adcd(1,2,3,4,5,6);

// function adcd(a,b,c,...val){
//     console.log(a,b,c,val);
// }

// adcd(1,2,3,4,5,6);

// return value
// function can return value

// function fnc(){
//     return 21;
// }

// let a = fnc()
// console.log(a)

// function fnc(v){
//     return 21 + v;
// }

// let a = fnc(34)
// console.log(a)

// First class function --------------->

// in js function ko hum value ki trh treat kr sakte hai 

// function ab(val){
//     val(23);
// }

// ab(function(a){
//     console.log(`${a} this is something crazy `)
// })

// here we are sending function in argument as value the only thing we need to know is we can not name function
// as its name is prameter in upper function

// high order function =------>

// vo function hota hai jo ki return kare function ya fir accept kare ek  fnc apne parameter mein

// function abcd( hof){     // this is hof 
//     hof()
// }

// abcd(function(){
//     console.log(" i am not hof the fuction accepting me in his parameter is ")
// })

// function abcd(){
//     return function(){
//         console.log("returning the fuction so abcd is hof")
//     }
// }


// let as = abcd()() // we are using to bracket bcz one to call abcd and one to function inside it 
// console.log(as)


// pure vs impure functions ------------->

// aisa fnc jo ki baahar ki value ko naa badle wo hai pure fnc 

// let a = 12 ;

// function as(){
//     console.log("heh")
// }

// aisa fnc jo bhr kki value ko bdl de vo hai impure fnc 

// function as(){
//     a++
// }

// closures ---> ek fnc jo return kare ek aur function aur return hone walla fnc humesha use karega parent fnc ka koi variable 

// function sagar(){
//     let a = 12
//     return function(){
//         console.log(a)
//     }
// }

// let me = sagar()() // two bracket bcz to call two function 
// console.log(me)

// lexical scoping-------->

// function abcd() {
//     let a = 123;
//     function def(){
//         let b = 13;
//         function fed() {
//             let c = 14;
//         }
//     }

// }

// so here we a can be use everywhere and b can be used unsder def and c can only use inside fed function

// IIFE(immediately invoked function expression)------------>

// (
//     function(){
//     console.log("turnt chale ga kyuki ye call ho chuka hai ")
// }
// )(); // this is iife 

// hoisting in function ---->

// in function statement and declaration we can use hosting like hum niche function banaye aur upr call kare to chalega 

// asd();

// function asd(){
//     console.log("bana niceh pr uper bhi kam kr raha hai ")
// }

// asd(12);

// function asd(a){
//     console.log(` ${a} ana niceh pr uper bhi kam kr raha hai `)
// }

// --- pr hosting error so karegi if we do same thing using function expression 

// a();

// let a = function(){
//     console.log("isme error ayega agr iske uper call kiya to")
// }

// practise by sherian 

// function discountCal(discount){
//     return function(price){
//         return price - price * (discount/100)
//     };
// };

// let ten = discountCal(10)
// let twenty = discountCal(20)

// console.log(ten(100));



