// for( var i =1 ; i<6000; i++){
//     console.log("hello world");
    
// }

//sum of natural number
// var n =Number(prompt("kha tk add karwaaoge ? "))

// if(isNaN(n)){
//     console.log("Invalid Input");
    
// }
// else{
//     if(n>0){
//         var sum = 0;
//         for(var i= 1; i<=n;i++){
//             sum = sum + i;

//         }
//         console.log(sum);
        
// }
//     else{
//         console.log("should be +ve and more than 0");
//     }

// }

// Factorial Value


// var pr =Number(prompt("kha tk add karwaaoge ? "))

// if(pr === null){
//     console.log("cancelledd");
    
// }
// else{var n = Number(pr);
    
// if(isNaN(n)){
//     console.log("Invalid Input");
    
// }
// else{
//     if(n>0){
//         for(var i= 1; i<=Math.floor(n/2);i++){
//             if(n%i === 0){
//                 console.log(i);
                
//             }
//         }
//         console.log(n);
        
// }
//     else{
//         console.log("should be +ve and more than 0");
//     }

// }
// }

// var n = Number(prompt("Koi number dijiye:"));


// console.log(isPrime(n) ? n + " prime hai" : n + " prime nahi hai");

// function isPrime(n){
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n % 2 === 0) return false;
//     for (var i = 3; i <= Math.floor(Math.sqrt(n)); i += 2){
//         if (n % i === 0) return false;
//     }
//     return true;
// }


// sum of digits
// var n = Number(prompt("Enter a number"));

// if (isNaN(n)) {
//     console.log("Invalid input");
// } else {
//     if (n > 0) {
//         var sum = 0;
//         while (n > 0) {
//             var rem = n % 10;
//             sum = sum + rem;
//             n = Math.floor(n / 10);
//         }
//         console.log(sum);
//     } else {
//         console.log("should be +ve and more than 0");
//     }
// }


// Reverse number

// User se input lena
//  


//strong number 

// var n = Number(prompt("Enter a number:"));

// if (isNaN(n)) {
//     console.log("Invalid input");
// } else {
//     if (n > 0) {
//         var sum = 0;
//         var copy = n;
//         while (n > 0) {
//             var rem = n % 10;
//             var fact = 1;
//             for (var i = 1; i <= rem; i++) {
//                 fact = fact * i;
//             }
//             sum = sum + fact;
//             n = Math.floor(n / 10);
//         }

//         if (copy === sum) {
//             console.log("strong");
//         } else {
//             console.log("not strong");
//         }
//     } else {
//         console.log("should be +ve and more than 0");
//     }
// }
// Guess‑the‑Number (game runs entirely in JavaScript)

// 1. Random number between 1 and 100
const random = Math.floor(Math.random() * 100) + 1;

// 2. Maximum attempts you want to allow
let attempts = 5;

// 3. Main loop
let guess;                     // will hold the user’s guess

while (attempts > 0) {
  // Ask the user for a number
  guess = Number(prompt(`Guess the number (1‑100)\nAttempts left: ${attempts}`));

  // If the input is invalid, don’t count this attempt
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("⛔ Please enter a valid number between 1 and 100");
    continue;                  // same attempt number repeats
  }

  // Correct guess → stop the game
  if (guess === random) {
    alert(`🎉 Correct! The number was ${random}`);
    break;
  }

  // Give a hint
  if (guess > random) {
    alert("📈 Too high — try a smaller number!");
  } else {
    alert("📉 Too low — try a larger number!");
  }

  attempts--;                  // one attempt used up
}

// 4. Out of attempts
if (attempts === 0 && guess !== random) {
  alert(`😔 Game over! The number was ${random}`);
}
