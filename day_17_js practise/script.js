// let age = Number(prompt('Enter your age'));

// if (age >= 18) {
//     console.log('You are eligible to vote');
// } else {
//     console.log('You are not eligible to vote');
// }


// let num = Number(prompt('Enter Number:'));

// if(num > 0){
//     console.log("the number is postive")
// } else if(num < 0) {
//     console.log('the number is negative')
// } else if(num == 0){
//     console.log('the number is zero')
// } else console.log('idk')


// let num = Number(prompt('enter the number:'));

// if(num % 2 === 0){
//     console.log('The number is even')
// } else if(num % 2 !== 0){
//     console.log('The number is odd')
// } else console.log('Not a number')

// Find the largest among


// let a = 35;
// let b = 25;

// if(a > b){
//     console.log('a is greater than b')
// } else console.log('The smaller')

// let day = Number(prompt("Enter a day number (1-7):"));

// switch(day){
//     case 1: 
//     console.log("Day 1 is Monday");
//     break;
//     case 2: 
//     console.log("Day 2 is Tuesday");
//     break;
//     case 3: 
//     console.log("Day 3 is Wednesday");
//     break;
//     case 4: 
//     console.log("Day 4 is Thursday");
//     break;
//     case 5: 
//     console.log("Day 5 is Friday");
//     break;
//     case 6: 
//     console.log("Day 6 is Saturday");
//     break;
//     case 7: 
//     console.log("Day 7 is Sunday");
//     break;
//     default:
//         console.log("That is not a valid day number! Please enter 1 through 7.");
// }


// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));

// let operator = prompt("Enter the operator ( +, -, *, / ):");

// switch(operator){
//     case '+': console.log(num1 + num2);
//     break;
//     case '-': console.log(num1 - num2);
//     break;
//     case '*': console.log(num1 * num2);
//     break;
//     case '/': console.log(num1 / num2);
//     break;
//     default:
//         console.log('Invalid operator');           
// }


// for a year to be leap we need to check 3 conditions 
// divide by 4 %===0    ->    "ho sakta hai leap year ho"
// divide by 100 agar   ->    "divide hua toh leap year nahi hai"
// and divide by 400    ->    "Agar divide hua toh woh Leap year hai"

// let year = Number(prompt("Enter the year"));

// if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
//     console.log(year + " is a Leap Year!");
// } else {
//     console.log(year + " is NOT a Leap Year");
// }

// If both are correct → "Welcome Aariz"
// Wrong password → "Incorrect Password"
// Wrong username → "User Not Found"
//if both are wrong → "Both of the credentials are" 

// let username = "aariz";
// let password = "12345";

// let ID = prompt("enter your ID:");
// let pass = prompt("Enter your password:");

// if(ID !== username && pass !== password){
//     console.log("Both of the credentials are incorrect")
// }
// else if(ID === username && pass === password){
//     console.log("Welcome Aariz");
// } else if(ID !== username){
//     console.log("Username entered is incorrect");
// } else if(pass !== password) {
//     console.log("Incorrect Password");
// }


let balance = 1000;

let choice = Number(
    prompt(
`===== ATM MENU =====
1. Check Balance
2. Deposit Money
3. Withdraw Money

Enter your choice:`
    )
);

switch(choice){
    case 1:
        console.log(`Your balance is: ${balance}`);
        break;
    case 2:
        let depositAmount = Number(prompt("Enter amount to be deposited:"));
    if (depositAmount > 0) {
    balance += depositAmount;
    console.log(`New balance: ${balance}`);
} else {
    console.log("Please enter a valid amount!");
}
break;
    case 3:
        let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
        if(withdrawAmount > 0 && withdrawAmount <= balance) {
            balance -= withdrawAmount;
            console.log(`Remaining balance ${balance}`);
        } else {
            console.log("Invalid amount or insufficient balance.");
        }

        break;

    default:
        console.log("Invalid Choice!");
}