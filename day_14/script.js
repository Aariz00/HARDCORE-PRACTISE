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


for(i= 1; i <=100; i++){
    if(i % 7 === 0){
        break
    }
    console.log(i);
}
