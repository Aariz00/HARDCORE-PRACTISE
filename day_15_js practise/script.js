// Q11

// let attempts = 0;

// let sahipassword = "Aariz";

// let userpassword = prompt("Password bolo");

// attempts++;

// while(attempts < 3 && sahipassword !== userpassword){
//     userpassword = prompt("Password bolo");
//     attempts++;

// }

// if(attempts === 3 && sahipassword !== userpassword){
//     console.error("Sahi Password dall de bhai")
// } else {
//     console.log("Khul gaya account")
// }

// Q12

// let word = prompt("words bolo bhai");
// let counter = 0;
// while(word !== "stop"){
//     if(word === "yes") counter++;
//     word = prompt("words bolo bhai");

// }
// console.log(`Yes tune bola hai : ${counter}`);

// Q13

// for(let i = 1; i<=50; i++){
//     if(i%7 === 0){
//         console.log(i);
//     }
// }

// Q14

// let sum = 0;
// for(let i = 1; i<=30; i++){
//     if(i%2 !== 0){
//         sum = sum + i;
//     }
// }

// console.log(sum);

// Q15

// let num = prompt("Number bolo");
// num = Number(num);

// while(num % 2 !== 0){
//     num = prompt("Number bolo");
//     if(num % 2 ===0){
//         console.log("7 Crore");
//     }
// }

// Q16

// let start = prompt("pehla bol");
// start = Number(start);
// let end = prompt("akhri bol");
// end = Number(end);
// if(start > end) console.error("Pehla number bada hona chayiye")

// for(let i = start; i<=end; i++){console.log(i);

// }

// Q17
// let counter = 0;
// for (let i = 1; i <= 20; i++) {
//     if (counter === 3) break;
//     if (i % 2 !== 0) {
//         console.log(i);
//         counter++;
//     }

// }

// Q18

let counter = 0;
let positiveCount = 0;

let num = prompt("Number bata");
num = Number(num);

if (num > 0) {
    positiveCount++;
}

while (counter < 5) {
    num = prompt("Number bata");
    num = Number(num);

    if (num > 0) {
        positiveCount++;
    }

    counter++;
}
console.log(positiveCount);

// Q19

