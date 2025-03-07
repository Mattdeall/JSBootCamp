// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları)

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------

//**********************************************************/
//! * --------Function-Expression----------------------------*/
// 1-Fonksiyon bir değişkene tanımlanır.
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? önce fonksiyon oluşturmak şart - hoisting olmaz




//? Önce fonksiyonu oluşturmak gerek. Hoisting geçerli değil

// const adYazdir = function(){
//     console.log("Esenlikler");
// };

// adYazdir()

// Parametreli Function Expression

// const isEvenOdd = function(a){
//     if(a%2 == 0){
//         console.log("Even");
//     }else{
//         console.log("Odd")
//     }

// }

// isEvenOdd(12);

// const isEvenOdd = function (a){
//     const result = a%2===0 ? "Even" : "Odd"
//     return result;
// };

// console.log(isEvenOdd(13))

// const isEvenOdd = function(a){
//     const result = a%2===0 ? "Even" : "odd"
//     return result;
// }
// console.log(isEvenOdd(2))


// Find the greatest of the given 3 nums dont use Math.max

let a = 34;
let b = 48;
let c = 99;

const enb = function(){
    if((a>b) && (a>c)){
        console.log(a + " is the greatest num")
    }else if ((b>c)){
        console.log(b + " is the greatest num")
    }else{
        console.log(c + " is the greatest num")
    }
}

enb(a,b,c);

//** Verilen 3 sayıdan en büyüğünü bulun (Math.max kullanmadan) */



// 1.yöntem
let enb = function(a,b,c){
    if ((a>=b) && (a>=c) ) {
        console.log(a)
    } else if ((b>=a) && (b>=c)) {
        console.log(b)
    }else {
        console.log(c)
    }
}

enb(5, 55 ,25)

// 2.yöntem


let a = 100
let b = 105
let c = 99

const enb2 = function(){
    let biggest = a

    if (b > biggest) {
        biggest = b
    } 

    if ( c> biggest){
        biggest = c
    }

    console.log(biggest)
}

enb2()


