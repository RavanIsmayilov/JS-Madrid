
// var sum = 0 ;

// for (var i = 0; i < 10; i ++) {

//     if (i % 2 == 0){
//         sum = sum + i
//     }
// }
// console.log(sum);


// var input = +prompt("eded daxil edin")

// var counter = 0;

// while(input > 0 ){

//     digit = input % 10;

//     if (digit == 0){
//         counter = counter + 1;
//     }

//     input = Math.floor(input / 10);
// }

// console.log("sifirlarin sayi" , counter);


// var n = 5;
// var sum = 0;
// for (var i = 0; i < n; i++) {

//     var input = +prompt("eded daxil edin")
//     sum = sum + input
// }
// console.log(sum);


// var input = +prompt("eded daxil edin")

// var en_boyuk_reqem = 0;

// while(input > 0 ){

//     reqem = input % 10;

//     if ( en_boyuk_reqem < reqem ){
//         en_boyuk_reqem = reqem
//     }

//     input = Math.floor(input / 10);
// }1
// console.log("en boyuk reqem" , en_boyuk_reqem);

// var eded = 1;
// var sonraki_eded ;
// var evvelki_eded = 1;

// for (var i = 0; i <= 20; i ++){

//     evvelki_eded = evvelki_eded + i

//     console.log(evvelki_eded);

//     eded = evvelki_eded

//     sonraki_eded = eded + evvelki_eded;



//     console.log(sonraki_eded);
// }



// fibanocci
// var a = 0;
// var b = 1;
// var c = 1;
// for (var i = 1; i <= 8; i++) {

//     c = a + b;  
//     a = b;
//     b = c;
//     console.log(c);

// }


// var sum = 0;
// for( var i = 1; i < 6; i++){

//     if (i % 2 === 0 ){    

//         sum = sum + i;  
//     }
// }
// console.log(sum); 

// var sum2 = 0;    
// for( var k = 1; k < sum; k++){

//     if(sum % k === 0){

//         sum2 = sum2 + k;

//     } 
// }
// console.log(sum2);


// if (sum2 === sum){
//     console.log("eded mukemmeldir");
// }else{
//     console.log("eded mukemmel deyil");
// }


// var input = +prompt("eded daxil edin")

// for (var i = 2; i < input ; i++){

//     if (input % i === 0 ){

//         console.log("eded murekkebdir");
//         break;
        
//     }else if(input === 1){

//         console.log("eded ne sade ne murekkebdir");
//         break;

        
//     }else{
        
//         console.log("eded sadedir");

        
//     }
// }


// var input = +prompt ("eded daxil et");
// var counter = 0;

// for (var n = 0; n <= input; n++) {   
    
//     if (input % n == 0) { 
//         counter += 1;    
//         console.log (n);
//     }
// }
//      if (counter == 1){

//         console.log ("eded ne sade ne murekkebdir");
//     }
//     else if  (counter <= 2) {

//         console.log ("eded sadedir");
//     }

//     else {
//         console.log ("eded murekkebdir");
//     }


// var input = +prompt ("eded daxil et");  

// var reqem;

// var reqem_ters = ""

// while(input > 0){
//     reqem = input % 10  

//     input = Math.floor(input / 10)  

//     reqem_ters = reqem_ters + reqem
// }
// console.log(reqem_ters);


// for(var i = 0; i < reqem_ters; i++){

//     if(reqem_ters % i === 0){
//         console.log(i);
//     }
// }


// var arr = [2 , 3 , 4 , 19 , 34 , 29 , 39]

// for( var i = 0; i < arr.length; i++){
//     if ( arr[i] % 10 === 9){
//         console.log(arr[i]);
        
//     }
// }

// var arr = [0 , 1 , 2 , 4 , 5,  6 , 7 , 8 , 9]

// for(var i = 0; i < arr.length; i++){

//     if(arr[i] !== 3){
//         console.log("3 reqemi yoxdur");
//     }

// }


// var arr = ['Imdad', 'Aexi', 'Sema', 'Aysu','Nigar']
// // let result = text.startsWith("A", 1);

// for(var i = 0; i < arr.length; i++) {
//     if(arr[i].startsWith("A")){
//         console.log(arr[i]);
        
//     }
// }


// var arr = ["revan" , "imdad" , "fexi" , "sema" , "nigar"]
// var newArray = []

// for(var i = 0; i < arr.length; i++){
//     var boyuk = arr[i].toUpperCase() 
//     newArray.push(boyuk)
// }
// console.log(newArray);


// var arr = [1 , 2 , 3 , 4 , 5 , 6 , 3 , 8 , 9 ,]

// for(let i = 0; i < arr.length; i++){
//     if(arr[3] === arr[i + 1]){
//         console.log(arr[i]);
//         break;
//     }
// }


// var arr = ["revan" , "imdad" , "fexi" , "sema" , "nigar"] 
// var newArray = []

// for(let i = 0; i < arr.length; i++){
//     var boyuk = arr[0].toUpperCase() + arr.slice(1)
//     newArray.push(boyuk)
// }
// console.log(newArray);

// const arr = "name";        
// const modStr = arr[0].toUpperCase() + arr.slice(1); 
// console.log(str); // name
// console.log(modStr); // Name



// let names = ["ali", "ayse", "mehmet", "esra"];

// for (let i = 0; i < names.length; i++) {

//         names[i] = names[i].slice(0, -1) + names[i].slice(-1).toUpperCase();
// }

// console.log(names); 


// function removeFirstDuplicate(arr) {
//     const seen = new Set();
//     for (let i = 0; i < arr.length; i++) {
//         if (seen.has(arr[i])) {
//             arr.splice(i, 1);
//             return arr; // İlk təkrarlanan elementi tapdıqdan sonra array-i qaytarırıq
//         } else {
//             seen.add(arr[i]);
//         }
//     }
//     return arr; // Əgər təkrarlanan element yoxdursa, eyni array qaytarılır
// }

// const array = [1, 2, 3, 4, 2, 5];
// const result = removeFirstDuplicate(array);
// console.log(result); 

// function logFirstDuplicate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let k = i + 1; k < arr.length; k++) {
//             if (arr[i] === arr[j]) {
//                 console.log(arr[i]);
//                 return;
//             }
//         }
//     }
// }

// const array = [1, 4, 3, 4, 2, 5];
// logFirstDuplicate(array); 

// function CapitalizeFirstLetter(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         var newArr = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)  
//         console.log(newArr);
//     }
// }

// const array = ["apple", "orange", "lemon", "cherry", "banana"];
// CapitalizeFirstLetter(array); 



// function CapitalizeFirstLetter(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         var newArr = arr[0].toUpperCase();
//     }
//     console.log(newArr);
// }

// const array = ["apple", "orange", "lemon", "cherry", "banana"];
// CapitalizeFirstLetter(array); 


// var sum = 0;
// function EvenOdd(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     console.log(sum);

//     if(sum % 2 === 0) {
//         console.log(true);
//     } else{
//         console.log(false);
//     }

// }

// const array = [5, 6, 8 , 7, 5, 4, 1, 2];
// EvenOdd(array); 


// var counter = 0;
// function Add5(arr) {
//     for (let i = 0; i < arr.length; i++) {

//         var newArr = "aeiouAEIOU"

//         if(newArr.includes(arr[i])) {
//             counter++;
//         }    
//     }
//     console.log(counter);
    
// }

// const array = ["a" , "b" , "c" , "d" , "e" , "f" ];
// Add5(array); 


// function Nigar(arr) {
//     for( let i = 0; i < arr.length; i++ ){
        
//         if(arr[i] == 6 ){
//             arr[i] = "-"
//     }
// }
// console.log(arr);

// }


// const array = [ 1, 2, 3, 5, 6, ,66, 56, 6, 9];

// Nigar(array);



// function Sema(arr) {

    
//     let maxNumber = Math.max(...array);
//     let minNumber = Math.min(...array);
  
   

// console.log("en boyuk eded", maxNumber);
// console.log("en kicik ed" , minNumber);


// }

// const array = [2, 4, 6, 1, 9, 5];
// Sema(array);


// let salaries = {
//     John:100,
//     Ann:160,
//     Pete:130
// }

// let sum = 0;


//     for(let value in salaries) {
    
//         sum = sum + salaries[value]
        
//     }

//     console.log(sum);
    



// function isEmpty (obj){
//     for(let key in obj){

//         return false;
//     }
//     return true;
// }
    
//     let schedule = {
//         John:2323
//     };
//     alert( isEmpty(schedule));



// let menu = {
//     width: 200,
//     height: 100,
//     title: "My Menu"
// }

// function multiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof obj[key] === "number"){

//             obj[key] = obj[key] * 2

//         }

//     }
// }
// multiplyNumeric(menu)
// console.log(menu)




// var a = [5,6,7]
// var b = [3,6,10]
// var Bob = 0;
// var Alice = 0;

// for(let i = 0; i < 3 ; i++ ){
//     if(a[i] > b[i]){
        
//         Alice = Alice + 1
        
//     } else if(a[i] === b[i]){
        
//         Alice = Alice 
//         Bob = Bob
        
  
//     } else if(a[i] < b[i]){

//         Bob = Bob + 1
        
        
//     } else{
//         console.log("")
        
//     }
// }
// console.log(Bob)
// console.log(Alice)















