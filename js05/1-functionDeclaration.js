// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================
//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları)

/* -------------------------------------------------------------------------- */
// recursive Function
// IIFE (Immediately Invoked Function Expresion)
// Callback Function

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır


//! * --------Function-Declaration----------------------------*/
// /JavaScript'te function declaration (fonksiyon bildirimi), bir fonksiyonun ismini ve içeriğini önceden belirleyerek tanımlamanın temel yoludur.
// Function declaration, function anahtar kelimesi kullanılarak yapılır 
//? Bir fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.
//Hoisting özelliği vardır. Tanımlanmadan önce de çağırılabilr. Globalde tanımlıdır. Sadece function declarationda hoisting yapılır.

// yazdir();
// function yazdir(){
//     console.log("Esenlikler Yeryüzü")
// };

// topla();
// function topla(){
//     console.log(25+35)
// };


//? Parametreli fonksiyonlar
// Parametreli fonksiyonlar, belirli girdilerle işlem yapabilen fonksiyonlardır. 
//?Parametreler, fonksiyon tanımlanırken parantez içinde belirtilir ve fonksiyon çağrıldığında değerler gönderilerek (argüman olarak) kullanılır.
//* Fonksiyon tanımlanırken verilen değerlere arguments denir

// let result = 0;

// function toplam(a,b,c){
//     // console.log(a+b+c)
//     result = a+b+c;
//     return result;
// };

// toplam (1,2,3)

// console.clear()

// console.log(result)

// function greet(name,age = 34 ,job = "Software Developer"){
//     console.log(name)
//     console.log(age)
//     console.log(job)
// };

// greet(); //Return undefined.
// greet("Matt", 34, "Senior Developer");

// function degerler(a,b){
//     console.log(a);
//     console.log(b);
//     console.log(arguments);
// }

// degerler(1,2,3,4,5,6,7);


//! Return Keyword */

// function yasHesapla(isim, tarih){
//     console.log(`Esenlikler ben, ${isim} ${2025- tarih} yaşım var`)
// }

// yasHesapla("Matt", 1990);
