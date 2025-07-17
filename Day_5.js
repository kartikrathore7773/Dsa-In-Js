// let  arr =[];
// arr.push(100)
// arr.push(10)
// arr.push(20)
// arr.push(30)

// console.log(arr);
// arr.pop();
// console.log(arr);

// let  arr = new Array(3);
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 100;

// arr[10]= 150;
// console.log(arr);


// let arr = []
// arr[0] = 10;
// console.log(arr);

// let arr = new Array(5);

// for(let i = 0; i<arr.length;i++){
//     arr[i] = Number (prompt("Enter a values"))
// }
// console.log(arr);
//sum of array
//  let arr = [10,20,30,40,50];
//  let sum = 0;
//  for(let i = 0; i<arr.length;i++){
//     sum = sum + arr[i];
//  }
//  console.log(sum);
 

//Max number
//  let arr = [10,20,30,40,50];
//  let max = arr[0];
//  for(let i = 1; i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i];
//     }
//  }
//  console.log(max);


//reverse
// let arr = [10, 20, 30, 40, 50];
// let temp = new Array(arr.length);

// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//     temp[j] = arr[i];
//     j++;
// }

// console.log(temp);


let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];

let i = 0, j = 0;
while(i < arr.length){
    if(arr[i] == 0){
        // Swap arr[i] and arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}

console.log(arr);
