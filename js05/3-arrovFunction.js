//! Arrow Functions

//diğerleri ile kıyaslayalım

// function selamla2(){
//     console.log("Function Declaration");
// }

// const selamla1 = function(){
//     console.log("Expression Function")
// }

// const selamla3 =()=>{
//     console.log("Arrow Function")
// }

//! Tek satırlık kodlarda {} ve return gerekmez

// const naber =()=>console.log("Merhaba");

// naber();
// const bol = (um) => um % 3 === 0 ? "3'e Bölünür" : "3'e bölünmez";

// console.log(bol(9)); // "3'e Bölünür"
// console.log(bol(10)); // "3'e bölünmez"

// const uceBol = (num) => {
//     let result;

//     if(num%3===0){
//         result= "3'e bölünür"
//     }else{
//         result = "3'e bölünemez"
//     }
//     return result
// }

// console.log(uceBol(99))

// const add = (a, b) => document.write(a + b, "<br>");
// const sub = (a, b) => document.write(a-b, "<br>");
// const mult = (a, b) => document.write(a * b, "<br>");
// const division = (a, b) => document.write(a / b, "<br>");

// add(5,4);
// sub(12, 11);
// mult(7,9);
// division(99,33)

// find the volume of a cylindir with an arrow function

// const volume = (r,h) => Math.PI*r*r*h

// const volume1 = (r,h) => {
//     return Math.PI*r*r*h
// }

// console.log(volume(3,5));
// console.log(volume1(3,5));


//Asal sayıları bulan bir fonksiyon

// returns ends the function


// const asal = (num) =>{
//     if(num<2){
//         console.log("En küçük asal sayı 2'dir");
//         return
//     }

//     for (let i=2; i<num; i++){
//         if(i===2){
//             console.log(i)
//         }else{
//             let asal = true;
//             for(j=2; j<i; j++){
//                 if(i%j === 0){
//                     asal = false
//                     break
//                 }
//             }
//             asal ? console.log(i): ""
//         }
//     }
// }

// asal(10);