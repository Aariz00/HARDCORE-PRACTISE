//Print numbers from 1 to 10 using a for loop.

// for (i = 0; i<=10; i++){
//     console.log(i);
// }

//Print numbers from 10 to 1 using a while loop.

// let i = 10;
// while(i >=   1){
//     console.log(i);
//     i--;
// }

//Print even numbers from 1 to 20 using a for loop.

// for(i = 2; i <= 20; i+=2){
//     console.log(i);
// }

//Print odd numbers from 1 to 15 using a while loop.

// let i = 1;
// while(i <= 15){
//     console.log(i);
//     i+=2;
// }

// Print the multiplication table of 5 (i.e, 5 x 1 = 5)


// for (let i = 1; i <= 10; i++)
//      { console.log('5 x' + i + '='+ (5 * i));
//  }

// Find the sum of numbers from 1 to 100 using a loop.

// let sum = 0;
// for(i = 0; i <= 500; i++){
//     sum = sum + i;
// }

// console.log(sum);

//Print all numbers between 1 to 50 that are divisible by 3 

// for(i = 1; i <= 50; i++){
//     if( i % 3 === 0){
//         console.log(i);
//     }
// }

// Ask the user for a number and print whether each number from 1 to that number is even or odd.


// let num = prompt("Enter a number");

// for(i = 1; i <= num; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`);
//     } else{
//         console.log(`${i} is odd`);
//     }

// }


// Count how many numbers between 1 to 100 are divisible by both 3 and 5.


// for(i = 1; i <=100; i++){
//     if(i % 3 ===0 && i % 5 === 0){
//         console.log(`${i} is divisible by 3 and 5`);
//     }
// }

// Stop at First Multiple of 7

// for(i = 1; i <= 20; i++){
//     if(i % 7 === 0){
//         break;
//     }
//     console.log(i);
// }


// Write a loop from 1 to 100 that:
// Prints each number
// Stops completely when it finds the first number divisible by 7


// for(i= 1; i <=100; i++){
//     if(i % 7 === 0){
//         break
//     }
//     console.log(i);
// }

// Q1
// for(let i = 1; i <= 10.; i++ ){
//     console.log(i);
// }


// Q2
// for(i = 0; i <= 20; i+=2){
//     console.log(i);
// }

// Q3
// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

// Q4
// for(let i = 0; i < 5; i++){
//     console.log("Hello");
// }

// Q5
// for(i = 1; i <=10; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`);
//     } else{console.log(`${i} is odd`);}
// }

// Q6
// let num = prompt("Enter a number");

// if (num > 0) {
//     console.log(`${num} is positive`);
// } else {
//     console.log(`${num} is negative`);
// }


// Q7

// let age = prompt("What is your age");

// if(age >= 18){
//     console.log("Your are eligible to vote");
// } else{
//     console.log("Not eligible");
// }


// Q8
// for (let i = 1; i <= 10; i++) {

//     console.log(`5 x ${i} = ${i}`);

// }

// Q9 Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.


// let count = 0;
// for(let i = 1; i <= 15; i++){
//     if(i > 8){
//         console.log(`${i} is greater than 8`);
//         count++;
//     } else{
//         console.log(`${i} is smaller than 8`);
//     }
// }
// console.log(`Total numbers greater than 8: ${count}`);

// Q10Ask user for password and print access status
// Hardcoded correct password. Compare with user input.




// let pass = "Aariz";

// let password = prompt("Enter your password");

// if (password === null) { 
//     console.error("You pressed cancel");
// } 
// else if (password.trim() === "") { 
//     console.error("Kuch likh to de bhai"); 
// } 
// else if (!isNaN(password)) { 
//     console.error("You entered a number");
// } 
// else if (pass === password) {
//     console.log("matched");
// } 
// else {
//     console.log("Not Matched");
// }





// Q11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”


// console.warn("You have only three attempts to enter the correct passowrd");

// for (let i = 0; i < 3; i++) {

//     let correct_passoword = "Aariz";
//     let passoword = prompt("Enter your password");

//     if (passoword === correct_passoword) {
//         console.log("Congratulations Access granted");
//     } else if(passoword) {
//         console.log("You have only 2 attempts left");
//     } else if(passoword){
//         console.log("last attempt");
//     } else {
//         console.log("Account Locked");
//     }
// }


// Q10 and 11 nahi bana



// let age = prompt("Enter a Number:");

// if (age === null) {
//     console.error("You pressed Cancel Button");

// } else {
//     if (age.trim() === "") {
//         console.error("Please write something");
//     } else {
//         age = Number(age);
//         if (isNaN(age)) {
//             console.error("Please enter a number");

//         } else {
//             console.log(`your age is ${age}`);
//         }
//     }

// }


// Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let attempts = 0;

let khulgaya = false;

let pass = "Aariz";

let password = prompt("Enter your password");
attempts++;

if (password === pass) khulgaya = true;


while (password !== pass) {
    if(attempts === 3) {
         console.error("Account Locked");
        break;
    }

    password = prompt("Enter your password");
    if(password === pass) khulgaya = true;
    attempts++;
}

if (khulgaya === true) console.log("Account Opened");