//1

// var eded  = +prompt("eded daxil edin")
// var faktorial = 1;
// var counter  = 0;
// for(var i = 1; i <= eded; i++){

//     counter += 1;
//     faktorial = faktorial * counter


// }
// console.log(faktorial);

//2

// var arr = [5 , 10 , 6 , 8 , 4 , 2 , 11];

// for(let i = 0; i < arr.length; i++){

//     arr[i] = arr[i] % 10 
// }

// arr.sort();
// console.log(arr);


//3

// var arr = [5 , 10 , 6 , 8 , 4 , 2 , 11];
// var counter = 0;
// for (var i = 0; i < arr.length; i++) {

//     for (var j = 1; j <= arr[i]; j++) {
        
//         if(arr[i] % j === 0){
//             counter += 1;
//         }
        
//     }
//     if(counter <= 2){
//         console.log("sade ededler;" , arr[i]);
//     }
//     counter = 0;
    
// }


//4

// var word = prompt("Please enter a word")

// var saitler  = "aeiouAEİOU"

// var counter = 0;

// for(var i = 0; i <= word.length; i ++){
//     if(saitler.includes(word[i])){
//         counter += 1
//     }
// }
// console.log(counter);

//5

// const n = 3
// var arr = []
// for(let i = 1; i <= n; i ++){
    
//     var eded = prompt("eded daxil edin")
//     arr.push(eded)
// }
// var biggest = 0;

// for(let j = 0; j <= arr.length - 1; j++){
    
//     if(arr[j] > biggest){
//         biggest = arr[j]
//     }   
// }
// console.log(biggest);


//6

// var cumle = prompt("cumleni daxil edin")

// var words = cumle.split(" ")

// var answer = " "

// for(let i = 0; i <= words.length - 1; i++){

//     var word = words[i].charAt(0).toUpperCase() + words[i].slice(1)

//     answer = answer + word

//     console.log(answer);
// }


//8

// function Sonu9labiten(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 10 === 9) {
//             return true;
//         }
//     }
//     return false;
// }

// let numbers = [12, 29, 34, 47, 59]; 
// let result = Sonu9labiten(numbers);

// console.log(result); 

//9

// function countEvenNumbers(arr) {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             count++;
//         }
//     }
// }

// let numbers = [34, 12, 59, 29, 47, 88, 66]; 
// let evenCount = countEvenNumbers(numbers);

// console.log("Cüt elementlərin sayı: " + evenCount); 


//10

// let numbers = [0, 2, 3, 4, 5, 6, 7, 8, 9]; 

// for(let i = 0; i <= numbers.length; i++){
//     if(!numbers.includes(i)){
//         console.log("Əskik rəqəm", i);
//     }
// }

//11

// let input = prompt("Bir mətn daxil edin");

//     let result = input.charAt(0).toUpperCase() + input.slice(1);
//     console.log(result);


//12

// let numbers = [10, 20, 30, 40, 50]; 

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] += 5;
// }

// console.log(numbers); 

//13

// let n = 7; 

// for (let i = 1; i <= n; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//         line += j + " ";
//     }
//     console.log(line); 
// }


//14


// localStorage.setItem("name", "John Doe");
// localStorage.getItem("name");





















