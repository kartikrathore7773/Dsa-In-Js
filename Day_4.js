// process.stdout.write("hello ");
// process.stdout.write("world");

 let prompt = require('prompt-sync')();
// let a = prompt("Enter a number: ");


// console.log("*");
// console.log("*");
// console.log("*");
// console.log("*");
// console.log("*");


// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")
// process.stdout.write("* ")

// let n = Number(prompt("Enter a number"));
// for(let i=1;i<=n;i++){
//     for(let j=1; j<=n;j++ ){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }

// let n = Number(prompt("Enter a number"));
// for(let i=1;i<=n;i++){
//     for(let j=1; j<=i;j++ ){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }
// let n = Number(prompt("Enter a number"));
// for(let i=1;i<=n;i++){
//     for(let j=1; j<=i;j++ ){
//         process.stdout.write(j+" ")
//     }
//     console.log();
    
// }
let n = Number(prompt("Enter a number"));
for(let i=1;i<=n;i++){
    //inverted
    for(let j=1; j<=n-i+1;j++ ){
        process.stdout.write("* ")
    }
    console.log();
    
}