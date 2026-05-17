// Use rest parameter to accept any number of scores and
// return the total.

// function getscores(...scores){
//     let total = 0;

//     scores.forEach(function (val) {
//         total = total + val;
//     });

//     return total;
// }

// console.log(getscores(11, 15, 18, 19, 26))

// function checkAge(age){
//     if(age < 18) return "Too young";
//     return "Allowed";
// }

// console.log(checkAge(85));



// pass a function into another function and execute it inside

// function abcd(...val){
//         val();
// }

// abcd(function(){
//     console.log("hfjksd")
// });


// function add (v1, v2){
//     console.log(v1 + v2)
// }

// add(5, 54561891686);


function abcd(){
    console.log("jo hai toh hai");
    function defg(){
        console.log("pehle toh abcd hi chlega bhai");
    }
    defg();
}

abcd();