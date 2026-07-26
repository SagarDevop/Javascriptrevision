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

