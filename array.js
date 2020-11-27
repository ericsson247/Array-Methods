// var fruits = ["orange", "apple", "peer", "lemon", "mangos", "berries"];
// var foods = ["rice", "beans", "maize", yam];

// document.getElementById("demo").innerHTML = fruits;

// .UNSHIFT Add new element to the beginning of an Array
// function myFunction() {
//     fruits.unshift("bababa", "Pineapple");
//     document.getElementById("demo").innerHTML = fruits;
// }

// .SHIFT From an element from the beginning of an Array
// function myFunction() {
//     fruits.shift();
//     document.getElementById("demo").innerHTML = fruits;
// }

// .POP Remove last element from an Array
// function myFunction() {
//     fruits.pop();
//     document.getElementById("demo").innerHTML = fruits;
//   }

// .PUSH Add a new element to the end of an Array
//   function myFunction() {
//     fruits.push("sweet melon");
//     document.getElementById("demo").innerHTML = fruits;
//   }

// // .CONCAT Join two or more Arrays
// function myFunction() {
//     var fruits = ["orange", "apple", "peer", "lemon", "mangos", "berries"];
//     var foods = ["rice", "beans", "maize", "yam"];
//     var combine = fruits.concat(foods); 
//     document.getElementById("demo").innerHTML = combine;
//   }

//   MAX NUM

// let Number = [2,3,6,6,5];

// function myFunction() {
//     document.getElementById("demo").innerHTML = Number.MAX_VALUE;
//   }

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }

// var num = [2 , 3, 6, 6, 5];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (num[i]>largest) {
//         var largest=num[i];
//     }
// }


// console.log(largest);

// MAX VALUE
// let num = [2 , 3, 6, 6, 5];
// let max = 0;

// for (i=0; i<num.length;i++){
//     if (max<num[i]){
//         max = num [i];
//     }
// }

// console.log(max); 

// let nums = [2, 3, 6, 6, 5];

// function maxNumber(nums){
//     let val = nums [0];
//     for (var i = 1; i<nums.length; i++){
//         if (val < nums[i]){
//             val = nums[i];
//         }
//     }
//     return val;
// }
// console.log(maxNumber(nums));

// let nums = [2, 3, 6, 6, 5];

// function minNumber(nums){
//     let val = nums [0];
//     for (var i = 1; i<nums.length; i++){
//         if (val > nums[i]){
//             val = nums[i];
//         }
//     }
//     return val;
// }
// console.log(minNumber(nums));

// let nums = [2, 3, 6, 6, 5];

// function maxNumber(y){
//     let val = Math.max(...y);
//     return val;
// }

// console.log(maxNumber(nums));

// let nums = [2, 3, 6, 6, 5];

// nums = Math.max(...nums);

// console.log(nums);

// function hurdleRace (k, height){
//     let val = height [0];
//     for (let i = 1; i < height.lenth; i++){
//         if(val < height [i]){
//             val = height [i];
//         }
//     }
//     if (val > k){
//         return val - k;
//     }else {
//         return 0;
//     }
// }
// console.log(hurdleRace(4, [6,3,5,2]));


function hurdleRace (k, height){
    let val = Math.max(...height);
    let ans = val >k? val - k : 0;
    return ans;
}

console.log(hurdleRace(4, [6,3,5,2]));